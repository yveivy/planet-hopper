const seedCharacters = require('./character-seeds');
const seedItems = require('./item-seeds');
const seedWishlist = require('./wishlist-seeds');
const seedInventory = require('./inventory-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCharacters();
  console.log('\n----- CHARACTERS SEEDED -----\n');
  await seedItems();
  console.log('\n----- ITEMS SEEDED -----\n');
  await seedInventory();
  console.log('\n----- INVENTORY SEEDED -----\n');

  process.exit(0);
}

module.export = seedAll()

