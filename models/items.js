const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Items extends Model {}

Items.init(
    {
        item_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        searchable_item: {
            type: DataTypes.STRING,
            allowNull: false,

        },

        item_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        description: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },

    }, {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'items'
    });

    module.exports = Items

