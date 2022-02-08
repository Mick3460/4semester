 //import Express
const express = require('express')
const app = express();

// const app = require("express")()   I EN ONELINER SMIL

app.use(express.json()); // allow to parse JSON


// takes an endpoint and a callback function
app.get("/", (req, res) => {
    res.send({message: "Hello world. Express converts this Javascript object to JSON" });


});

//todo implement a route called welcome that welcomes the client
app.get("/welcome",(req,res) => {
    res.send({message: "Hejsa"});
});

app.post("/mirror",(req,res) => {
    res.send(req.body);
})





app.listen(8080);

