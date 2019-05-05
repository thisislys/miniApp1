/*
 * @Author: tao 
 * @Date: 2019-02-17 15:49:19 
 * @Last Modified by: jasonandjay
 * @Last Modified time: 2019-03-04 13:13:59
 * @func 试题相关的sql语句
 */

 // 获取所有试题的sql语句
const SQL_ALLQUESTIONS = `
 SELECT
 questions.title AS title,
 questions.questions_id AS questions_id,
 questions.json_path AS json_path,
 subject.subject_text AS subject_text,
 subject.subject_id AS subject_id,
 exam_type.exam_id AS exam_id,
 exam_type.exam_name AS exam_name,
 user.user_name AS user_name,
 user.user_id AS user_id,
 questions_types.questions_type_text as questions_type_text,
 questions_types.questions_type_id as questions_type_id
FROM
 questions,
 questions_types,
 user,
 subject,
 exam_type
WHERE
 questions.user_id=user.user_id
 And 
 questions.subject_id=subject.subject_id
 AND
 questions.exam_id=exam_type.exam_id
 AND
 questions.questions_type_id=questions_types.questions_type_id
 `;

exports.SQL_ALLQUESTIONS = SQL_ALLQUESTIONS;
// 根据条件获取试题的sql语句
exports.getSqlConditionQuestions = (conditions=[]) => {
    conditions = conditions.map(item=>{
        return `questions.${item.key}="${item.val}"`;
    });
    let conditionsStr = conditions.join('\nAND\n');
    if(conditions.length !== 0){
        conditionsStr = '\nAND\n' + conditionsStr;
    }
    return SQL_ALLQUESTIONS + conditionsStr;
}
// let a = exports.getSqlConditionQuestions([{key:'user_id',val:'fjeiwojf'}]);
// console.log(a);
