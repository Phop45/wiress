const socketIo = require('socket.io');
const { fetchDataFromDatabase } = require('./controller/dataController'); // Adjust the path based on your project structure

const setUpSocketIo = (server) => {
  const io = socketIo(server);

  io.on('connection', (socket) => {
    console.log('A client connected');

    // Fetch initial data when a client connects
    fetchDataFromDatabase((error, data) => {
      if (error) {
        socket.emit('error', 'An error occurred while fetching initial data');
      } else {
        socket.emit('initialData', data);
      }
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });

  });
};

module.exports = { setUpSocketIo };
