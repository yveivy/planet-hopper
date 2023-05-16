const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Inventory extends Model {}

Inventory.Init(  
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

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

    wishlist_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'wishlist',
        key: 'wishlist_id',
      }
    }
}, { 
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'inventory'

});

    model.exports = Inventory