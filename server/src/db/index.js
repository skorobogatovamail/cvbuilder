const { Sequelize } = require('sequelize');
const config = require('../../config');

const sequelize = new Sequelize({
  dialect: 'postgres',
  name: config.db.name,
  username: 'postgres',
  password: config.db.password,
  host: config.db.host,
  port: config.db.port,
});

module.exports = { sequelize };
