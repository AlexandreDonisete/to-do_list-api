const { DataTypes } = require('sequelize');
const database = require('../config')

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
        }
    }, {
    timestamps: false 
});

module.exports = Task;
