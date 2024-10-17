const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; 

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'client_management' 
});

// Connect to the database
db.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected...');
});

// Route to add a client
app.post('/api/clients', (req, res) => {
  const { name, email, address, password } = req.body;
  const query = 'INSERT INTO clients (name, email, address, password) VALUES (?, ?, ?, ?)';
  db.query(query, [name, email, address, password], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).send({ id: result.insertId, name });
  });
});

// Route to schedule a meeting
app.post('/api/meetings', (req, res) => {
  const { client_id, topic, number_of_people, meeting_date, meeting_time } = req.body;
  const query = 'INSERT INTO meetings (client_id, topic, number_of_people, meeting_date, meeting_time) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [client_id, topic, number_of_people, meeting_date, meeting_time], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).send({ id: result.insertId, topic });
  });
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
