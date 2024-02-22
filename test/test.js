// Import the mysql2 module
const mysql = require('mysql2');
require('dotenv').config(); // Load environment variables from .env file

// Create a connection to your MySQL database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

// Define your SQL query
const sql = 'SELECT co FROM data ORDER BY created_at DESC LIMIT 1';

// Execute the query
connection.query(sql, (err, results, fields) => {
  if (err) {
    console.error('Error executing query:', err);
    return;
  }
  console.log('Query results:', results);
});

// Close the connection when done
connection.end((err) => {
  if (err) {
    console.error('Error closing connection:', err);
    return;
  }
  console.log('Connection closed');
});
