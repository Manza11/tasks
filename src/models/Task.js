const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Task = sequelize.define('task', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isDone: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
    // userId
    // categoryId
});

module.exports = Task;