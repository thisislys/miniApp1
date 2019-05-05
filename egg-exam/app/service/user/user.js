/*
 * @Author: tao 
 * @Date: 2019-02-03 18:35:17 
 * @Last Modified by: jasonandjay
 * @Last Modified time: 2019-03-22 20:33:11
 * @Func 用户及其权限控制的业务逻辑
 */

const Service = require('egg').Service;
const {
    getStudentInfo
} = require('../../sql/exam');
class UserService extends Service {
    // 添加用户
    async createUser(userInfo) {
        let isRepeat = await this.isRepeat('user', 'user_name', userInfo.user_name);
        if (isRepeat) {
            return 'repeat';
        }
        let user_id = this.ctx.helper.randomString(2);
        let result = await this.app.mysql.insert('user', {
            ...userInfo,
            user_id
        });
        return {
            row: result.affectedRows,
            user_id
        };
    }
    // 更新用户
    async updateUser(user_id, willUpdated) {
        let result = await this.app.mysql.update('user', willUpdated, {
            where: {
                user_id
            }
        });
        return result.affectedRows;
    }
    async isRepeat(tableName, key, value) {
        let result = await this.app.mysql.select(tableName, {
            where: {
                [key]: value
            }
        });
        return result.length !== 0;
    }
    // 添加身份
    async addIdentity(identity_text) {
        let isRepeat = await this.isRepeat('identity', 'identity_text', identity_text);
        if (isRepeat) {
            return 'repeat';
        }
        let identity_id = this.ctx.helper.randomString(2);
        let result = await this.app.mysql.insert('identity', {
            identity_text,
            identity_id
        });
        return {
            row: result.affectedRows,
            identity_id
        };
    }
    // 添加视图权限
    async addAuthorityView(info) {
        let {
            view_authority_text,
            view_id
        } = info;
        let textRepeat = await this.isRepeat('view_authority', 'view_authority_text', view_authority_text);
        if (textRepeat) {
            return 'repeat';
        }
        let idRepeat = await this.isRepeat('view_authority', 'view_id', view_id);
        if (idRepeat) {
            return 'repeat';
        }
        let view_authority_id = this.ctx.helper.randomString(2);
        let result = await this.app.mysql.insert('view_authority', {
            ...info,
            view_authority_id
        });
        return {
            row: result.affectedRows,
            view_authority_id
        };
    }
    // 添加api接口权限
    async addAuthorityApi(info) {
        let {
            api_authority_text,
            api_authority_url,
            api_authority_method
        } = info;
        let textRepeat = await this.isRepeat('api_authority', 'api_authority_text', api_authority_text);
        if (textRepeat) {
            return 'repeat';
        }
        let urlResult = await this.app.mysql.select('api_authority', {
            where: {
                api_authority_url,
                api_authority_method
            }
        });
        if (urlResult.length > 0) {
            return 'repeat';
        }
        let api_authority_id = this.ctx.helper.randomString(2);
        let result = await this.app.mysql.insert('api_authority', {
            ...info,
            api_authority_id
        });
        return {
            row: result.affectedRows,
            api_authority_id
        };
    }
    // 为身份设定视图权限
    async addIdentityView(info) {
        let {
            identity_id,
            view_authority_id
        } = info;
        let viewResult = await this.app.mysql.select('identity_view_authority_relation', {
            where: {
                identity_id,
                view_authority_id
            }
        });
        if (viewResult.length > 0) {
            return 'repeat';
        }
        let identity_view_authority_relation_id = this.ctx.helper.randomString(3);
        let result = await this.app.mysql.insert('identity_view_authority_relation', {
            ...info,
            identity_view_authority_relation_id
        });
        return result.affectedRows;
    }
    // 为身份设定api权限
    async addIdentityApi(info) {
        let {
            identity_id,
            api_authority_id
        } = info;
        let apiResult = await this.app.mysql.select('identity_api_authority_relation', {
            where: {
                identity_id,
                api_authority_id
            }
        });
        if (apiResult.length > 0) {
            return 'repeat';
        }
        let identity_api_authority_relation_id = this.ctx.helper.randomString(3);
        let result = await this.app.mysql.insert('identity_api_authority_relation', {
            ...info,
            identity_api_authority_relation_id
        });
        return result.affectedRows;
    }
    // 根据用户的id和api接口判断用户是否具有该权限
    async isUserApiAuthority({
        url,
        method,
        user_id
    }) {
        let sql = `SELECT * FROM api_authority,identity_api_authority_relation,identity,user where api_authority.api_authority_url='${url}' And api_authority.api_authority_method='${method}' And api_authority.api_authority_id=identity_api_authority_relation.api_authority_id And user.user_id='${user_id}' And user.identity_id=identity.identity_id And identity.identity_id=identity_api_authority_relation.identity_id`;
        let result = await this.app.mysql.query(sql);
        return result.length > 0;
    }
    // 根据用户的id判断用户所拥有的视图权限
    async isUserViewAuthority(user_id) {
        let sql = `select user_id,user_name,identity_text,view_id,view_authority_text from user,identity,view_authority,identity_view_authority_relation where user.user_id='${user_id}' And user.identity_id=identity.identity_id And view_authority.view_authority_id=identity_view_authority_relation.view_authority_id And identity.identity_id=identity_view_authority_relation.identity_id;`;
        let result = await this.app.mysql.query(sql);
        return result;
    }
    // 展示数据(用户，身份，api权限)
    async show(param) {
        if (param === 'user') { // 读取用户数据
            let sql = `select user_name,user_pwd,user_id,identity.identity_text as identity_text from user,identity where user.identity_id=identity.identity_id`;
            let result = await this.app.mysql.query(sql);
            let sqlUser = `select user_name,user_pwd,user_id,identity_id as identity_text from user where identity_id is null`;
            let resultUser = await this.app.mysql.query(sqlUser);
            return [...result, ...resultUser];
        } else if (param === 'identity_api_authority_relation') {
            let sql = `select identity_api_authority_relation_id,identity_text,api_authority_text,api_authority_url,api_authority_method from identity_api_authority_relation,identity,api_authority where identity_api_authority_relation.identity_id=identity.identity_id And identity_api_authority_relation.api_authority_id=api_authority.api_authority_id`;
            let result = await this.app.mysql.query(sql);
            return result;
        } else if (param === 'userInfo') { //获取当前的用户信息
            return this.ctx.token;
        } else if (param === 'identity_view_authority_relation') {
            let sql = `select identity_view_authority_relation_id,identity_text,view_authority_text,view_id from identity_view_authority_relation,identity,view_authority where identity_view_authority_relation.identity_id=identity.identity_id And identity_view_authority_relation.view_authority_id=view_authority.view_authority_id`;
            let result = await this.app.mysql.query(sql);
            return result;
        } else {
            let result = await this.app.mysql.select(param);
            return result;
        }
    }
    // 获取学生信息
    async getStudentInfo() {
        let {
            student_id
        } = this.ctx.token;
        let result = await this.app.mysql.query(getStudentInfo(student_id));
        // let result = await this.app.mysql.query(`SELECT     *     FROM     student  WHERE    student.student_id=${student_id}; `);
        // console.log('result...', result)
        return result;
    }
}
module.exports = UserService;