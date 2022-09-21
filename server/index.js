//code for server goes here
const express = require("express");
const app = express()
const http = require("http");
const cors = require("cors"); 
const { Server } =  require("socket.io");
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        method: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log(socket.id);
})


//used to test if server is running just type npm start
server.listen(3001, () => {
    console.log("SERVER RUNNING")
})