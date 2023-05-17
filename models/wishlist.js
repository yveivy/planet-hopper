const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Wishlist extends Model {}

wishlist.init(
    {
        character_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'characters',
              key: 'character_id',
            },
          },
    
        item_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'items',
            key: 'item_id',
          },
        },
    }, 
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'wishlist'
    });

    module.exports = Wishlist