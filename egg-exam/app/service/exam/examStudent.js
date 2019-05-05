/*
 * @Author: jasonandjay 
 * @Date: 2019-03-12 13:22:32 
 * @Last Modified by: jasonandjay
 * @Last Modified time: 2019-03-28 08:58:33
 */

const Service = require('egg').Service;
const path = require('path');
const fs = require('fs');
const {getStudentExamList} = require('../../sql/exam');
class ExamStudentService extends Service{
    // 获取学生试卷列表
    async getStudentExam(querys){
        let {page, pageSize, ...where} = querys;
        page = page*1 || 1;
        pageSize = pageSize*1 || 10;
        let result = await this.app.mysql.query(getStudentExamList(where, page, pageSize));
        console.log('result...', result, where, getStudentExamList(where, page, pageSize));
        // 隐藏学生密码
        result.forEach(item=>delete item.student_pwd);
        return result;
    }

    // 获取试卷详情
    async getStudentExamDetail(exam_student_id){
        let result = await this.app.mysql.query(getStudentExamList({exam_student_id}));
        if (result && result.length){
            result = result[0];
            // 读取学生试题
            let jsonContent = fs.readFileSync(path.join(this.app.config.answersRootPath, result.answer_json_path));
            jsonContent = JSON.parse(jsonContent);
            jsonContent.forEach(value=>{
                // 读取试题答案
                let answerContent = fs.readFileSync(path.join(this.app.config.questionsRootPath, value.json_path))
                answerContent = JSON.parse(answerContent);
                let {questions_answer} = answerContent;
                value.questions_answer = questions_answer;
            })
            result.questions = jsonContent;
            return result;
        }else{
            return false;
        }
    }
    
    // 学生提交试卷
    async createStudentExam(examInfo){
        // 获取学生student_id
        let {student_id} = this.ctx.token;
        let {exam_exam_id} = examInfo;

        // 判断学生有没有提交过试卷
        let rows = await this.app.mysql.get('exam_student', {student_id, exam_exam_id});
        // console.log('rows...', rows, student_id, exam_exam_id);
        if (rows && rows.exam_student_id){
            return rows;
        }
        
        // console.log('this.token...', this.ctx.token);
        // 插入试卷到数据库中
        let exam_student_id = this.ctx.helper.randomString(4);
        let answer_json_path = `${exam_student_id}.json`;
        let {questions, ...info} = examInfo;
        fs.writeFileSync(path.join(this.app.config.answersRootPath, answer_json_path),JSON.stringify(questions),'utf-8');
     
        // 获取学生班级grade_id
        let gradeInfo = await this.app.mysql.select('student', {
            where: {student_id}
        });
        let {grade_id} = gradeInfo[0]; 
        // 组装考试数据
        let mysqlSave = {...info, answer_json_path, exam_student_id, student_id, grade_id};
        let result = await this.app.mysql.insert('exam_student', {...mysqlSave});
        return result.affectedRows===1;
    }

    // 批卷功能
    async updateStudentExam(exam_student_id, score){
        let result = await this.app.mysql.update('exam_student', {score, status: 1}, {
            where: {exam_student_id}
        });
        return result.affectedRows === 1;
    }
}
module.exports = ExamStudentService;