const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Inventory extends Model {}

Inventory.Init({

    inventory_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    item_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    }, {
        sequalize,
        modelName: 'inventory',
    });

    model.exports = { Inventory };