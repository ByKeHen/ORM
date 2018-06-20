
const Sequelize = require('sequelize')
const sequelize = require('../../db').mysql
const Op = Sequelize.Op

// 创建一个模型
const User = sequelize.define('user',{
        name: {
            type: Sequelize.STRING
        },
        age: {
            type: Sequelize.BIGINT
        }
    },{
        freezeTableName: true
    }
)

User.sync({
    force: false
})

exports.addUser = (name,age) => {
    return User.create({
        name: name,
        age: age
    })
}

exports.findUser = (name) => {
    return User.findAll({
        attributes: ['name',['age','xxx']],
        where: {
            name: name
        }
    })
}

exports.findUseror = () => {
    // ‘查询用户表中年龄等于 12 or 等于21’
    return User.findAll({
        where: {
            // [Op.or]: [
            //     {
            //         age: 12
            //     },
            //     {
            //         age: 21
            //     }
            // ]
            age: {
                [Op.or]: [12,21]
            }
        }
    })
}

exports.deleUserName = (name) => {
    return User.destroy({
        where: {
            name: name
        }
    })
}

exports.useredit = (odd,value) => {
    return User.update({
        age: value
    },{
        where: {
            name: odd,
            age: {
                [Op.ne]: null // not 
            }
        }
    }
    )
}
