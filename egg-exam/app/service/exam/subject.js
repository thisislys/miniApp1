/*
 * @Author: tao 
 * @Date: 2019-01-31 16:05:01 
 * @Last Modified by: tao
 * @Last Modified time: 2019-02-02 12:09:27
 * @Func 课程以及考试类型的业务逻辑
 */
const Service = require('egg').Service;
class SubjectService extends Service{
    // 插入一个课程
    async createSubject(subject_text){
        let isRepeat = await this.isRepeat('subject_text',subject_text,'subject');
        if(isRepeat){
            return 'repeat';
        }
        let subject_id = this.ctx.helper.randomString(2);
        let result = await this.app.mysql.insert('subject',{subject_id,subject_text})
        return result.affectedRows;
    }
    // 插入一个考试类型
    async createExamType(exam_name){
        let isRepeat = await this.isRepeat('exam_name',exam_name,'exam_type');
        if(isRepeat){
            return 'repeat';
        }
        let exam_id = this.ctx.helper.randomString(2);
        let result = await this.app.mysql.insert('exam_type',{exam_id,exam_name});
        return result.affectedRows;
    }
    // 验证某项在某表中是否重复
    async isRepeat(key,value,tableName){
        let result = await this.app.mysql.select(tableName,{where:{[key]:value}});
        return result.length !== 0;
    }
    // 获取所有的课程
    async allSubject(){
        let result = await this.app.mysql.select('subject');
        return result;
    }
    // 所有的考试类型
    async allExamType(){
        let result = await this.app.mysql.select('exam_type');
        return result;
    }
}
module.exports = SubjectService;