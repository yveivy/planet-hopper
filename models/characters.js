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

        searchable_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        full_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        bio: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        bio: {
            type: DataTypes.TEXT,
            allowNull: true,
        },


    }, {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'characters'
    });

    module.exports = Characters;

