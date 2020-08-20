//Run node of Customer
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dbapp',
});

const app = express();
app.get('/locate', function (req, res) {
  connection.getConnection(function (err, connection) {
    connection.query('SELECT * FROM locate', function (error, results) {
      if (error) throw error;
      res.send(results);
    });
  });
});

app.listen(3001, () => {
  console.log('Go to http://localhost:3001/locate so you can see the data.');
});
