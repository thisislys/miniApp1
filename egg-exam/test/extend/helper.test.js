const {app} = require('egg-mock/bootstrap');
const assert = require('assert');
describe('test/extend/helper.test.js',()=>{
    it('randomString',()=>{
        const ctx = app.mockContext();
        let result = ctx.helper.randomString();
        console.log(result);
        assert(true);
    })
})