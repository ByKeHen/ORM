const email = require("emailjs");
const user = 'xxx@qq.com';  // 你的邮箱
const server = email.server.connect({
    user: user, //你的邮箱
    password: "xxx", // 注意，不是QQ密码，而是刚才生成的授权码
    host: "smtp.qq.com", // 主机，不改
    ssl: true // 使用ssl
});

//开始发送邮件
const sendMeail = async (toMeail,cont) => {
    return new Promise((resolve, reject) => {
        server.send({
            text: cont, //邮件内容
            from: user, //谁发送的
            to: toMeail, //发送给谁的
            subject: '自动发货提醒' //邮件主题
        }, function (err, message) {
            if (err) { reject(false) }
            resolve(message);
        })
    })
}

module.exports = sendMeail;
