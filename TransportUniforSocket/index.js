const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {cors: {
  origin: [
    "exp://192.168.0.4:8082",
    "exp://192.168.0.4:8081"
  ]
}});

io.on('connection', (socket) => {

  console.log('a user connected');

  socket.on('sendLocation', (location, car) => {
    io.emit('receiveLocation', car, location);
  });

  socket.on('sendCar', (car) => {
    io.emit('receiveCar', car);
  });

  socket.on('endRoute', (car) => {
    io.emit('finishRoute', car)
    console.log("terminou a rota")
    io.emit('deleteCar', car)
    console.log("deletou o carro")
  })

  socket.on('disconnect', () => {
    console.log('a user disconnected');
  });
});

server.listen(8080, () => {
  console.log('listening on *:8080');
});