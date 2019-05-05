const isJSON = require('koa-is-json');
const zlib = require('zlib');
const Stream = require('stream');
function readStream(readStream){

  return new Promise((reslove,reject)=>{
    let html = '';
    readStream.on('data',chuck=>{
      html += chuck;
    });
    readStream.on('end',()=>{
      reslove(html);
    });
  })

}
module.exports = options => {
  return async function gzip(ctx, next) {
    await next();
    
    // 后续中间件执行完成后将响应体转换成 gzip
    let body = ctx.body;
    if (!body) return;
    if (isJSON(body)){
      body = JSON.stringify(body);
    }else if(body instanceof Stream){
      body = await readStream(body);
    }
    // 设置 gzip body，修正响应头
    const stream = zlib.createGzip();
    stream.end(body);
    ctx.body = stream;
    ctx.set('Content-Encoding', 'gzip');
  };
};