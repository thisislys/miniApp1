const {app} = require('egg-mock/bootstrap');
const assert = require('assert');
describe('test/service/exam/questions.test.js',()=>{
    describe('delQuestionsType',()=>{
        it('删除一个试题类型',async ()=>{
            let ctx = app.mockContext();
            let result = await ctx.service.exam.questions.delQuestionsType('7ac5jp-a9osm');
            assert(result === 1 || result === 0);
        });
    })
    describe('createQuestion',()=>{
        // it('添加一个试题',async ()=>{
        //     let ctx = app.mockContext();
        //     await ctx.service.exam.questions.createQuestion({
        //         questions_stem:`<div><h1>闭包是什么？</h1></div>`,
        //         questions_answer:`<p>函数内部的函数</p>`
        //     });
        // })
    });
    describe('getQuestions',()=>{
        it('读取试题',async ()=>{
            let ctx = app.mockContext();
            let result = await ctx.service.exam.questions.getQuestions();
            assert(true);
        })
    });
    describe('updateQuestion',()=>{
        it('更新试题',async ()=>{
            let ctx = app.mockContext();
            let result = await ctx.service.exam.questions.updateQuestion('1dmfy-lmyky6-6b62i-y8lqco',{title:'哈哈',questions_stem:'出题',questions_answer:'你猜'});
            console.log(result);
        })
    })
})