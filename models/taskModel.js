const { DataTypes } = require('sequelize');
const database = require('../config')
const User = require('./userModel')

const Task = database.define('Task', 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM,
            values: ['in progress', 'done', 'to do'],
            allowNull: false,
            defaultValue: 'to do'
        },
        creationDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        deadline: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    }, {
    timestamps: false 
});

Task.belongsTo(User);
User.hasMany(Task);

module.exports = Task;
