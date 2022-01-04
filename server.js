import express from "express";
import { createServer } from 'http';
import cors from 'cors';
import { Server } from 'socket.io';


const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})
app.use(cors());

const PORT = process.env.PORT || 5050;

app.get("/", (req, res) => {
    res.send("Server is up");
});

io.on('connection', socket => {
    socket.emit('me', socket.id); // we receive an id on the client

    socket.on('disconnect', () => {
        socket.broadcast.emit('callended');
    })
    socket.on('calluser', ({ userToCall, signalData, from, name }) => {
        io.to(userToCall).emit('calluser', { signal: signalData, from, name });
    })
    socket.on('answercall', () => {
        io.to(data.to).emit('callaccepted', data.signal);
    })
})

server.listen(PORT, () => console.log(`Server running at ${PORT}`))