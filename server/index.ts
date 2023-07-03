import express from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';
// import next from 'next';


const app = express();
const server = http.createServer(app);

// const dev = process.env.NODE_ENV !== 'production';
// const nextApp = next({ dev });
// const nextHandler = nextApp.getRequestHandler();

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

// app.get("*", (req, res) => {
//     return nextHandler(req, res);
// });

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});



