/*
 * @Author: jasonandjay 
 * @Date: 2019-03-12 13:06:48 
 * @Last Modified by: jasonandjay
 * @Last Modified time: 2019-03-28 08:58:43
 */

const Controller = require('egg').Controller;
class ExamStudentController extends Controller{
    /**
     * 获取所有试卷的列表
     * GET /exam/student
     * {exam_exam_id, student_id, grade_id, start_time, end_time, page, pageSize}
     */
    async index(){
        let exam = await this.service.exam.examStudent.getStudentExam(this.ctx.request.query);
        if (exam && exam.length){
            this.ctx.body = {msg:'学生试卷列表获取成功',code:1, exam}
        }else{
            this.ctx.body = {msg:'学生试卷列表获取失败',code:0}
        }
       
    }
    /**
     * 获取学生考试试卷详情
     * GET /exam/student/w5tcy-g2dts
     * 无参
     */
    async show(){
        let exam_student_id = this.ctx.params.id;
        let exam = await this.service.exam.examStudent.getStudentExamDetail(exam_student_id);
        if (exam){
            this.ctx.body = {msg: '获取试卷详情成功', code: 1, data: exam};   
        }else{
            this.ctx.body = {msg: '获取试卷详情失败', code: 0};   
        }
    }
    
    /**
     * 学生提交创建试卷
     * POST /exam/student
     * {exam_exam_id, questions, start_time, end_time}
     */
    async create(){
        try{
            this.ctx.validate({exam_exam_id:'string', questions: 'array', start_time: 'number', end_time: 'number'},this.ctx.request.body);
        }catch(error){
            this.ctx.status = 400;
            this.ctx.body = {msg:'参数传递有误',code:0, error}
            return;
        }

        // 创建学生试卷
        let row = await this.service.exam.examStudent.createStudentExam(this.ctx.request.body);
        // console.log('row...', row);
        if (row.exam_student_id){
            this.ctx.body = {msg:'已提交过试卷，不准重复提交',code:-1}
        }else if(row){
            this.ctx.body = {msg:'提交试卷成功',code:1}
        }else{
            this.ctx.body = {msg:'提交试卷失败',code:0}
        }
    }

    /**
     * 更新试卷
     * PUT /exam/student/w5tcy-g2dts
     * {score}
     */
    async update(){
        try{
            this.ctx.validate({score:'number'}, this.ctx.request.body);
        }catch(error){
            this.ctx.status = 400;
            this.ctx.body = {msg:'参数传递有误',code:0, error}
            return;
        }

        let exam_student_id = this.ctx.params.id;
        let {score} = this.ctx.request.body;
        let result = await this.service.exam.examStudent.updateStudentExam(exam_student_id, score);
        if (result){
            this.ctx.body = {msg:'批改试卷成功',code:1}
        }else{
            this.ctx.body = {msg:'批改试卷失败',code:0}
        }
    }
}
module.exports = ExamStudentController;