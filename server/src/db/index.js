import { Sequelize } from 'sequelize';
import { config } from '../../config.js';

export const sequelize = new Sequelize({
  dialect: 'postgres',
  name: config.db.name,
  username: 'postgres',
  password: config.db.password,
  host: config.db.host,
  port: config.db.port,
});
