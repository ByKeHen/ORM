const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const redis = require('./db').redis;
const FileStore = require('session-file-store')(session);
const RedisStrore = require('connect-redis')(session);
const app = express();

const user = require('./api/user/index');

app.use(session({
    name: 'node', // cookie名称
    secret: 'yioMe', // 用来对session id相关的cookie进行签名
    //store: new FileStore(),  // 本地存储session（文本文件，也可以选择其他store，比如下面的redis）
    store: new RedisStrore(redis),
    saveUninitialized: false, // 是否自动保存未初始化的会话，建议false
    resave: false, // 是否每次都重新保存会话，建议false
    cookie: {
    maxAge: 24 * 60 * 60 * 1000 // 有效期，单位是毫秒
    }
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(user);

// app.use('/',express.static('dist')); // 前后端分离->静态文件目录

app.listen(3000,(err) => {
    if (err) {throw err}
    console.log('服务器开启成功!http://127.0.0.1:3000');
})
