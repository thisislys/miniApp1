/*
 * @Author: tao 
 * @Date: 2019-03-06 13:39:28 
 * @Last Modified by: tao
 * @Last Modified time: 2019-03-06 18:20:51
 */
const Controller = require('egg').Controller;
const {isExis,retainObj} = require('../../utils/isExis');
class GradeController extends Controller{
    /**
     * 获取所有的班级
     * /manger/grade
     * GET
     */
    async index(){
        let result = await this.ctx.service.manger.manger.findGrade();
        this.ctx.body = {msg:'获取班级成功',code:1,data:result}
    }
    /**
     * 获取所有未分配教室的班级
     * /manger/grade/new
     * GET
     */
    
    async new(){
        let result = await this.ctx.service.manger.manger.findNoGrade();
        this.ctx.body = {msg:'成功',code:1,data:result};
    }
    /**
     * 创建班级
     * /manger/grade
     * POST
     * {grade_name,room_id 可选}
     *  */ 
    async create(){
        this.ctx.validate({grade_name:'string'});
        let body = this.ctx.request.body;
        let result = await isExis({
            app:this.app,
            tableName:'grade',
            where:{grade_name:body.grade_name},
            columns:['grade_id']
        });
        if(result.isExis){
            this.ctx.body = {msg:'班级名重复',code:0}
            return;
        }
        body.grade_id = this.ctx.helper.randomString(4);
        body = retainObj(['grade_id','grade_name','subject_id','room_id'],body);
        result = await this.ctx.service.manger.manger.createGrade(body);
        if(result.affectedRows === 1){
            this.ctx.body = {msg:'创建班级成功',code:1,grade_id:body.grade_id}
        }else{
            this.ctx.body = {msg:'创建班级失败，可能是数据库原因',code:0}
        }

    }
    /**
     * 更新班级
     * /manger/grade/update
     * PUT
     * {grade_id 必填,grade_name 可选,subject_id 可选,room_id 可选}
     *  */ 
    async update(){
        this.ctx.validate({grade_id:'string'});
        let body = this.ctx.request.body;
        body = retainObj(['grade_id','grade_name','subject_id','room_id'],body);
        let result = await this.ctx.service.manger.manger.updateGrade(body);
        if(result.affectedRows === 1){
            this.ctx.body = {msg:'更新成功',code:1}
        }else{
            this.ctx.body = {msg:'更新失败,可能是数据库原因',code:0}
        }
    }
    /**
     * 删除班级
     * /manger/grade/delete
     * DELETE
     * {grade_id}
     *  */ 
    async destroy(){
        this.ctx.validate({grade_id:'string'});
        let body = this.ctx.request.body;
        let result = await this.ctx.service.manger.manger.delGradeRoomStudent('grade','grade_id',body.grade_id);
        if(result.affectedRows === 1){
            this.ctx.body = {msg:'删除班级成功',code:1}
        }else{
            this.ctx.body = {msg:'删除班级失败，可能是数据库原因',code:0}
        }
    }
}
module.exports = GradeController;
