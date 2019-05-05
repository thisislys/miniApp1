/*
 * @Author: jasonandjay 
 * @Date: 2019-03-04 12:31:36 
 * @Last Modified by: jasonandjay
 * @Last Modified time: 2019-03-22 21:23:34
 */

 // 筛选符合条件试题的sql语句
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

// 获取属于学科id试题的sql语句
exports.getFilterQuestions = (subject_ids) => {
    if(subject_ids.length){
        return SQL_ALLQUESTIONS + `AND questions.subject_id in (${subject_ids.map(item=>`'${item}'`).join(',')})`;
    }else{
        return SQL_ALLQUESTIONS;
    }
}

// 随机获取某一学科的五道题
exports.getRandomQuestions = (subject_id, exam_id, number)=>{
    return SQL_ALLQUESTIONS + `AND questions.subject_id='${subject_id}' AND questions.exam_id='${exam_id}' ORDER BY RAND() LIMIT ${number}`;
}

// 获取试题详情,支持单个，多个
exports.getQuestions = (question_ids)=>{
    // question_ids.replace('[', '').replace(']', '');
    // question_ids = JSON.parse(question_ids).join(',');
    console.log('question_ids...', question_ids);
    // 判断是否是数组
    if (question_ids.indexOf('[') !== -1){
        question_ids = JSON.parse(question_ids).join(',');
    }
    if (question_ids.indexOf(',') != -1){
        question_ids = question_ids.split(',').map(item=>`'${item}'`).join(',');
        return SQL_ALLQUESTIONS + `AND questions.questions_id in (${question_ids})`;
    }else{
        return SQL_ALLQUESTIONS + `AND questions.questions_id='${question_ids}'`;
    }
}

const SQL_STUDENT_EXAM_LIST = `
SELECT 
    *
FROM
    exam_student,
    student
WHERE
    exam_student.grade_id=student.grade_id
    AND
    exam_student.student_id=student.student_id
`
// 筛选试题列表
exports.getStudentExamList = (querys={}, page=1, pageSize=10)=>{
    let arr = [];
    for (let key in querys){
        arr.push(`exam_student.${key}="${querys[key]}"`)
    }

    let queryStr = arr.join('\nAND\n');
    // console.log('queryStr...', queryStr, `${(page-1)*pageSize}`, page, pageSize);
    if (Object.keys(querys).length){
        // return SQL_STUDENT_EXAM_LIST + '\nAND\n ' + queryStr + ` LIMIT ${pageSize} OFFSET ${(page-1)*pageSize}`;
        return SQL_STUDENT_EXAM_LIST + '\nAND\n ' + queryStr ;
    }else{
        return SQL_STUDENT_EXAM_LIST + `LIMIT ${pageSize} OFFSET ${(page-1)*pageSize}`;
    }
}

// 获取学生考试试题
const SQL_STUDENT_INFO = `
SELECT
    *    
FROM
    student,
    grade,
    room,
    exam_exam
WHERE
    student.grade_id=grade.grade_id
    AND
    room.room_id=grade.room_id
    AND
    grade.subject_id=exam_exam.subject_id
    AND
    exam_exam.status=0
`
exports.getStudentInfo = (student_id)=>{
    return SQL_STUDENT_INFO + ' \nAND\n ' +  'student.student_id=' + student_id;
}