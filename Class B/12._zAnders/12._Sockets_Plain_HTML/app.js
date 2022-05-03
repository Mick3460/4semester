import express from "express";
const app = express();

app.use(express.static("public"));

import http from "http";
const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server(server);

io.on("connection", (socket) => {
    // console.log("A client connected", so cket.id);

    socket.on("a client changed the color", ({ data }) => {
        
        //changes the color ONLY for the sockets
        //socket.emit("please change the color", { data });

        //changes the color for the OTHER sockets.
        //socket.broadcast.emit("please change the color", { data })

        //all of the sockets change.
        io.emit("please change the color", { data })
    });

});


import path from "path";

app.get("/", (req, res) => {
    res.sendFile(path.resolve("./public/colors.html"));
});

server.listen(3000);