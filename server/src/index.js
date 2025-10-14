import express from 'express';
import { config } from '../config.js';

const app = express();

app.use('/', (_, res) => res.json({ status: 'OK' }));
app.listen(config.port, () => {
  console.log(`Application started on port ${config.port}`)
});
