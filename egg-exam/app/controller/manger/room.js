/*
 * @Author: tao 
 * @Date: 2019-03-06 13:39:28 
 * @Last Modified by: tao
 * @Last Modified time: 2019-03-06 18:18:30
 */
const Controller = require('egg').Controller;
const {isExis,retainObj} = require('../../utils/isExis');
class RoomController extends Controller{
    /**
     * 获取所有的教室
     * /manger/room
     * GET
     */
    async index(){
        let result = await this.ctx.service.manger.manger.findRoom();
        this.ctx.body = {msg:'获取教室成功',code:1,data:result}
    }
    /**
     * 创建教室
     * /manger/room
     * POST
     * {room_text}
     * */
    async create(){
        this.ctx.validate({room_text:'string'});
        let body = this.ctx.request.body;
        let result = await isExis({
            app:this.app,
            tableName:'room',
            where:{room_text:body.room_text},
            columns:['room_id']
        })
        if(result.isExis){
            this.ctx.body = {msg:'教室名重复',code:0}
            return;
        }
        body = retainObj(['room_id','room_text'],body);
        body.room_id = this.ctx.helper.randomString(4);
        result = await this.ctx.service.manger.manger.createRoom(body);
        if(result.affectedRows === 1){
            this.ctx.body = {msg:'教室创建成功',code:1,room_id:body.room_id}
        }else{
            this.ctx.body = {msg:'教室创建失败',code:0}
        }
    }
    /**
     * 更新教室
     * /manger/room/update
     * PUT
     * {room_id,room_text}
     */ 
    async update(){
        this.ctx.validate({room_text:'string',room_id:'string'});
        let body = this.ctx.request.body;
        body = retainObj(['room_id','room_text'],body);
        let result = await isExis({
            app:this.app,
            tableName:'room',
            where:{room_text:body.room_text},
            columns:['room_id']
        });
        if(result.isExis){
            this.ctx.body = {msg:'教室号重复',code:0}
            return;
        }
        result = await this.ctx.service.manger.manger.updateRoom(body);
        if(result.affectedRows === 1){
            this.ctx.body = {msg:'更新成功',code:1}
        }else{
            this.ctx.body = {msg:'更新失败，可能是数据库原因',code:0}
        }

    }
    /** 
     * 删除教室
     * /manger/room/delete
     * DELETE
     * {room_id}
     * 
     * */ 
    async destroy(){
        this.ctx.validate({room_id:'string'});
        let body = this.ctx.request.body;
        let result = await this.ctx.service.manger.manger.delGradeRoomStudent('room','room_id',body.room_id);
        if(result.affectedRows === 1){
            this.ctx.body = {msg:'删除成功',code:1}
        }else{
            this.ctx.body = {msg:'删除失败，数据库原因',code:0}
        }
    }
}
module.exports = RoomController;
