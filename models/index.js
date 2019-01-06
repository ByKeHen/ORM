const glob = require('glob')
const { resolve } = require('path')

/**
 *  所有模型集合
 */

Models = () => {
    let modelList = {};
    glob.sync(resolve(__dirname, './', '**/*.js'))
        .filter(value => (value.includes('index.js')))
        .map(model => {
            modelList[require(model).name] = require(model)
        })
    return modelList
}

module.exports = Models()
