const express = require('express');
const app = express();

app.use(express.static("public")); 
//the public folder is sent to the client.

// no need for app.use(express.json()) because we aren't going to have json/data


// create the frontpage amd the themepark pages and serve them with express

const fs = require('fs'); //file system import

const footer = fs.readFileSync("./public/components/footer/footer.html").toString();
const nav = fs.readFileSync("./public/components/nav/nav.html").toString();
// nav is now a bitestream, so we input .tostring
const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
const frontpagePage = nav.replace("%%TITLE REPLACE","Title has been replaced")+frontpage+footer;


app.get("/", (req,res) => {
    res.send(frontpagePage)
})

app.get( "/123", (req,res) => {
    res.sendFile(__dirname+"/public/pages/frontpage/frontpage.html")
})

const themeparkP = fs.readFileSync("./public/pages/themepark/themepark.html").toString();
const themeparkPage = nav.replace("%%TITLE REPLACE", "det her er themepark replacement")  +themeparkP+footer
app.get("/themepark", (req,res) => {
    res.send(themeparkPage)
})






const PORT = 9090;
app.listen(PORT, () => {
    console.log("Running on PORT:",PORT);
});