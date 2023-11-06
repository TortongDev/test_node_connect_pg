const { Sequelize, DataTypes } = require('sequelize');
const pgConnect = require('../connect');

const UserModel = pgConnect.define('tb_users', {
    id: 
    {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING(255)
    },
    password: {
        type: DataTypes.STRING(255)
    },
    fname:{
        type: DataTypes.STRING(255)
    },
    lname: {
        type: DataTypes.STRING(255)
    }
});
UserModel.sync({alter: true})
module.exports = UserModel