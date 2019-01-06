const Sequelize = require('sequelize');
const db = require('./config').db;
const redis = require('redis');
const redisConfig = require('./config').redisConfig;
const moment = require('moment');

const sequelize = new Sequelize(db.db, db.name, db.password, {
    host: db.host,
    dialect: db.dialect,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: '+08:00',
    define: {
        schema: "yio", // 表前缀
        schemaDelimiter: '_', // 与表名的分隔符
    }
});

sequelize.authenticate()
    .then(res => {})
    .catch(e => console.log('数据库链接失败!' + e))

// 连接redis数据库
if (redisConfig.isUse) {
    const client = redis.createClient(redisConfig); 
    client.on("error", err => console.log("Redis Error " + err));
}

module.exports = {
    sequelize,
    Sequelize,
    client,
    moment
}
