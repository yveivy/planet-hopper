const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Characters extends Model {}

Characters.init(
    {
        character_id: {
            type: DataTypes.INTEGER,
            primary: true,
            autoIncrement: true,
        },

        character_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        role: {
            type: DataTypes.String,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'characters'
    });

    module.exports = { Characters }

