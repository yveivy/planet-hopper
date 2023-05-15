const Characters = require('./characters');
const Inventory = require('./inventory');

Characters.hasOne(Inventory, {
    foreignKey: 'character_id',
});
Inventory.belongsTo(Characters, {
    foreignKey: 'character_id',
});


module.exports = { Characters, Inventory, };