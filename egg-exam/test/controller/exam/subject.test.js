const {app} = require('egg-mock/bootstrap');
describe('test/controller/exam/subject.test.js',()=>{
    describe('index',()=>{
        it('获取所有的课程',async ()=>{
            app.httpRequest().get('/exam/subject').expect(200).expect({code:1});
        })
    })
})