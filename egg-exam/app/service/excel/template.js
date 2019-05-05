const Service = require('egg').Service;
const fs = require('fs');
const path = require('path');
const xlsx = require('node-xlsx');
class TemplateService extends Service{
    constructor(props){
        super(props);
        this.temPath = path.join(__dirname,'../../../excelTemplate/template.xls');
        this.questionType = {
            0:'0-判断',
            1:'1-单选',
            2:'2-多选',
            3:'3-填空（人工判卷）'
        }
    }
    
    async getTemplateData(){
        let excelData = xlsx.parse(fs.readFileSync(this.temPath));
        excelData = await this.transformData(excelData);
        return excelData;
    }
    /**
     * [
     *  {
     *      name:'sheetName',
     *      data:[[],[]] // 表格数据,一个二维数组代表一行
     *  }
     *  {
     *      name:
     *  }
     * ]  =>  [{
     *      name:'sheetName',
     *      data:[
     *          [],
     *          []
     *      ]
     * }
     * {
     *      
     * }
     * ]
     */
    async transformData(excelData){
        let list = excelData[0].data
        list = await this.listToCol(list);
        excelData[0].data = list;
        return excelData;
    }
    async listToCol(list){
        let ths = list[0].map((item,key)=>{
            key = String(key);
            return {key,txt:item}
        });
        let qus = list.slice(1).map(item=>{
            let obj = {};
            item.forEach((val,key)=>{
                let index = Object.keys(this.questionType).find(item=>this.questionType[item] === val);
                val =  index ? {index,text:this.questionType[index]} : val; 
                obj[key] = val;
            })
            return obj;
        });
        return { ths,qus, }
    }
}
module.exports = TemplateService;