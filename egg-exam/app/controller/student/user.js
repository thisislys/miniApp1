/*
 * @Author: tao 
 * @Date: 2019-03-06 08:45:12 
 * @Last Modified by: jasonandjay
 * @Last Modified time: 2019-03-21 20:06:44
 * @func 学生的身份信息相关的接口
 */

 const Controller = require('egg').Controller;
 const {isExis} = require('../../utils/isExis');
 const jwt = require('jsonwebtoken');
 class UserController extends Controller{
    /**
     * 学生登录接口
     * /student/login
     * POST
     * {student_id,student_pwd}
     */
    async login(){
        try{
        this.ctx.validate({student_id:'string',student_pwd:'userpwd'});
        }catch(err){
            this.ctx.status = 401;
            this.ctx.body = {msg:err,code:0}
            return;
        }
        let {student_id,student_pwd} = this.ctx.request.body;
        let result = await isExis({
            app:this.app,
            where:{student_id},
            columns:['student_name'],
            tableName:'student'
        });
        if(!result.isExis){
            this.ctx.body = {msg:'该用户不存在',code:0}
            return;
        }
        result = await isExis({
            app:this.app,
            where:{student_id,student_pwd},
            columns:['student_name'],
            tableName:'student'
        });
        if(!result.isExis){
            this.ctx.body = {msg:'用户密码错误',code:0}
            return;
        }
        // 签发token
        let userInfo = {
            student_id,
            student_name:result.data[0].student_name
        }
        let token = jwt.sign(userInfo,this.ctx.helper.createKeys());
        this.ctx.body = {msg:'登录成功',code:1,token}
    }

    /**
     * 学生登录接口
     * /student/info
     * GET
     */
    async info(){
        let data = await this.service.user.user.getStudentInfo();
        if (data && data.length){
            data = data[0];
            if (data.start_time > +new Date()){
                let start_time = new Date(data.start_time*1).toLocaleString('chinese',{hour12:false}).replace(/\//g, "-");
                this.ctx.body = {msg: `考试开始时间：${start_time}，敬请期待`, code: 0};
            }else if(data.end_time < +new Date()){
                this.ctx.body = {msg: `考试已结束`, code: 0};
            }else {
                this.ctx.body = {msg:'获取学生信息成功', code:1, data};
            }
        }else{
            this.ctx.body = {msg:'获取学生信息失败', code:0};
        }
    }
 }

 module.exports = UserController;