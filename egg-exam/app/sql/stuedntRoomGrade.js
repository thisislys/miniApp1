/*
 * @Author: tao 
 * @Date: 2019-03-06 16:30:04 
 * @Last Modified by: tao
 * @Last Modified time: 2019-03-06 22:57:31
 * @func 学生、教室、班级的sql语句
 */

const ALL_STUDENT_SQL = `
    select 
        student.student_id as student_id,
        student.student_name as student_name,
        student.student_pwd as student_pwd,
        room.room_id as room_id,
        room.room_text as room_text,
        grade.grade_id as grade_id,
        grade.grade_name as grade_name,
        subject.subject_id as subject_id,
        subject.subject_text as subject_text
    from
        student,
        room,
        grade,
        subject
    where
        student.grade_id=grade.grade_id 
        And
        grade.room_id=room.room_id
        And
        grade.subject_id=subject.subject_id
 `
const NO_GRADE_STUDENT = `
 select 
 student.student_id as student_id,
 student.student_name as student_name,
 student.student_pwd as student_pwd
from
 student
where
 grade_id is null
 `;
const ALL_GRADE_SQL = `
 select 
     grade.grade_id as grade_id,
     grade.grade_name as grade_name,
     grade.room_id as room_id,
     room.room_text as room_text,
     grade.subject_id as subject_id,
     subject.subject_text as subject_text
 from
     grade,room,subject
 where 
     grade.room_id=room.room_id
     And
     grade.subject_id=subject.subject_id

`
const NO_ROOM_GRADE = `
select 
grade.grade_id as grade_id,
grade.grade_name as grade_name,
grade.subject_id as subject_id,
subject.subject_text as subject_text,
grade.room_id as room_id
from
grade,subject
where 
grade.subject_id=subject.subject_id
AND
grade.room_id is null
`
exports.NO_ROOM_GRADE = NO_ROOM_GRADE;
exports.NO_GRADE_STUDENT = NO_GRADE_STUDENT;
exports.ALL_GRADE_SQL = ALL_GRADE_SQL;
exports.ALL_STUDENT_SQL = ALL_STUDENT_SQL;