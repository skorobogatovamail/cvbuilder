import express from 'express';
import { config } from '../config.js';
import { sequelize } from './db/index.js';

const app = express();

app.use('/', (_, res) => res.json({ status: 'OK' }));
app.listen(config.port, async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  console.log(`Application started on port ${config.port}`);
});
