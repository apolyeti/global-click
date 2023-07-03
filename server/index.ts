import express from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);
let globalNumber: number = 0;



io.on('connection', (socket: Socket) => {
    socket.emit('count', globalNumber);
    socket.on('increment', () => {
        globalNumber++;
        io.emit('count', globalNumber);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});


const PORT = 4000;
server.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});



