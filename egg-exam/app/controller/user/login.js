/*
 * @Author: tao 
 * @Date: 2019-02-06 23:53:45 
 * @Last Modified by: tao
 * @Last Modified time: 2019-02-07 00:22:19
 * @Func 登录相关的接口信息
 */

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken');
class LoginController extends Controller{
    async login(){
        try{
           this.ctx.validate({user_name:'string',user_pwd:'string'}); 
        }catch(err){
            this.ctx.body = {msg:'参数不完整',code:0,err}
            return;
        }
        // 验证是否有用户名和密码
        let {user_name,user_pwd} = this.ctx.request.body;
        user_pwd = this.ctx.helper.sha256(user_pwd);
        let userResult = await this.app.mysql.select('user',{where:{user_name}});
        if(userResult === 0){
            this.ctx.body = {msg:'用户不存在',code:0}
            return;
        }
        if(userResult[0].user_pwd !== user_pwd){
            this.ctx.body = {msg:'密码不正确',code:0}
            return;
        }
        let {user_id,identity_id} = userResult[0];
        let identityResult = await this.app.mysql.select('identity',{where:{identity_id}});
        let identity_text = identityResult[0].identity_text;
        let userInfo = {
            signTime:new Date().getTime(),
            user_id,
            user_name,
            identity_id,
            identity_text
        }
        // 签发token
        let token = jwt.sign(userInfo,this.ctx.helper.createKeys());
        this.ctx.body = {msg:'登录成功',code:1,token};
        
    }
}
module.exports = LoginController;