const express = require('express');
const { Characters, Inventory, Items, Wishlist } = require('./models');
// Import and require mysql2
const mysql = require('mysql2');
const config = require('./config/connection')

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const sequelize = new Sequelize(config.development);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});