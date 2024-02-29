const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const users = require('./content/get/get');

app.use(cors());
app.use(bodyParser.json());
app.get('/usuarios', users);

app.listen(3001, () => {
    console.log('Servidor online');
  });