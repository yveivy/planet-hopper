const express = require('express');
const { Characters, Inventory, Items, Wishlist } = require('./models');
// Import and require mysql2
const mysql = require('mysql2');
const config = require('./config/connection')
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const hbs = exphbs.create();
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
require('dotenv').config();
<<<<<<< HEAD

const router = require('./controllers/api/itemRoutes');
=======
>>>>>>> b72503926b6130be00d42312598513fd49bbf6d1

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

