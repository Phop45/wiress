const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

exports.getCo = (req, res) => {
  // Query the database
  connection.query('SELECT * FROM data ORDER BY created_at DESC LIMIT 1', (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).send('An error occurred while querying the database');
    } else {
      let boxShadowColor;
      if (results[0].co > 85) {
        boxShadowColor = '#FF6868';
      } else if (results[0].co > 83) {
        boxShadowColor = '#F7D060';
      } else {
        boxShadowColor = '#88FF5F';
      }
      res.render('index', { data: results, boxShadowColor });
    }
  });
};

exports.getLPG = (req, res) => {
  // Query the database
  connection.query('SELECT * FROM data ORDER BY created_at DESC LIMIT 1', (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).send('An error occurred while querying the database');
    } else {
      // Determine the box-shadow color based on the value of co
      let boxShadowColor;
      if (results[0].co > 115) {
        boxShadowColor = '#FF6868';
      } else if (results[0].co > 113) {
        boxShadowColor = '#F7D060';
      } else {
        boxShadowColor = '#88FF5F';
      }
      // Render the index.ejs file with the results and the boxShadowColor
      res.render('lpg', { data: results, boxShadowColor });
    }
  });
};

exports.getSmoke = (req, res) => {
  // Query the database
  connection.query('SELECT * FROM data ORDER BY created_at DESC LIMIT 1', (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).send('An error occurred while querying the database');
    } else {
      // Determine the box-shadow color based on the value of co
      let boxShadowColor;
      if (results[0].co > 175) {
        boxShadowColor = '#FF6868';
      } else if (results[0].co > 172) {
        boxShadowColor = '#F7D060';
      } else {
        boxShadowColor = '#88FF5F';
      }
      // Render the index.ejs file with the results and the boxShadowColor
      res.render('smoke', { data: results, boxShadowColor });
    }
  });
};