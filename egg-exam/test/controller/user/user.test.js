const {app} = require('egg-mock/bootstrap');
describe('test/controller/user/user.test.js',()=>{
    describe('create',()=>{
        // it('创建用户',async ()=>{
        //     await app.httpRequest().post('/user').send({user_name:'w916peach',user_pwd:'Peach0126?'}).expect(200).expect({code:1,"msg": "用户添加成功"})
        // })
    });
    describe('edit',()=>{
        // it('添加身份 /user/identity/edit',async ()=>{
        //     await app.httpRequest().get('/user/identity/edit?identity_text='+escape('管理员')).expect(200).expect({code:1,msg:'身份添加成功'});
        // })
        // it('添加视图权限 /user/authorityView/edit',async ()=>{
        //     await app.httpRequest().get(`/user/authorityView/edit?view_authority_text=${escape('用户管理')}&view_id=123`).expect(200).expect({code:1,msg:'添加视图权限成功'});
        // })
        // it('添加api接口权限 /user/authorityApi/edit',async ()=>{
        //     await app.httpRequest().get(`/user/authorityApi/edit?api_authority_text=${escape('试题管理')}&api_authority_url=/user&api_authority_method=GET`).expect(200).expect({code:1,msg:'添加api权限成功'});
        // })
    })
    describe('setIdentityApi',()=>{
        // it('给身份设定api权限成功',async ()=>{
        //     let identity_id = 'zdu565-st5h6';
        //     let api_authority_id = 'dvfovp-70stmj';
        //     await app.httpRequest().post('/user/setIdentityApi').send({identity_id,api_authority_id}).expect(200).expect({msg:'设定成功',code:1})
        // })
    })
    describe('update',()=>{
        // it('更新用户信息',async ()=>{
        //     let user_id = '4a13s-risq8';
        //     let identity_id = 'zdu565-st5h6';
        //     await app.httpRequest().put('/user/user').send({user_id,identity_id}).expect(200).expect({msg:'更新成功',code:1});
        // })
    })
})