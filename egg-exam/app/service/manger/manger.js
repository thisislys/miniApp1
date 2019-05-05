/*
 * @Author: tao 
 * @Date: 2019-03-06 11:38:51 
 * @Last Modified by: tao
 * @Last Modified time: 2019-03-06 18:20:19
 * @func 学生、班级、教室管理的业务逻辑
 */

 const Service = require('egg').Service;
 const {ALL_STUDENT_SQL,ALL_GRADE_SQL,NO_GRADE_STUDENT,NO_ROOM_GRADE} = require('../../sql/stuedntRoomGrade');
 class MangerService extends Service{
     // 查询未分配班级的学生
     async findNoStudent(){
        let result = await this.app.mysql.query(NO_GRADE_STUDENT);
        return result;
     }
     // 查询未分配教室的班级
     async findNoGrade(){
        let result = await this.app.mysql.query(NO_ROOM_GRADE);
        return result;
     }
     // 查询学生
     async findStudent(){
        let result = await this.app.mysql.query(ALL_STUDENT_SQL);
        return result;
     }
     // 更新学生
     async updateStudent(body){
        let result = await this.app.mysql.update('student',body,{
            where:{student_id:body.student_id}
        });
        return result;
     }
     // 添加学生
     async createStudent(body){
        let result = await this.app.mysql.insert('student',body);
        return result;
     }
     // 查询教室
     async findRoom(){
        let result = await this.app.mysql.select('room');
        return result;
     }
     // 添加教室
    async createRoom(body){
        let result = await this.app.mysql.insert('room',body);
        return result;
    }
    // 更新教室
    async updateRoom(body){
        let result = await this.app.mysql.update('room',body,{
            where:{room_id:body.room_id}
        });
        return result;
    }
    // 查询班级
    async findGrade(){
        const sql = ALL_GRADE_SQL;
        let result = await this.app.mysql.query(sql);
        return result;
    }
    // 添加班级
    async createGrade(body){
        let result = this.app.mysql.insert('grade',body)
        return result;
    }
    // 更新班级
    async updateGrade(body){
        let result = this.app.mysql.update('grade',body,{
            where:{grade_id:body.grade_id}
        });
        return result;
    }
    // 删除班级、教室、学生
    async delGradeRoomStudent(tableName,key,value){
        let studentRes = null;
        
        if(tableName === 'room'){
            const conn = await this.app.mysql.beginTransaction(); // 初始化事务
            try{
                await conn.delete(tableName,{[key]:value});
                await conn.query(`update grade set room_id=${null} where room_id='${value}'`);
                await conn.commit(); // 提交事务
            }catch(err){
                await conn.rollback(); // 回滚
                return {affectedRows:0};
            }
        }else if(tableName === 'grade'){
            const conn = await this.app.mysql.beginTransaction(); // 初始化事务
            try{
                await conn.delete(tableName,{[key]:value});
                await conn.query(`update student set grade_id=${null} where grade_id='${value}'`);
                await conn.commit();
            }catch(err){
                await conn.rollback(); // 回滚
                return {affectedRows:0};
            }
        }else if(tableName === 'student'){
            studentRes = await this.app.mysql.delete(tableName,{[key]:value});
        }
        if(!studentRes){
            studentRes = {affectedRows:1}
        }
        return studentRes;
    }
    // 查询 班级、教室、学生
    async findGradeRoomStudent(){
        
    }
    
 }
 module.exports = MangerService;
