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
    timezone: '+08:00'
});

sequelize.authenticate().then(res => {
    console.log('数据库链接成功！')
}).catch(e => {
    console.log('数据库链接失败!' + e)
})

// 链接redis数据库
const client = redis.createClient(redisConfig); 

client.on("error", function (err) {
    console.log("Error " + err);
});

module.exports = {
    sequelize,
    client,
    moment
}
