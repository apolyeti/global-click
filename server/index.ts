import express from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';
import dotenv from 'dotenv';

dotenv.config();
const PORT = Number(process.env.PORT) || 3000;

const app = express();
const server = http.createServer(app);
const io : Server = new Server(server);
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


server.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});



