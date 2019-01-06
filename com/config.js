module.exports = {
    db: {
        host: '127.0.0.1', // 数据库地址
        db: 'xx', // 数据库名称
        name: 'xx', // 数据库账号
        password: 'xx', // 数据库密码
        dialect: 'mysql', // 数据库类型
    },
    sessionConfig: {
        key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
        /** (number || 'session') maxAge in ms (default is 1 days) */
        /** 'session' will result in a cookie that expires when session/browser is closed */
        /** Warning: If a session cookie is stolen, this cookie will never expire */
        maxAge: 86400000,
        overwrite: true, /** (boolean) can overwrite or not (default true) */
        httpOnly: true, /** (boolean) httpOnly or not (default true) */
        signed: true, /** (boolean) signed or not (default true) */
        rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
        renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
    },
    redisConfig: { // redis数据库信息
        isUse: false, // 是否使用Redis数据库
        port: 6379, // 端口
        host: '127.0.0.1', // 主机
        password: 'xxx', // 密码
        db: 1, // 选择数据库
        ttl: 10000000  
    }
}