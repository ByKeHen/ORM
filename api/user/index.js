const user = require('./sqlMap')
const express = require('express')
const checklogin = require('../check').checkLogin
const router = express.Router()

/*
  建议使用 Restful 
    http://127.0.0.1/user/1 GET  根据用户id查询用户数据
    http://127.0.0.1/user  POST 新增用户
    http://127.0.0.1/user  PUT 修改用户信息
    http://127.0.0.1/user  DELETE 删除用户信息
  check.js 登录验证的中间件
    checkLogin // 用户未登录的请求会被拒绝(修改资料,回复，发表)
    checkNotLogin // 用户登录的请求会被拒绝(注册,登录)
  
*/

router.post('/api/user/adduser',checklogin,(request,response) => {
    let params = request.body
    user.addUser(params.name,params.age).then(() => {
        return user.findUser(params.name)
    }).then(user => {
        if (user[0].name == params.name) {
         response.jsonp({
                code: 0,
                data: user,
                msg: ''
            })
        }
    })
 })
 
 
 router.post('/api/user/getuserage',checklogin,(requset,response) => {
     user.findUseror().then(result => {
         response.send(result)
     })
 })
 
 
 router.delete('/api/user/deleteuser',checklogin,(req,resopnse) => {
     let params = req.body
     console.log(params)
     user.deleUserName(params.name).then(result => {
         resopnse.jsonp({
             code: 0,
             data: result,
             msg: ''
         })
     })
 })
 
 router.put('/api/user/edituser',checklogin,(request,resopnse) => {
     let params = request.body
     user.useredit(params.odd,params.value).then(result => {
         resopnse.jsonp({
             code: 0,
             data: result,
             msg: ''
         })
     })
 })

 module.exports = router