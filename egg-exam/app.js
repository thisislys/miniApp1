module.exports = app =>{
    let staticIndex = app.config.coreMiddleware.indexOf('static');  
    app.config.coreMiddleware.splice(staticIndex + 1,0,'singlePage','checkLogin','checkIdentity');
    app.config.coreMiddleware.unshift('gzip');
    app.config.coreMiddleware.unshift('responseTime');
    // 定义老师用户名的规则
    app.validator.addRule('username',(rule,value)=>{
        let usernameReg = /^[a-zA-Z0-9_-]{4,16}$/;  // 用户名正则，4到16位（字母，数字，下划线，减号）
        if(!usernameReg.test(value)){
            return '请输入4到16位（字母，数字，下划线，减号）格式的用户名'
        }
    })
    // 定义老师密码的规则(学生密码同老师密码的规则一致)
    app.validator.addRule('userpwd',(rule,value)=>{
        let userpwdReg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/; // 最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
        if(!userpwdReg.test(value)){
            return '您的密码应该最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符';
        }
    })
    
}