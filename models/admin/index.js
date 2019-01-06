const {Sequelize, sequelize, moment} = require('../../com/bd');

/**
 * 在这里模型
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
    .then(() => {} )
    .catch(e => console.log('创建admin表失败!'))

module.exports = admin;
