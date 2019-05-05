const fs = require('fs');
const path = require('path');
module.exports = options => {
    return async (ctx,next) => {
        if(ctx.path.indexOf('/public/spa/spa') !== -1){
            let indexHtml = fs.readFileSync(path.join(__dirname,'../public/spa/index.html'),'utf-8');
            ctx.body = indexHtml;
        }else{
            await next();
        } 
    }
}