const { Inventory } = require('../models');

const inventoryData = [

  {
    character_id:5,
    item_id:1,
  },
  {
    character_id:4,
    item_id:2,
  },
  {
    character_id:2,
    item_id:3,
  },
  {
    character_id:1,
    item_id:4,
  },
  {
    character_id:7,
    item_id:5,
  },
  {
    character_id:7,
    item_id:6,
  },
  {
    character_id:6,
    item_id:7,
  },
  {
    character_id:1,
    item_id:8,
  },
  {
    character_id:2,
    item_id:9,
  },
  {
    character_id:1,
    item_id:10,
  },
  {
    character_id:6,
    item_id:11,
  },
  {
    character_id:5,
    item_id:12,
  },
  {
    character_id:3,
    item_id:13,
  },
  {
    character_id:4,
    item_id:14,
  },
  {
    character_id:1,
    item_id:15,
  },
  {
    character_id:3,
    item_id:16,
  },
];

const seedInventory = () => Inventory.bulkCreate(inventoryData);

module.exports = seedInventory;
