const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('userdb', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
