const { wishlist } = require('../models');

const wishlistData = [

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

const seedWishlist = () => wishlist.bulkCreate(wishlistData);

module.exports = seedWishlist;