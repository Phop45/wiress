const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

exports.getAllData = (req, res) => {
  // Query the database
  connection.query('SELECT * FROM data ORDER BY created_at DESC LIMIT 1', (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).send('An error occurred while querying the database');
    } else {
      // Determine the box-shadow color based on the value of co
      let boxShadowColor;
      if (results[0].co > 80) {
        boxShadowColor = '#FF6868';
      } else if (results[0].co > 20) {
        boxShadowColor = '#F7D060';
      } else {
        boxShadowColor = '#88FF5F';
      }
      // Render the index.ejs file with the results and the boxShadowColor
      res.render('index', { data: results, boxShadowColor });
    }
  });
};

// Function to fetch latest data from the database
const fetchDataFromDatabase = (callback) => {
  connection.query('SELECT * FROM data ORDER BY created_at DESC LIMIT 1', (error, results) => {
    if (error) {
      console.log(error);
      callback(error, null);
    } else {
      callback(null, results[0]);
    }
  });
};