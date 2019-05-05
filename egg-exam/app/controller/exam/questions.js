/*
 * @Author: tao 
 * @Date: 2019-02-02 21:49:02 
 * @Last Modified by: tao
 * @Last Modified time: 2019-02-17 16:44:31
 * @Func 试题相关的控制器
 */
const Controller = require('egg').Controller;
const qs = require('querystring');
class QuestionsController extends Controller{
    /**
     * 添加试题
     * /exam/questions
     * POST
     * {questions_type_id:'string',questions_stem:'string',subject_id:'string',exam_id:'string',user_id:'string',questions_answer:'string'}
     */
    async create(){
        try{
            this.ctx.validate({
                questions_type_id:'string',
                questions_stem:'string',
                subject_id:'string',
                exam_id:'string',
                user_id:'string',
                questions_answer:'string',
                title:'string'
            });
        }catch(err){
            this.ctx.status = 402;
            this.ctx.body = {msg:'参数验证失败',code:0,err}
            return;
        }
        let keys = ['questions_type_id','questions_stem','subject_id','exam_id','user_id','questions_answer','title'];
        let body = {};
        for(let i in this.ctx.request.body){
            if(keys.indexOf(i) !== -1){
                body[i] = this.ctx.request.body[i];
            }
        }
        let result = await this.ctx.service.exam.questions.createQuestion(body);
        if(result === 1){
            this.ctx.body = {code:1,msg:'试题添加成功'}
        }else{
            this.ctx.body = {code:0,msg:'试题添加失败，可能是数据库问题'}
        }
    }
    /**
     * 更新试题
     * /exam/questions/update
     * PUT
     */
    async update(){
        if(this.ctx.params.id === 'update'){
            let user = await this.app.mysql.select('questions',{
                where:{questions_id:this.ctx.request.body.questions_id},
                columns:['user_id']
            }); 
            let user_id = user[0].user_id;
            if(user_id === 'axg8t2-oroeja' || user_id === this.ctx.token.user_id){ // 判断用户属性
                this.ctx.validate({questions_id:'string'});
                let update = this.ctx.request.body;
                let questions_id = update.questions_id
                delete update.questions_id;
                let result = await this.ctx.service.exam.questions.updateQuestion(questions_id,update);
                if(result === 1){
                    this.ctx.body = {code:1,msg:'更新成功'}
                }else{
                    this.ctx.body = {code:0,msg:'更新失败，未知原因'}
                }
            }else{
                this.ctx.body = {code:0,msg:'权限不足，无法更新'}
            }
            
        }
    }
    /**
     * 获取所有试题
     * /exam/questions/new
     * GET
     */
    async new(){
        let result;
        try{
            result = await this.ctx.service.exam.questions.getQuestions();
        }catch(err){
            this.ctx.body = err;
            return;
        }
        
        this.ctx.body = {code:1,data:result,msg:'获取试题成功'}
    }
    /**
     * 按条件获取试题
     * /exam/questions/:id
     * /exam/questions/condition
     * GET
     * 参数待定
     * */ 
    async show(){
        if(this.ctx.params.id === 'condition'){
            let {query} = this.ctx.request;
            let conditions = Object.keys(query).map(item=>{
                return {
                    key:item,
                    val:query[item]
                }
            });
            let result = await this.ctx.service.exam.questions.getConditionQuestions(conditions);
            this.ctx.body = {msg:'获取试题成功',code:1,data:result}
        }
        
    }
}
module.exports = QuestionsController;