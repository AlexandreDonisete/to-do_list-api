const { DataTypes } = require('sequelize');
const database = require('../config')

const User = database.define('User', {
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
