/*
 * @Author: tao 
 * @Date: 2019-02-03 18:33:13 
 * @Last Modified by: tao
 * @Last Modified time: 2019-02-17 16:49:49
 * @Func 用户以及用户的权限相关的控制器
 */
const Controller = require('egg').Controller;
const {retainObj} = require('../../utils/isExis'); //保留对象的字段为数组中指定的字段
class UserController extends Controller {
    /**
     * 创建用户
     * /user
     * POST
     * {user_name,user_pwd,identity_id(非必须)}
     */
    async create() {
        try {
            this.ctx.validate({ user_name: 'username', user_pwd: 'userpwd' });
        } catch (err) {
            this.ctx.body = { code: 0, msg: '参数有误', err }
            return;
        }
        let { user_pwd } = this.ctx.request.body;
        this.ctx.request.body.user_pwd = this.ctx.helper.sha256(user_pwd);
        let result = await this.ctx.service.user.user.createUser(this.ctx.request.body);
        if (result === 'repeat') {
            this.ctx.body = { code: 0, msg: '用户名重复' }
        } else if (result.row === 1) {
            this.ctx.body = { code: 1, msg: '用户添加成功', user_id: result.user_id }
        } else if (result.row === 0) {
            this.ctx.body = { code: 0, msg: '用户添加失败，可能是数据库原因' }
        }
    }
    /**
     * 更新用户(可更新用户名、用户密码、用户身份)
     * /user/user   {user_id,user_name/user_pwd/identity_id}
     * PUT
     */
    async update() {
        let request = this.ctx.request;
        let { user_id } = request.body;
        let willUpdated = { ...request.body }
        if (willUpdated.user_pwd) {
            willUpdated.user_pwd = this.ctx.helper.sha256(willUpdated.user_pwd);
        }
        delete willUpdated.user_id;
        let result = await this.ctx.service.user.user.updateUser(user_id, willUpdated);
        if (result === 'repeat') {
            this.ctx.body = { msg: '用户名重复', code: 0 }
        } else if (result === 1) {
            this.ctx.body = { msg: '更新成功', code: 1 }
        } else if (result === 0) {
            this.ctx.body = { msg: '更新失败，可能是数据库原因', code: 0 }
        }
    }
    /**
     * 添加新权限、添加新身份
     * /user/identity/edit  添加身份
     * {identity_text}
     * /user/authorityView/edit 添加视图权限
     * {view_authority_text,view_id}
     * /user/authorityApi/edit 添加接口权限 
     * {api_authority_text,api_authority_url,api_authority_method}
     * GET
     * 
     */
    async edit() {
        let { request } = this.ctx;
        let param = this.ctx.params.id;
        if (param === 'identity') { // 添加身份
            this.ctx.validate({ identity_text: 'string' }, request.query);
            let { identity_text } = request.query;
            if (identity_text === 'undefined') {
                this.ctx.body = { code: 0, msg: '名称不能为空' }
                return;
            }
            let result = await this.ctx.service.user.user.addIdentity(identity_text);
            if (result === 'repeat') {
                this.ctx.body = { code: 0, msg: '身份名重复' }
            } else if (result.row === 1) {
                this.ctx.body = { code: 1, msg: '身份添加成功', identity_id: result.identity_id }
            } else if (result.row === 0) {
                this.ctx.body = { code: 0, msg: '身份添加失败，可能是数据库原因' }
            }
        } else if (param === 'authorityView') {// 添加视图权限
            this.ctx.validate({ view_authority_text: 'string', view_id: 'string' }, request.query);
            let result = await this.ctx.service.user.user.addAuthorityView(request.query);
            if (result === 'repeat') {
                this.ctx.body = { code: 0, msg: '视图权限重复' }
            } else if (result.row === 1) {
                this.ctx.body = { code: 1, msg: '添加视图权限成功', view_authority_id: result.view_authority_id }
            } else if (result.row === 0) {
                this.ctx.body = { code: 0, msg: '视图权限添加失败，可能是数据库原因' }
            }
        } else if (param === 'authorityApi') {// 添加接口权限
            this.ctx.validate({ api_authority_text: 'string', api_authority_url: 'string', api_authority_method: 'string' }, request.query);
            let result = await this.ctx.service.user.user.addAuthorityApi(request.query);
            if (result === 'repeat') {
                this.ctx.body = { code: 0, msg: 'api权限重复' }
            } else if (result.row === 1) {
                this.ctx.body = { code: 1, msg: '添加api权限成功', api_authority_id: result.api_authority_id }
            } else if (result.row === 0) {
                this.ctx.body = { code: 0, msg: 'api权限添加失败，可能是数据库原因' }
            }
        }
    }
    /**
     * 为身份设定api接口权限
     * /user/setIdentityApi
     * POST
     * {identity_id,api_authority_id}
     */
    async setIdentityApi() {
        let result = await this.service.user.user.addIdentityApi(this.ctx.request.body);
        if (result === 'repeat') {
            this.ctx.body = { msg: '身份权限重复', code: 0 }
        } else if (result === 1) {
            this.ctx.body = { msg: '设定成功', code: 1 }
        } else if (result === 0) {
            this.ctx.body = { msg: '设定失败,可能是数据库原因', code: 0 }
        }
    }
    /**
     * 取消该身份的api接口权限
     * /user/cancelIdentityApi
     * POST
     * {identity_id,api_authority_id}
     */
    async cancelIdentityApi() {
        this.ctx.validate({ identity_id: 'string', api_authority_id: 'string' });
        let { identity_id, api_authority_id } = this.ctx.request.body;
        let result = await this.app.mysql.delete('identity_api_authority_relation', { identity_id, api_authority_id });
        if (result.affectedRows === 1) {
            this.ctx.body = { msg: '权限取消成功', code: 1 }
        } else {
            this.ctx.body = { msg: '取消取消失败，可能是数据苦原因', code: 0 }
        }
    }
    /**
     * 为身份设定视图权限
     * /user/setIdentityView
     * POST
     * {identity_id,view_authority_id}
     */
    async setIdentityView() {
        let result = await this.service.user.user.addIdentityView(this.ctx.request.body);
        if (result === 'repeat') {
            this.ctx.body = { msg: '身份权限重复', code: 0 }
        } else if (result === 1) {
            this.ctx.body = { msg: '设定成功', code: 1 }
        } else if (result === 0) {
            this.ctx.body = { msg: '设定失败,可能是数据库原因', code: 0 }
        }
    }
    /**
     * 取消该身份的视图权限
     * /user/cancelIdentityView
     * POST
     * {identity_id,view_authority_id}
     */
    async cancelIdentityView() {
        this.ctx.validate({ identity_id: 'string', view_authority_id: 'string' });
        let { identity_id, view_authority_id } = this.ctx.request.body;
        let result = await this.app.mysql.delete('identity_view_authority_relation', { identity_id, view_authority_id });
        if (result.affectedRows === 1) {
            this.ctx.body = { msg: '权限取消成功', code: 1 }
        } else {
            this.ctx.body = { msg: '取消失败，可能是数据苦原因', code: 0 }
        }
    }
    /**
     * 展示数据(用户，身份，api权限)
     * /user/user 展示所有的用户
     * /user/identity 展示所有的身份（角色)
     * /user/api_authority 展示所有的api接口
     * /user/identity_api_authority_relation 展示api接口和身份（角色）之间的关系
     * /user/identity_view_authority_relation 展示视图和身份（角色）之间的关系
     * /user/view_authority 获取视图权限
     * /user/userInfo 获取用户信息
     * GET
     */
    async show() {
        let param = this.ctx.params.id;
        let result = await this.ctx.service.user.user.show(param);
        this.ctx.body = { msg: '数据获取成功', code: 1, data: result }
    }
    /**
     * 根据用户id，返回该用户的视图权限
     * /user/new
     * GET
     * {user_id}
     */
    async new() {
        this.ctx.validate({ user_id: 'string' }, this.ctx.request.query);
        let result = await this.ctx.service.user.user.isUserViewAuthority(this.ctx.request.query.user_id);
        this.ctx.body = { msg: '获取数据成功', code: 1, data: result }
    }
    /**
     * 获取权限信息
     * /user/getAuthInfo/:id
     */
    async getAuthInfo() {
        const { id } = this.ctx.params; //获取动态路由参数
        this[id] && await this[id](this.ctx); //根据路由参数去执行对应的方法；
    }
    /**
     * 根据身份（角色）id去获取其视图权限
     * /user/getAuthInfo/getViewFromIdentity
     * GET
     * {identity_id}
     */
    async getViewFromIdentity(ctx) {
        let { identity_id } = ctx.request.query;
        let res = await this.app.mysql.query(`
            select 
            * 
            from 
                identity,
                view_authority,
                identity_view_authority_relation
            where
                identity.identity_id=identity_view_authority_relation.identity_id
                And
                identity_view_authority_relation.view_authority_id=view_authority.view_authority_id
                And
                identity.identity_id="${identity_id}"
        `);
        this.ctx.body = { msg: '获取成功', code: 1, data: res };
    }

    /**
     * 根据身份（角色）id去获取其api权限
     * /user/getAuthInfo/getApiFromIdentity
     * GET
     * {identity_id}
     * 
     */
    async getApiFromIdentity(ctx) {
        let { identity_id } = ctx.request.query;
        let res = await this.app.mysql.query(`
            select 
            * 
            from
                identity,
                api_authority,
                identity_api_authority_relation
            where
                identity.identity_id=identity_api_authority_relation.identity_id
                And
                identity_api_authority_relation.api_authority_id=api_authority.api_authority_id
                And
                identity.identity_id="${identity_id}"
        `);
        ctx.body = { msg: '获取成功', code: 1, data: res }
    }
    /**
     * 根据身份（角色）id，获取属于该身份(角色)id的所有用户
     * /user/getAuthInfo/getIdentityUser
     * GET
     * {identity_id}
     */
    async getIdentityUser(ctx){
        ctx.validate({identity_id:'string'},ctx.request.query);
        const {identity_id} = ctx.request.query;
        const result = await this.app.mysql.select('user',{
            where:{
                identity_id
            }
        });
        this.ctx.body = {msg:'成功',code:1,data:result}
    }

    /**
     * 删除权限信息
     * /user/delAutho/:id
     * 
     */
    async delAutho() {
        let { id } = this.ctx.params;
        this[id] && await this[id](this.ctx);
    }
    /**
     * 删除身份接口
     * /user/delAutho/delIdentity
     * DELETE
     * {identity_id}
     */
    async delIdentity(ctx) {
        let { identity_id } = ctx.request.body; //获取要删除的身份id
        let conn = await this.app.mysql.beginTransaction(); //开启事务
        let oMsg = { msg: '', code: '' }
        try {
            await conn.delete('identity', { identity_id });
            await conn.delete('identity_view_authority_relation', { identity_id });
            await conn.delete('identity_api_authority_relation', { identity_id });
            await conn.query(`update user set identity_id=null where identity_id="${identity_id}"`);
            await conn.commit(); //提交事务
            oMsg.msg = '删除成功';
            oMsg.code = 1;
        } catch (err) {
            await conn.rollback(); //回滚事务
            oMsg.msg = '删除失败，原因未知';
            oMsg.code = 0;
        }
        ctx.body = oMsg;
    }
    /**
     * 删除用户接口
     * /user/delAutho/delUser
     * DELETE
     * {user_id}
     */
    async delUser(ctx) {
        ctx.validate({ user_id: 'string' });
        const { user_id } = ctx.request.body;
        const result = await this.app.mysql.query(`delete from user where user_id="${user_id}"`);
        if (result.affectedRows === 1) {
            this.ctx.body = { msg: '删除用户成功', code: 1 };
        } else {
            this.ctx.bdoy = { msg: '删除用户失败，可能是数据库原因', code: 0 };
        }
    }
    /**
     * 删除api接口
     * /user/delAutho/delApi
     * DELETE
     * {api_authority_id}
     */
    async delApi(ctx){
        ctx.validate({api_authority_id:'string'});
        const conn = await this.app.mysql.beginTransaction();
        const {api_authority_id} = ctx.request.body;
        try{
            await conn.delete('api_authority',{api_authority_id});
            await conn.delete('identity_api_authority_relation',{api_authority_id});
            await conn.commit();
        }catch(err){
            await conn.rollback();
            console.log(err);
            this.ctx.body = {msg:'删除失败，可能是数据库原因',code:0};
            return;
        }
        this.ctx.body = {msg:'删除成功',code:1}
    }
    /**
     * 删除视图接口
     * /user/delAutho/delView
     * DELETE
     * {view_authority_id}
     */
    async delView(ctx){
        ctx.validate({view_authority_id:'string'});
        const conn = await this.app.mysql.beginTransaction();
        const {view_authority_id} = ctx.request.body;
        try{
            await conn.delete('view_authority',{view_authority_id});
            await conn.delete('identity_view_authority_relation',{view_authority_id});
            await conn.commit();
        }catch(err){
            await conn.rollback();
            console.log(err);
            this.ctx.body = {msg:'删除失败,可能是数据库原因',code:0};
            return;
        }
        this.ctx.body = {msg:'删除成功',code:1};
    }
    /**
     * 更新权限信息
     * /user/editAutho/:id
     */
    async editAutho(){
        const {id} = this.ctx.params;
        this[id] && await this[id](this.ctx);
    }
    /** 
     * 更新api的接口(可更新url地址、方法名、接口名称)
     * /user/editAutho/editApiAutho
     * PUT
     * {api_authority_id,api_authority_text/api_authority_url/api_authority_method}
     * */
    async editApiAutho(ctx){
        ctx.validate({api_authority_id:'string'});
        const {api_authority_id} = this.ctx.request.body;
        const willUpdated = retainObj([
            'api_authority_text',
            'api_authority_url',
            'api_authority_method'
        ],ctx.request.body);
        let result = await this.ctx.app.mysql.update('api_authority',willUpdated,{
            where:{
                api_authority_id
            }
        });
        if(result.affectedRows === 1){
            this.ctx.body = {msg:'更新成功',code:1}
        }else{
            this.ctx.body = {msg:'更新失败,可能是数据苦原因',code:0}
        }
    }
    /**
     * 更新视图的接口(可更新视图的名称,视图的view_id)
     * /user/editAutho/editViewAutho
     * PUT
     * {view_authority_id,view_authroity_text/view_id}
     *  */
    async editViewAutho(ctx){
        ctx.validate({view_authority_id:'string'});
        const {view_authority_id} = this.ctx.request.body;
        const willUpdated = retainObj([
            'view_authority_text',
            'view_id'
        ],ctx.request.body);
        let result = await this.ctx.app.mysql.update('view_authority',willUpdated,{
            where:{
                view_authority_id
            }
        });
        if(result.affectedRows === 1){
            this.ctx.body = {msg:'更新成功',code:1}
        }else{
            this.ctx.body = {msg:'更新失败,可能是数据苦原因',code:0}
        }
    }
    /**
     * 更新身份的名称
     * /user/editAutho/identityText
     * PUT
     * {identity_id,identity_text}
     */
    async identityText(){
        this.ctx.validate({identity_id:'string',identity_text:'string'});
        const {identity_text,identity_id} = this.ctx.request.body;
        let result = await this.app.mysql.update('identity',{identity_text},{
            where:{identity_id}
        });
        if(result.affectedRows === 1){
            this.ctx.body = {msg:'更新成功',code:1}
        }else{
            this.ctx.body = {msg:'更新失败，可能是数据库原因',code:0}
        }
    }

}
module.exports = UserController;
