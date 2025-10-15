const express = require('express');
const cors = require('cors');
const config = require('../config');
const { sequelize } = require('./db/index');
// const models = require('./models/model');

const app = express();

app.use(cors());
app.use(express.json());
app.get('/', (_, res) => res.json({ status: 'OK' }));
app.listen(config.port, async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  console.log(`Application started on port ${config.port}`);
});
