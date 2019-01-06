
const router = require('koa-router')();

/**
 *  api示例
 *  建议使用 Restful 
 *  路由建立格式如此文件，必须exports导出,会自动use()
 *  建议书写规则 ↓↓↓↓↓
    http://127.0.0.1/user  GET  查询
    http://127.0.0.1/user  POST 提交
    http://127.0.0.1/user  PUT  修改
    http://127.0.0.1/user  DELETE 删除
 */

router.get('/hello', async ctx  => {
    ctx.body = 'Hello';
})

module.exports = router;
