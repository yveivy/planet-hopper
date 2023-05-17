const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');


class Characters extends Model {}

Characters.init(
    {
        character_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        character_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        bio: {
            type: DataTypes.STRING(500),
            allowNull: true,
        },

    }, {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'characters'
    });

    module.exports = Characters;

