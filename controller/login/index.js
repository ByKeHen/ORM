const Sequelize = require('sequelize');
const {sequelize, moment} = require('../../com/bd');

/**
 * 不会执行，控制器示例
 */

const admin = sequelize.define('admin', {
    username: {
      type: Sequelize.STRING(20)
    },
    password: {
      type: Sequelize.STRING(50)
    },
    last_login: {
      type: Sequelize.STRING(50)
    },
    createdAt: {
      type: Sequelize.DATE,
      get() {
          return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
      }
    },
    updatedAt: {
        type: Sequelize.DATE,
        get() {
            return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss');
        }
    }
},{
  paraonid: true
})

admin.sync({force: false})
    .then(() => {
        console.log('创建admin表成功!')
    })
    .catch(e => {
        console.log('创建admin表失败!')
    })

admin.login = async (name,password) => {
    return admin.findOne({
      where: {
        username: name,
        password: password
      },
      attributes: ['id', 'username']
    })
}

module.exports = admin;
