const path = require('path');
exports.keys = 'tao';

exports.log = (con) => {
    console.log('----------------------');
    console.log(con);
    console.log('----------------------');
}

exports.security = {
    csrf: {
        enable: false
    },
}

exports.mysql = {
    client: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'exam'
    }
}
exports.static = {
    prefix: '/public/'
}
exports.multipart = {
    mode: 'file',
};
exports.questionsRootPath = path.join(__dirname, '../questions_save'); //存放试题的根目录
exports.answersRootPath = path.join(__dirname, '../answers_save'); //存放考试答案的根目录


function route(url, method) {
    return { url, method }
}

// 超级白名单，登录和身份都不需要验证
exports.whiteList = [
    route('/user/login', 'POST'),
    route('/student/login', 'POST'),
    route('/manger/student', 'POST'),
    route('/manger/grade', 'GET'),
    route('/manger/student/edit', 'PUT'),
    route(/^\/user\/getAuthInfo\/*/,'any'),  //获取权限信息
    route(/^\/user\/delAutho\/*/,'any'), // 删除权限信息
    route('/user/cancelIdentityApi','POST') ,//取消身份的api接口权限
    route('/user/cancelIdentityView','POST') ,//取消身份的视图接口权限
    // route(/\/exam\/student\/*/,'GET')
]
// 身份白名单，不需要验证身份
exports.identityWhiteList = [
    // 学生登陆
    route(/^\/student\/*/, 'any'),
    // 创建试卷
    route(/^\/exam\/exam\/*/, 'any'),
    // 学生提交试卷
    route('/exam/student', 'POST'),
    // 学生获取试卷
    route(/^\/exam\/unstart\/*/,'GET'),
    route(/^\/exam\/exam\/*/,'PUT'),
    route(/^\/exam\/unstart\/*/, 'GET'),
    // 获取学生答题详情
    route(/^\/exam\/student\/*/, 'any'),
    // 获取学生信息
    route('/student/info', 'GET'),
    // 获取学生教室号
    route(/^\/manger\/room\/*/, 'any'),
    // 获取学生班级号
    route(/^\/manger\/grade\/*/, 'any'),
    // 学生管理
    route(/^\/manger\/student\/*/, 'any'),
    
];
// 登录白名单，不需要验证登录
exports.loginWhiteList = [

]


// 性能监控配置
exports.alinode = {
    appid: '78838',
    secret: '6180432c602431b7e0c4bccc6ac39dd60159b101'
};