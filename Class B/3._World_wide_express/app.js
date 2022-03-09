const express = require('express'); //require = import 
const app = express();

//public is being defined as our "STATIC" folder. The client now has access to these files.
//it's a security feature to make sure the client can't see anything but the specified folder
//without this feature, the app.js and database documents could potentially be open for the client.
app.use(express.static("public"))


//importing another js file and calling an exported method.
const dinosaurs = require('./dinosaurs/dinosaurs.js')
console.log(dinosaurs.calculateAmountOfCoolDinosaurs());

//destructuring
const { calculateAmountOfCoolDinosaurs} = require('./dinosaurs/dinosaurs.js');
const { newRandomKey} = require('./dinosaurs/dinosaurs.js');

//imports a file and logs it.. sinds
            //console.log(require("./dinosaurs/dinosaurs.json"))
//It looks for a file when using a filepath.. when using require('express') i can tell it isnt a path, and looks for a node module.
//giving it a path makes it look outside of node modules...

//Import the router
const dinosaurRouter = require('./routers/dinosaurrouter.js')
app.use(dinosaurRouter.router); // url: /calculatecooldinosaurs



app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

 //__ delen i dirname er en TOTAL GLOBAL variable.

 //this is a route  -v-  ... the ENDPOINT is the "/".  (or after the PORT, if one is defined)
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


//////////// FETCH

//DIFFERENT FROM THE BROWSER VERSION
const myfetch = require('node-fetch')
/*
    Install node-fetch , version prior to 3.0.0.. 2.6.7
    create an endpont called /proxy
    fetch from googles homepage

    send the page as a response

    Bonus: use async await
    måske... npm install node-fetch@2
*/

async function getPage () {
    const response = await myfetch('https://www.google.dk/')
    const responseData = await response.text()
    return responseData
}

//husk at gøre get metoden async, da der er et fetch kald derinde.
app.get("/proxy", async (req,res) => {
    //const response = getPage()    
    const response = await myfetch('https://www.google.dk/');
    const homepage = await response.text();
    res.send(homepage)

});

    /* UDEN ASYNC
    myfetch('https://www.google.dk/')
    .then(response => response.text())
    .then(data => res.send(data))
    */











//create fallback port, so npm start works, and we have the possibility to still use npm start SCRIPT
const PORT = process.env.PORT || 9000


app.listen(PORT, () => {
    console.log("The server is running", PORT);
});
