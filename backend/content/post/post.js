const express = require('express');
const dbconn = require('../../db/db');
const app = express();

app.post('/usuarios', (req, res) => {
    const { nome, email } = req.body;
    const sql = 'INSERT INTO usuarios (nome, email) VALUES (?, ?)';
    dbconn.query(sql, [nome, email], (err, result) => {
      if (err) {
        console.error('Erro ao criar usuário:', err);
        res.status(500).send('Erro ao criar usuário');
        return;
      }
      console.log('Novo usuário criado:', { nome, email });
      res.send({ nome, email });
    });
  });

module.exports = app;