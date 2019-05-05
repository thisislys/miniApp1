/*
 * @Author: jasonandjay 
 * @Date: 2019-03-04 08:30:28 
 * @Last Modified by: jasonandjay
 * @Last Modified time: 2019-03-21 21:26:16
 */

const Controller = require('egg').Controller;
class ExamController extends Controller{
    /**
     * 获取所有试卷的列表
     * GET /exam/exam
     * 无参
     */
    async index(){
        let exam = await this.service.exam.exam.allExam(this.ctx.request.query);
        this.ctx.body = {msg:'试卷列表获取成功',code:1, exam}
    }
    /**
     * 获取考试试卷详情
     * GET /exam/exam/w5tcy-g2dts
     * GET /exam/unstart/w5tcy-g2dts
     * 无参
     */
    async show(){
        let exam_exam_id = this.ctx.params.id !== 'undefined'? this.ctx.params.id: `9udxat-t45zl8`;
        let exam = await this.service.exam.exam.getExam(exam_exam_id);
        // 判断是教师端请求还是学生端请求
        if (/^\/exam\/unstart/.test(this.ctx.request.url)){
            // 学生端删除试题答案
            exam.questions.forEach(item=>{
                delete item.questions_answer
            })
        }
        if (exam){
            this.ctx.body = {msg: '获取考试试卷成功', code: 1, data: exam};   
        }else{
            this.ctx.body = {msg: '获取考试试卷失败', code: 0};   
        }
    }
    /**
     * 删除试卷
     * DELETE /exam/exam/w5tcy-g2dts
     * 无参
     */
    async destroy() {
        let exam_exam_id = this.ctx.params.id;
        let exam = await this.service.exam.exam.deleteExam(exam_exam_id);
        if (exam){
            this.ctx.body = {msg: '删除试卷成功', code: 1};   
        }else{
            this.ctx.body = {msg: '删除试卷失败', code: 0};   
        }
    }
    /**
     * 创建试卷
     * POST /exam/new
     * {subject_id, start_time, end_time, exam_id}
     */
    async create(){
        try{
            this.ctx.validate({
                subject_id:'string',
                exam_id: 'string',
                title: 'string',
                number: 'number',
                start_time: 'number',
                end_time: 'number'
            },this.ctx.request.body);
        }catch(error){
            this.ctx.status = 400;
            this.ctx.body = {msg:'参数传递有误',code:0, error}
            return;
        }

        let {subject_id, exam_id, number} = this.ctx.request.body;
      
        // 通过sql随机抽题
        let questions = await this.service.exam.exam.getSubjectQuestions(subject_id, exam_id, number);
        // 插入数据库中
        let {row, exam_content} = await this.service.exam.exam.insertExam({
            ...this.ctx.request.body,
            questions
        });
        if (row){
            this.ctx.body = {msg:'创建试卷成功',code:1, data:exam_content}
        }else{
            this.ctx.body = {msg:'创建试卷失败',code:0}
        }
    }
    /**
     * 更新试卷
     * PUT /exam/exam/w5tcy-g2dts
     * {question_ids}
     */
    async update(){
        try{
            this.ctx.validate({question_ids:'string'}, this.ctx.request.body);
        }catch(error){
            this.ctx.status = 400;
            this.ctx.body = {msg:'参数传递有误',code:0, error}
            return;
        }

        let exam_exam_id = this.ctx.params.id;
        let {question_ids} = this.ctx.request.body;
        let result = await this.service.exam.exam.updateExam({exam_exam_id, question_ids});
        if (result){
            this.ctx.body = {msg:'更新试卷成功',code:1}
        }else{
            this.ctx.body = {msg:'更新试卷失败',code:0}
        }
    }
}
module.exports = ExamController;