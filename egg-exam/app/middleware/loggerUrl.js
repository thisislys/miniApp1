module.exports = options => {
    return async (ctx,next) => {
        ctx.app.logger.info(ctx.url)
        await next();
    }
}