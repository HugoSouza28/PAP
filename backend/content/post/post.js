const express = require('express');
const dbconn = require('../../db/db');
const app = express();

app.post('/data', (req, res) => {
    const { nome, email } = req.body;
    const sql = 'INSERT INTO members (username, password, email) VALUES (?, ?, ?)';
    dbconn.query(sql, [username, password, email], (err, result) => {
      if (err) {
        console.error('Erro ao criar usuário:', err);
        res.status(500).send('Erro ao criar usuário');
        return;
      }
      console.log('Novo usuário criado:', { username, password, email });
      res.send({ nome, password, email });
    });
  });

module.exports = app;