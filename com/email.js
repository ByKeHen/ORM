const email = require("emailjs");
const emailAddr = 'xxx@qq.com';  // 你的邮箱地址

const server = email.server.connect({
    user: emailAddr, 
    password: "xxx", // 注意，如果是qq邮箱则不是你的qq密码
    host: "smtp.qq.com", // 主机
    ssl: true // 使用ssl
});

/**
 * @param {String} theme // 邮箱主题
 * @param {String} toMeail  // 接收邮件的地址
 * @param {String} cont // 邮件内容
 */

const sendMeail = async (theme, toMeail, cont) => {
    return new Promise((resolve, reject) => {
        server.send({
            text: cont, //邮件内容
            from: emailAddr, //谁发送的
            to: toMeail, //发送给谁的
            subject: theme //邮件主题
        }, function (err, message) {
            if (err) { reject(false) }
            resolve(message);
        })
    })
}

module.exports = sendMeail;
