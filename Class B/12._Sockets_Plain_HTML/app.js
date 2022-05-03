import express from "express";
const app = express();

app.use(express.static("public"))
//The client can now request things from this folder ^^^

import http from "https";
const server = http.createServer(app); //(key, cert)
//server.listen(3000) //these three lines are enough to make a server
//server takes app, so app routes should work

//npm install socket.io
//https://www.npmjs.com/package/socket.io
import {Server} from "socket.io"
const io = new Server(server); //socket server, that takes the http server

io.on("connection", (socket) => { //connection EVENT, connection is the default event.
    //console.log("A client connected", socket.id);

    socket.on("a client changed the color", ({ data }) => {
        console.log(data);
        socket.emit("please change the color", { data })
    })
})


//serve colors html
import path from "path"
app.get("/", (req,res) => {
    res.sendFile(path.resolve("./public/colors.html")) //DIRNAME doesnt work because of type:module, and is node specific
})



server.listen(3000) 
