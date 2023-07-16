const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});

const PORT = 5001;

// Keep track of usernames on chat to avoid duplicates
const usernames = new Set();

io.on('connection', (socket) => {
  console.log('A new client connected.' + socket.id);

  // Event handler for receiving new chat messages
  socket.on('message', (message) => {
    console.log('Received message:', message);

    // Send the message to all connected clients
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    // Remove the disconnected client's username from the set by finding correct user via socket id
    const username = [...usernames].find((username) => usernames[username] === socket.id);
    if (username) {
      console.log(`A client ${username} disconnected`);
      usernames.delete(username);
    }
  });

  // Event handler for setting username
  socket.on('setUsername', (username) => {
    // Check if the username is already taken
    if (usernames.has(username)) {
      socket.emit('usernameTaken');
    } else {
      // Store the username with the socket ID
      usernames.add(username);
      usernames[username] = socket.id;
      socket.emit('usernameSet', username);
    }
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
