/*
 * @Author: tao 
 * @Date: 2019-01-30 08:35:53 
 * @Last Modified by: jasonandjay
 * @Last Modified time: 2019-03-13 09:07:38
 * @Last Modified time: 2019-03-13 09:17:10
 * @Func: 应用的路由配置部分
 */
module.exports = app => {
    const {router , controller, config} = app;
    config.log('服务器重新启动...');
    // 试题类型的CURD
    /**
     * 添加试题类型
     * 入参： {text:试题类型名称,sort:试题排序}
     * 响应： {msg:信息说明,code:1 or 0}
     */
    router.get('/exam/insertQuestionsType',controller.exam.questionsType.insertQuestionsType);
    /**
     * 获取所有的试题类型
     * 入参； 无
     * 响应： {msg:信息说明,code:1 or 0, data:获取到的数据}
     * data:[
     *  {
     *      questions_type_id:试题类型的id,
     *      questions_type_text:试题类型的名称,
     *      questions_type_sort:试题类型的排序 
     *  }
     * ]
     */
    router.get('/exam/getQuestionsType',controller.exam.questionsType.getQuestionsType);
    /**
     * 删除单个试题类型
     * 入参：{id:待删除的试题类型的id}
     * 响应：{msg:信息说明,code 1 or 0}
     */
    router.post('/exam/delQuestionsType',controller.exam.questionsType.delQuestionsType);
    /**
     * resources对应路径说明
     * /posts GET => index
     * /posts/new GET => new
     * /posts/:id GET => show
     * /posts/:id/edit GET => edit
     * /posts  POST => create
     * /posts/:id PUT => update
     * /posts/:id DELETE => destroy
     */
    /**
     * 课程类型CURD接口
     */
    router.resources('/exam/subject', controller.exam.subject);
    /**
     * 考试类型CURD接口
     */
    router.resources('/exam/examType',controller.exam.examType);
    /**
     * 试题的CURD接口
     */
    router.resources('/exam/questions',controller.exam.questions);
    /**
     * 用户的CURD接口
     */
    router.resources('/user',controller.user.user);
    // 获取权限信息
    router.get('/user/getAuthInfo/:id',controller.user.user.getAuthInfo);
    // 删除权限信息
    router.delete('/user/delAutho/:id',controller.user.user.delAutho);
    // 编辑权限信息
    router.put('/user/editAutho/:id',controller.user.user.editAutho);
    // 给身份设定api
    router.post('/user/setIdentityApi',controller.user.user.setIdentityApi);
    // 给身份取消api
    router.post('/user/cancelIdentityApi',controller.user.user.cancelIdentityApi);
    // 给身份设置视图
    router.post('/user/setIdentityView',controller.user.user.setIdentityView);
    // 给身份取消视图
    router.post('/user/cancelIdentityView',controller.user.user.cancelIdentityView);
    /**
     * 老师登录接口
     */
    router.post('/user/login',controller.user.login.login);
    /**
     * 学生登录接口
     */
    router.post('/student/login',controller.student.user.login);
    /** 
     * 学生端登陆完获取学生信息接口
     */
    router.get('/student/info', controller.student.user.info);
    /**
     * 学生CURD接口
     */
    router.resources('/manger/student',controller.manger.student);
    /**
     * 教室CURD接口
     */
    router.resources('/manger/room',controller.manger.room);

    /**
     * 班级CURD接口
     */
    router.resources('/manger/grade',controller.manger.grade);

    /**
     * 上传图片，个人素材库(测试阶段，未完成)
     */
    router.post('/image',controller.user.file.index);
    
    /**
     * 试卷的CURD接口
     */
    router.resources('/exam/exam', controller.exam.exam);
    /** 
     * 试卷学生端的CURD接口
     */
    router.resources('/exam/student', controller.exam.examStudent);
    /** 
     * 学生端获取未考试试卷复用教师端
     */
    router.get('/exam/unstart/:id', controller.exam.exam.show);
}