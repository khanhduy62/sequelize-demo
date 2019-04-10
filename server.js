import express from 'express';
import morgan from 'morgan';

import config from './src/config/common';

const app = express();

app.use(express.json());
app.use(morgan('combined'));
app.use(`/api/${config.apiVer}`, require('./src/controllers'));

app.listen(3000);
console.log('app running on port ', 3000);