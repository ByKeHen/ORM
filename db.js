const sequelize = require('sequelize');

module.exports = { // sequelize mysql 链接信息
    mysql: new sequelize('database','user','pass',{
        host: '127.0.0.1',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }),
    redis: {  // redis 连接配置
        'host': '127.0.0.1',
        'port': 6379,
        'pass': '',
        'db': 0,
        'ttl': 10000000,
        'logErrors': true
    }
}
