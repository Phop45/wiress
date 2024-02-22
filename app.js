require('dotenv').config();
const express = require('express');
const path = require('path');
const http = require('http'); // Add this line to import http module
const { setUpSocketIo } = require(path.join(__dirname, 'server', 'socketSetup'));

const app = express();
const dataRoute = require(path.join(__dirname, 'server', 'routers', 'dataRoute'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', dataRoute);
app.get('/', (req, res) => {
    res.render('index');
});

const server = http.createServer(app);
setUpSocketIo(server); // Set up Socket.io

// Start the server
const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});