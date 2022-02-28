const express = require('express');
const app = express();

app.use(express.json());

const number = 12345;

/*
app.get("/", (req, res) => {
    res.send(`
    <h1> WELCOME ${number}</h1>
    <h2> LOOOL </h2>
    
    `);
});
*/

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/index.html"); 

});

app.listen(9000, () => {
console.log("Server is running on PORT: ", 9000);
});