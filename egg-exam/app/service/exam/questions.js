/*
 * @Author: tao 
 * @Date: 2019-01-29 11:42:34 
 * @Last Modified by: tao
 * @Last Modified time: 2019-02-17 16:25:49
 * @Func 试题类型以及试题题库相关的业务逻辑
 */
const Service = require('egg').Service;
const path = require('path');
const fs = require('fs');
const {SQL_ALLQUESTIONS,getSqlConditionQuestions} = require('../../sql/questions');
class QuestionsService extends Service{
    // 插入试题类型
    async insertQuestionsType(typeText,sort){
        let questions_type_id = this.ctx.helper.randomString(2);
        let result = await this.app.mysql.insert('questions_types',{questions_type_id,questions_type_text:typeText,questions_type_sort:sort});
        return result.affectedRows === 1;
    }
    // 获取所有的试题类型
    async getQuestionsType(){
        let questionsTypes = await this.app.mysql.select('questions_types');
        return questionsTypes;
    }
    // 试题的类型和序号是否重复
    async isRepeat(typeText,sort){
        let checkRes = await this.app.mysql.query('select * from questions_types where questions_type_text=? or questions_type_sort=?',[typeText,sort]);
        return checkRes.length !== 0;
    }
    // 删除某个试题类型
    async delQuestionsType(id){
        let result = await this.app.mysql.delete('questions_types',{questions_type_id:id});
        return result.affectedRows; 
    }
    // 添加试题
    async createQuestion(questionInfo){
        let questions_id = this.ctx.helper.randomString(4);
        let json_path = `${questions_id}.json`;
        let {questions_stem,questions_answer,user_id,questions_type_id,exam_id,subject_id,title} = questionInfo;
        let jsonContent = {questions_stem,questions_answer,questions_id}
        fs.writeFileSync(path.join(this.app.config.questionsRootPath,json_path),JSON.stringify(jsonContent),'utf-8');
        let mysqlSave = {user_id,questions_type_id,exam_id,subject_id,json_path,questions_id,title}
        let result = await this.app.mysql.insert('questions',{...mysqlSave});
        return result.affectedRows;
    }
    /**
     * 更新试题
     * 
     */
    async updateQuestion(questions_id,updated){
        if(updated.json_path){
            delete updated.json_path
        }
        if(updated.questions_stem || updated.questions_answer){
            let result = await this.app.mysql.select('questions',{
                where:{questions_id},
                columns:['json_path']
            });
            let json_path = result[0].json_path;
            let json_content = JSON.parse(fs.readFileSync(path.join(this.app.config.questionsRootPath,json_path)));
            if(updated.questions_stem){
                json_content.questions_stem = updated.questions_stem;
                delete updated.questions_stem;
            }
            if(updated.questions_answer){
                json_content.questions_answer = updated.questions_answer;
                delete updated.questions_answer;
            }
            fs.writeFileSync(path.join(this.app.config.questionsRootPath,json_path),JSON.stringify(json_content),'utf-8');
        }
        
        
        let result = await this.app.mysql.update('questions',updated,{
            where:{questions_id}
        });
        return result.affectedRows;
    }
    // 处理试题的结果，生成题干和答案
    dealQuestions(result){
        return result.map(item=>{
            let jsonContent = fs.readFileSync(path.join(this.app.config.questionsRootPath,item.json_path));
            jsonContent = JSON.parse(jsonContent);
            let {questions_stem,questions_answer} = jsonContent;
            return {
                ...item,
                questions_stem,
                questions_answer
            }
        });
    }
    // 读取所有试题
    async getQuestions(){
        // 读取所有的试题
        let result = await this.app.mysql.query(SQL_ALLQUESTIONS);
        return this.dealQuestions(result);
    }
    /**
     * 根据条件获取试题
     */
    async getConditionQuestions(conditions){
        // 根据条件读取试题
        let result = await this.app.mysql.query(getSqlConditionQuestions(conditions));
        return this.dealQuestions(result);
    }
}
module.exports = QuestionsService;