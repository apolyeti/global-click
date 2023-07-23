import { Server } from "socket.io";

const SocketHandler = (_req, res) => {
    if (res.socket.server.io) {
        console.log("already has io instance");
        return res.end();
    } else {
        console.log('First use, starting socket.io');
        const io =  new Server(res.socket.server);
        res.socket.server.io = io;

        let globalCount = 0;
        io.on("connection", (socket) => {
            console.log("new user connected");
            socket.emit('count', globalCount);

            socket.on('increment', () => {
                globalCount++;
                io.emit('count', globalCount);
            });

            socket.on('disconnect', () => {
                console.log("user disconnected");
            });
        });
        res.socket.server.io = io;
    }


    res.end();
};

export default SocketHandler;