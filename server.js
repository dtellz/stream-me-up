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

server.listen(PORT, () => console.log(`Server running at ${PORT}`))