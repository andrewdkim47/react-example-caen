const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app); // wired up the ExpressJS server to Socket.io

const io = socketIo(server);

const getMessage = async socket => {
    try {
      socket.broadcast.emit('broadcast', "Hello to every client!"); // sending to all clients except sender
    } catch (error) {
      console.error(`Error: ${error.code}`);
    }
  };


// takes two args: the name of the event (connection), and a callback function.
// on() is just a core node.js method tied to the eventEmitter class. 
// connection event returns a socket object which will be passed to the callback function.
// by using said socket, you will be able to send data back to a client in real time.
let interval;

io.on("connection", socket => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getMessage(socket), 10000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));