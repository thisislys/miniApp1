/*
 * @Author: tao 
 * @Date: 2019-02-02 12:11:40 
 * @Last Modified by: tao
 * @Last Modified time: 2019-02-02 12:19:56
 * @Func 考试类型的控制器
 */
const Controller = require('egg').Controller;
class ExamtypeController extends Controller{
    /**
     * 获取所有考试的类型
     * /exam/examType
     * GET
     * 无参
     */
    async index(){
        let result = await this.ctx.service.exam.subject.allExamType();
        this.ctx.body = {msg:'考试类型获取成功',code:1,data:result}
    }
}
module.exports = ExamtypeController;