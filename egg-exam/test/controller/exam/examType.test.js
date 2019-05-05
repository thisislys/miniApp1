const {app} = require('egg-mock/bootstrap');
describe('test/controller/exam/examType.test.js',()=>{
    describe('index',()=>{
        it('获取所有的考试类型',async ()=>{
            app.httpRequest().get('/exam/examType').expect(200).expect({code:1});
        })
    })
})