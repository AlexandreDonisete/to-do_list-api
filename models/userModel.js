const { DataTypes } = require('sequelize');
const database = require('../config')

const User = database.define('User', {

    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gender:{
        type: DataTypes.ENUM('male', 'female'),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false 
});

module.exports = User;
