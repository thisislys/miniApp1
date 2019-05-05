/*
 * @Author: tao 
 * @Date: 2019-02-02 12:11:18 
 * @Last Modified by: tao
 * @Last Modified time: 2019-02-02 21:35:53
 * @Func 课程的控制器
 */
const Controller = require('egg').Controller;
class SubjectController extends Controller{
    /**
     * 获取所有的课程
     * /exam/subject
     * GET
     * 无参
     */
    async index(){
       let result = await this.ctx.service.exam.subject.allSubject();
       this.ctx.body = {msg:'所有的课程获取成功',code:1,data:result}
    }
}
module.exports = SubjectController;