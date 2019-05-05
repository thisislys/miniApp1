/*
 * @Author: tao 
 * @Date: 2019-03-06 10:02:45 
 * @Last Modified by: tao
 * @Last Modified time: 2019-03-06 17:03:31
 * @func: 学生的增删该查
 */

 const Controller = require('egg').Controller;
 const {isExis,retainObj} = require('../../utils/isExis');

 class StudentController extends Controller{
     /**
      * 查看所有的学生
      * /manger/student
      * GET
      */
     async index(){
        let result = await this.ctx.service.manger.manger.findStudent();
        this.ctx.body = {msg:'获取学生数据成功',code:1,data:result}
     }
     /**
     * 获取所有未分配班级的学生
     * /manger/student/new
     * GET
     */
    
    async new(){
        let result = await this.ctx.service.manger.manger.findNoStudent();
        this.ctx.body = {msg:'成功',code:1,data:result};
    }
     /**
      * 增加学生
      * /manger/student
      * POST
      * {student_id,student_name,student_pwd,grade_id}
      * 
      */
     async create(){
        try{
            this.ctx.validate({student_id:'string',student_name:'string',student_pwd:'userpwd'});
        }catch(err){
            this.ctx.body = {msg:err,code:0}
            return;
        }
        const {student_id} = this.ctx.request.body;
        let result = await isExis({
            app:this.app,
            where:{student_id},
            columns:['student_name'],
            tableName:'student'
        });
        if(result.isExis){
            this.ctx.body = {msg:'学号重复',code:0};
            return;
        }
        let body = this.ctx.request.body;
        body = retainObj(['student_id','student_name','student_pwd','grade_id'],body);
        result = await this.ctx.service.manger.manger.createStudent(body);
        if(result.affectedRows === 1){
            this.ctx.body = {msg:'添加学生成功',code:1}
        }else{
            this.ctx.body = {msg:'数据库原因，添加失败',code:0}
        }
        
     }
     /**
      * 修改学生
      * /manger/student/edit
      * PUT
      * {student_id,student_name,student_pwd,grade_id}
      */
     async update(){
        let body = this.ctx.request.body;
        this.ctx.validate({student_id:'string'});
        if(body.student_pwd){
            this.ctx.validate({student_pwd:'userpwd'})
        }
        // 保证更新的字段都是数据库中有的字段
        body = retainObj(['student_id','student_name','student_pwd','grade_id'],body);
        
        let result = await this.ctx.service.manger.manger.updateStudent(body);
        if(result.affectedRows === 1){
            this.ctx.body = {msg:'更新成功',code:1}
        }else{
            this.ctx.body = {msg:'数据库原因，更新失败',code:0}
        }
        
     }
     /**
      * 删除学生
      * /manger/student/:id   传student_id即可
      * DELETE
      */
     async destroy(){
        let params = this.ctx.params;
        let result = await this.ctx.service.manger.manger.delGradeRoomStudent('student','student_id',params.id);
        if(result.affectedRows === 1){
            this.ctx.body = {msg:'删除成功',code:1}
        }else{
            this.ctx.body = {msg:'删除失败，可能是数据库原因',code:0}
        }
     }
 }
module.exports = StudentController;