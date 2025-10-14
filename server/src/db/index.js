import { Sequelize } from 'sequelize';
import { config } from '../config.js';

export const db = new Sequelize({
  name: config.db.name,
  host: config.db.host,
  port: config.db.port,
  username: config.db.username,
});
