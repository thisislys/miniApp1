const crypto = require('crypto');
const baseRandomString = () =>
    Math.random()
        .toString(36)
        .substring(7)
        .split('')
        .join('')
const randomString = (num=4) => {
    let arr = [];
    for(let i = 0; i < num; i++){
        arr.push(baseRandomString());
    }
    return arr.join('-');
}

const createKeys = () => {
    return 'tao';
}
const sha256 = (secret) => {
    return crypto.createHmac('sha256', secret)
                   .update(createKeys())
                   .digest('hex');
}
// console.log(sha256('Peach0126!'));
/**
 * 随机抽取试卷考题
 * 初步抽题逻辑，档期三道，之前学科两道
 * @param {[]} questions 考题数组
 * @param {*} subject_ids 抽题的考试科目
 */
const randomExam = (questions, subject_ids)=>{
    let subject_id = subject_ids[subject_ids.length-1],
        cur_num = 3,
        pre_num = 2;
    let cur_subjects = questions.filter(item=>item.subject_id === subject_id);
    let pre_subjects = questions.filter(item=>item.subject_id !== subject_id);
    // 修正当前学科试题不足
    if (cur_subjects.length < 3){
        cur_num = cur_subjects.length;
        pre_num = 5 - cur_num;
    }
    return [...lotteryQuestion(cur_subjects, cur_num), ...lotteryQuestion(pre_subjects, pre_num)]
}

// 打乱数组
const lotteryQuestion = (questions, num)=>{
    questions.sort((a,b)=>Math.random()>.5?-1: 1);
    return questions.slice(0, num)
}


module.exports = {randomString,sha256,createKeys,randomExam}