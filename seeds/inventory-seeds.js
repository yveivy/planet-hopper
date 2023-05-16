const { Inventory } = require('../models');

const inventoryData = [

  {
    character_id:'',
    item_id:'',
  },
  {
    character_id:'',
    item_id:'',
  },
  {
    character_id:'',
    item_id:'',
  },
  {
    character_id:'',
    item_id:'',
  },
  {
    character_id:'',
    item_id:'',
  },
  {
    character_id:'',
    item_id:'',
  },
  {
    character_id:'',
    item_id:'',
  },
  {
    character_id:'',
    item_id:'',
  },
  {
    character_id:'',
    item_id:'',
  },
  {
    character_id:'',
    item_id:'',
  },
  {
    character_id:'',
    item_id:'',
  },
  {
    character_id:'',
    item_id:'',
  },
  {
    character_id:'',
    item_id:'',
  },
  {
    character_id:'',
    item_id:'',
  },
  {
    character_id:'',
    item_id:'',
  },
];

const seedInventory = () => Inventory.bulkCreate(inventoryData);

module.exports = seedInventory;
