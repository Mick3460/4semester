const express = require('express');
const app = express();


app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

 const number = 123
app.get("/", (req, res) => {
    res.send(`
    <h1> WELCOME ${number}</h1>
    <h2> LOOOL </h2>
    
    `);
});

//The __dirname in a node script returns the path of the folder where the current JavaScript file resides.
console.log(__dirname);

app.get("/bored", (req,res) => {
    res.sendFile(__dirname + "/public/activities.html"); 

});


app.listen(9000, () => {
    console.log("The server is running", 8080);
});