const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Wishlist extends Model { }

Wishlist.init(
  {
    wishlist_id: {
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
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'wishlist'
  });

module.exports = Wishlist