const seedInventory = require('./inventory-seeds');
const sequelize = require('../config/connection');
const { Inventory } = require('../models');

const resetInventoryData = async () => {
    await Inventory.drop();
    await Inventory.sync();
    await seedInventory();
    console.log('\n----- INVENTORY SEEDED -----\n');
  }

module.exports = {resetInventoryData}
