import "dotenv/config"

import express from "express"
const app = express()

app.use(express.urlencoded({ extended: true })) //not json, because the form in UserRegistration is url encoded

import path from "path"
app.use(express.static(path.resolve("../client/public/")))

import session from "express-session"
//app.set('trust proxy', 1) // trust first proxy
const sessionMiddleware = session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
})
app.use(sessionMiddleware)

import userRouter from "./routers/useRegistration.js"
app.use(userRouter)
console.log(process.env.SESSION_SECRET)

//node, require("crypto").randomBytes(64).toString("hex").
import http from "http"
const server = http.createServer(app)

import {Server} from "socket.io"
const io = new Server(server)

const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);
io.use(wrap(sessionMiddleware))

io.on("connection", (socket) => {

    socket.on("colorChanged", (data) => {
        const username = socket.request.session.username //kinda like req.session...
        data.username = username
        io.emit("changeTheColor", { data, username })
    })
})

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log("Server is running on port:", PORT)
})