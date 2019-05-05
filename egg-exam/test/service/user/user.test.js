const {app} = require('egg-mock/bootstrap');
const assert = require('assert');
describe('test/service/user/user.test.js',()=>{
    describe('updateUser',()=>{
        // it('更新用户的身份',async ()=>{
        //     let ctx = app.mockContext();
        //     let result = await ctx.service.user.user.updateUser('4a13s-risq8',{identity_id:'zdu565-st5h6'});
        //     assert(result === 1);
        // })
    })
    describe('addIdentityView',()=>{
        // it('给身份设定视图权限成功',async ()=>{
        //     let ctx = app.mockContext();
        //     let result = await ctx.service.user.user.addIdentityView({identity_id:'zdu565-st5h6',view_authority_id:'te513-my1ulf'});
        //     assert(result === 1);
        // })
    })
    describe('addIdentityApi',()=>{
        // it('给身份设定api权限成功',async ()=>{
        //     let ctx = app.mockContext();
        //     let result = await ctx.service.user.user.addIdentityApi({identity_id:'zdu565-st5h6',api_authority_id:'dvfovp-70stmj'});
        //     assert(result === 1);
        // })
    })
    // describe('isUserApiAuthority',()=>{
    //     it('判断该用户是否拥有该权限',async ()=>{
    //         let ctx = app.mockContext();
    //         let result = await ctx.service.user.user.isUserApiAuthority({user_id:'4a13s-risq8',method:'GET',url:'/user'});
    //         assert(result === true);
    //     })
    // })
    // describe('getStudentInfo',()=>{
    //     it('获取数据',async ()=>{
    //         let ctx = app.mockContext();
    //         let result = await ctx.service.user.user.getStudentInfo('163231000094');
    //         console.log(result);
    //     })
    // })
})