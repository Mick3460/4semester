const express = require('express');
const app = express();

 
// no need for app.use(express.json()) because we aren't going to have json/data
app.use(express.static("public"));   //the public folder is open/(sent?) to the client.

//Structural data
const fs = require('fs'); //file system import
const header = fs.readFileSync("./public/components/header/header.html").toString();
const nav = fs.readFileSync("./public/components/nav/nav.html").toString(); // nav is now a bitestream (maybe just a buffer? what is a buffer?), so we input .tostring
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();




//Frontpage
const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
const frontpagePage = header.replace("%%CSSPATH","./components/nav/global.css")+
                        nav.replace("%%TITLE REPLACE","Title has been replaced")+frontpage+footer;

app.get("/", (req,res) => {
    res.send(frontpagePage)
})

//INTRO NOTES
const introNotes = fs.readFileSync("./public/pages/introNotes/intronotes.html").toString();
const introNotesPage = header.replace("%%CSSPATH","./pages/introNotes/intronotes.css") + 
                        nav.replace("%%TITLE REPLACE","Intro notes page")+introNotes+footer;

app.get("/intronotes", (req,res) => {
    res.send(introNotesPage)
})

//FIRST EXPRESS SERVER
const expressNotes = fs.readFileSync("./public/pages/firstExpressServer/firstExpressServer.html").toString();
const expressNotesPage = header.replace("%%CSSPATH","./pages/firstExpressServer/firstExpressServer.css")   +
                            nav.replace("%%TITLE REPLACE","First Express Server") + expressNotes + footer;

app.get("/firstexpressserver", (req,res) => {
    res.send(expressNotesPage)
})

//WWExpress and/or HTML express
const wwExpress = fs.readFileSync("./public/pages/wwExpress/wwExpress.html").toString();
const wwExpressPage = header.replace("%%CSSPATH","./pages/wwExpress/wwExpress.css")   +
                            nav.replace("%%TITLE REPLACE","World wide Express") + wwExpress + footer;

app.get("/wwexpress", (req,res) => {
    res.send(wwExpressPage)
})

//Server-side rendering notes
const ssrNotes = fs.readFileSync("./public/pages/serverSideRendering/serverSideRendering.html").toString();
const ssrNotesPage = header.replace("%%CSSPATH","./pages/serverSideRendering/serverSideRendering.css")   +
                            nav.replace("%%TITLE REPLACE","Server side rendering") + ssrNotes + footer;

app.get("/ssr", (req,res) => {
    res.send(ssrNotesPage)
})

//Express example
const expressExample = fs.readFileSync("./public/pages/expressBackendExample/expressBackendExample.html").toString();  
const expressExamplePage = header.replace("%%CSSPATH","./pages/expressBackendExample/expressBackendExample.css")   +
                            nav.replace("%%TITLE REPLACE","Express Backend Example") + expressExample + footer;

app.get("/expressbackend", (req,res) => {
    res.send(expressExamplePage)
})

//Git and terminal commands.
const gitCommands = fs.readFileSync("./public/pages/gitcommands/gitcommands.html").toString();   
const gitCommandsPage = header.replace("%%CSSPATH","./pages/gitcommands/gitcommands.css")   +
                            nav.replace("%%TITLE REPLACE","Terminal commands") + gitCommands + footer;

app.get("/terminalcommands",(req,res) =>{
    res.send(gitCommandsPage)
})

//ROUTER Example
//Import the router
const exampleRouter = require('./public/routers/routerExample/routerExample.js')
app.use(exampleRouter.router); // url: /calculatecooldinosaurs
//const {router} = require('./public/routers/routerExample/routerExample.js')




const PORT = process.env.PORT || 9000
app.listen(PORT, () => {
    console.log("Running on PORT:",PORT);
});