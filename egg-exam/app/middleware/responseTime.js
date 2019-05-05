module.exports = (options,app)=>async (ctx,next)=>{
    let startTime = new Date().getTime();
    await next();
    let endTime = new Date().getTime();
    app.logger.info(`本次请求的路径为：${ctx.url},本次请求的方法是：${ctx.method}响应总时间为：${endTime - startTime}`);
}