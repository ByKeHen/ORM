// 是否登录
module.exports = {
    checkLogin: function checkLogin (req, res, next) {
      // 拦截未登录调用接口
      if (!req.session.name) {
        return res.json({
          msg: '未登录(:-1',
          data: '',
          data: -1
        })
      }
      next();
    },
    checkNotLogin: function checkNotLogin (req, res, next) {
      // 拦截已登录
      if (req.session.name) {
        return res.json({
          msg: '已登录(:-1',
          data: '',
          data: -1
        })
      }
      next();
    }
  }