const Controller = require('egg').Controller;
class IndexController extends Controller{
    async responseTemplateData(){
        let aTemplates = await this.ctx.service.excel.template.getTemplateData();
        this.ctx.body = JSON.stringify(aTemplates);
    }
}
module.exports = IndexController;