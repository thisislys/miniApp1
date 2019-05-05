/*
 * @Author: tao 
 * @Date: 2019-02-18 22:42:17 
 * @Last Modified by: tao
 * @Last Modified time: 2019-02-18 23:49:24
 * @func 图片上传的相关接口
 * 
 */
const Controller = require('egg').Controller;
class FileController extends Controller{
    async index(){
        console.log(this.ctx.request.files);
        this.ctx.body = {msg:'file ok'}
    }
}

module.exports = FileController;