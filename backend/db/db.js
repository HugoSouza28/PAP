const mysql = require('mysql');

const dbconn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'paphugo'
  });

module.exports = dbconn;