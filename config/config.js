require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }  
  },
  production: {
    use_env_variable: 'JAWSDB_URL',
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }  
  },
};