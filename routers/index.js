const compose = require('koa-compose')
const glob = require('glob')
const { resolve } = require('path')

registerRouter = () => {
    let routers = [];
    /**
     * 所有路由文件须放在api目录中，以文件件区分，且路由必须在index.js文件里
     */
    glob.sync(resolve(__dirname, '../api/', '**/*.js'))
        .filter(value => (value.includes('index.js')))
        .map(router => {
            routers.push(require(router).routes())
            routers.push(require(router).allowedMethods())
        })
    return compose(routers)
}

module.exports = registerRouter