const express = require('express');
const dbconn = require('../../db/db');
const app = express();

app.get('/usuarios', (req, res) => {
    const sql = 'SELECT * FROM usuarios';
    dbconn.query(sql, (err, result) => {
      if (err) {
        console.error('Erro ao buscar usuários:', err);
        res.status(500).send('Erro ao buscar usuários');
        return;
      }
      res.send(result);
    });
  });

module.exports = app;