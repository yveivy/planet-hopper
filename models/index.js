const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/connection');

const Characters = require('./characters');
const Items = require('./items');
const Wishlist = require('./wishlist');
const Inventory = require('./inventory');

Characters.hasOne(Wishlist, {
    foreignKey: 'character_id',
});

Wishlist.belongsTo(Characters, {
    foreignKey: 'character_id',
});

Items.hasOne(Wishlist, {
    foreignKey: 'item_id',
});

Wishlist.belongsTo(Items, {
    foreignKey: 'item_id',
});
Characters.hasOne(Inventory, {
    foreignKey: 'character_id',
    onDelete: 'CASCADE'
});
Inventory.belongsTo(Characters, {
    foreignKey: 'character_id',
});

Items.hasOne(Inventory, {
    foreignKey: 'item_id',
});

Inventory.belongsTo(Items, {
    foreignKey: 'item_id',
});


module.exports = { Characters, Inventory, Items, Wishlist};