const checkWhiteList = require('../utils/checkWhiteList')
module.exports = options => {
    return async (ctx,next) => {
        // 验证超级白名单
        if(checkWhiteList(ctx.path,ctx.method,ctx.app.config.whiteList)){
            await next();
            return;
        }
        // 验证身份白名单
        if(checkWhiteList(ctx.path,ctx.method,ctx.app.config.identityWhiteList)){
            await next();
            return;
        }
        let {user_id} = ctx.token;
        let {path:url,method} = ctx;
        let result = await ctx.service.user.user.isUserApiAuthority({url,method,user_id});
        if(!result){
            ctx.body = {msg:'身份权限不足',code:0}
            return
        }
        await next();
    }
}