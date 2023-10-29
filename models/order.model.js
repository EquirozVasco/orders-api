const Sequelize = require('sequelize');
const db = require('../utils/database');

const Order = db.define('order', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    code: Sequelize.STRING,
    name: Sequelize.STRING,
    status: Sequelize.STRING,
});

module.exports = Order;