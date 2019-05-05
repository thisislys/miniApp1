/*
 * @Author: tao 
 * @Date: 2019-02-02 11:49:44 
 * @Last Modified by: tao
 * @Last Modified time: 2019-02-02 11:50:15
 * @Func 试题类型控制器
 */
const Controller = require('egg').Controller;
class QuestionsController extends Controller{
    async insertQuestionsType(){
        try{
            this.ctx.validate({text:'string',sort:'string'},this.ctx.request.query);
        }catch(error){
            this.ctx.status = 400;
            this.ctx.body = {msg:'参数传递有误',code:0}
            return;
        }
        
        let {text,sort} = this.ctx.request.query;
        let isRepeat = await this.ctx.service.exam.questions.isRepeat(text,sort);
        if(isRepeat){
            this.ctx.status = 400;
            this.ctx.body = {msg:'试题名称或者排序有重复数据',code:0}
            return;
        }
        let insertRes = await this.ctx.service.exam.questions.insertQuestionsType(text,sort);
        if(insertRes){
            this.ctx.status = 201;
            this.ctx.body = {msg:'数据插入',code:1}
        }else{
            this.ctx.status = 501;
            this.ctx.body = {msg:'数据插入失败',code:0}
        }
        
    }
    async getQuestionsType(){
        let questionsType = await this.ctx.service.exam.questions.getQuestionsType();
        this.ctx.status = 200;
        this.ctx.body = {msg:'数据获取成功',code:1,data:questionsType} 
    }
    async delQuestionsType(){
        try{
            this.ctx.validate({id:'string'})
        }catch(err){
            this.ctx.status = 401;
            this.ctx.body = {msg:'id传递不正确',code:0}
            return;
        }
        let delRes = await this.ctx.service.exam.questions.delQuestionsType(this.ctx.request.body.id);
        this.ctx.status = 200;
        this.ctx.body = delRes === 1 ? {msg:'删除成功',code:1} : {msg:'未删除，可能是传递的id在数据库中未找到',code:0}
    }
}
module.exports = QuestionsController;