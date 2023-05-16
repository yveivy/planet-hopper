const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/connection')

const CharacterModel = require('./characters')(sequelize, DataTypes);
const ItemModel = require('./items')(sequelize, DataTypes);
const InventoryModel = require('./inventory')(sequelize, DataTypes);
const WishlistModel = require('./wishlist')(sequelize, DataTypes);


const Characters = CharacterModel(sequelize);
const Items = ItemModel(sequelize);
const Inventory = InventoryModel(sequelize);
const Wishlist = WishlistModel(sequelize);

Characters.hasOne(Inventory, {
    foreignKey: 'character_id',
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

Characters.HasOne(Wishlist, {
    foreignKey: 'character_id',
});

Wishlist.belongsTo(Characters, {
    foreignKey: 'character_id',
});

Items.HasOne(Wishlist, {
    foreignKey: 'item_id',
});

Wishlist.belongsTo(Items, {
    foreignKey: 'item_id',
})


sequelize.sync({ force: true})
.then(() => {
    console.log('Tables created successfully.');
})
.catch((error) => {
    console.error('Error creating tables.',error);
});

module.exports = { Characters, Inventory, Items, Wishlist};