const express = require('express'); //require = import 
const app = express();

//public is being defined as our "STATIC" folder. The client now has access to these files.
//it's a security feature to make sure the client can't see anything but the specified folder
//without this feature, the app.js and database documents could potentially be open for the client.
app.use(express.static("public"))

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
 //__ delen i dirname er en TOTAL GLOBAL variable.
app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html"); 
}); // ^ ABSOLUTE PATH IS NEEDED, AND THIS IS COMPATIBLE ON ALL SYSTEMS
    // dirname is the place where the project is being run from. ( tror jeg )

app.get("/welcome", (req, res) => {
    res.send(`
    <h1> WELCOME ${req.params.name}</h1>
     `);
});

//The __dirname in a node script returns the path of the folder where the current JavaScript file resides.
console.log(__dirname);

app.get("/bored", (req,res) => {
    res.sendFile(__dirname + "/public/activities.html"); 

});


app.listen(9000, () => {
    console.log("The server is running", 9000);
});