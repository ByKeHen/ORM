
const router = require('koa-router')();

/**
 *  建议使用 Restful 
    http://127.0.0.1/user  GET  查询
    http://127.0.0.1/user  POST 提交
    http://127.0.0.1/user  PUT  修改
    http://127.0.0.1/user  DELETE 删除
    api示例，不会执行
 */

router.get('user', (ctx, next) => {
    ctx.body = 'Hello';
})
 
 module.exports = router;
