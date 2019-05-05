const {app} = require('egg-mock/bootstrap');
describe('test/controller/exam/questions.test.js',()=>{
    describe('POST /exam/delQuestionsType',()=>{
        // it('不传参数时，返回401状态码',async ()=>{
        //     await app.httpRequest().post('/exam/delQuestionsType').expect(401).expect({msg:'id传递不正确',code:0})
        // })
        // it('传参数时，id在数据库中找不到',async ()=>{
        //     await app.httpRequest().post('/exam/delQuestionsType').send({id:'aabbcc'}).expect(200).expect({msg:'未删除，可能是传递的id在数据库中未找到',code:0})
        // })
    })
    describe('POST /exam/questions',()=>{
        // it('添加一个试题',async ()=>{
        //     await app.httpRequest().post('/exam/questions').send({questions_type_id:'string',questions_stem:'string',subject_id:'string',exam_id:'string',user_id:'string',questions_answer:'string'}).expect(200).expect({code:1,msg:'试题添加成功'});
        // });
        // it('添加一个试题,参数不全',async ()=>{
        //     await app.httpRequest().post('/exam/questions').send({questions_type_id:'string',questions_stem:'string',subject_id:'string',exam_id:'string',user_id:'string'}).expect(402).expect({code:0});
        // });
        // it('添加一个试题,多一个参数',async ()=>{
        //     await app.httpRequest().post('/exam/questions').send({questions_type_id:'string',questions_stem:'string',subject_id:'string',exam_id:'string',user_id:'string',questions_answer:'string',a:'23'}).expect(200).expect({code:1,msg:'试题添加成功'});
        // });


    })
})