const seedCharacters = require('./character-seeds');
const seedInventory = require('./inventory-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCharacters();
  console.log('\n----- CHARACTERS SEEDED -----\n');

  await seedInventory();
  console.log('\n----- PRODUCTS SEEDED -----\n');


  process.exit(0);
};

seedAll();
