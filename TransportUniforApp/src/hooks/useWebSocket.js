import { useEffect } from 'react';
import io from 'socket.io-client';

const URL = 'http://localhost:8080';

const useWebSocket = () => {
  const socket = io(URL, {
    autoConnect: false
  });

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to WebSocket');
    });
  }, [socket]);

  const connect = (car) => {
    socket.connect()
    socket.emit("sendCar", car)
  }
  
  const disconnect = () => {
    socket.disconnect();
  };

  const sendLocation = (location, car) => {
    socket.emit("sendLocation", {location, car});
  };

  const endRoute = (car) => {
    socket.emit("endRoute", car)
  }

  return { connect, disconnect, sendLocation, endRoute };
};

export default useWebSocket;
