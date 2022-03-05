const router = require('express').Router();
const fs = require('fs'); //file system import

//Structural data
const header = fs.readFileSync("./public/components/header/header.html").toString();
const nav = fs.readFileSync("./public/components/nav/nav.html").toString(); // nav is now a bitestream (maybe just a buffer? what is a buffer?), so we input .tostring
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

//Routing page construction
const routerpag = fs.readFileSync("./public/routers/routerexample/routerexample.html").toString();
const routerPage = header.replace("%%CSSPATH","./routers/routerExample/routerExample.css")+
                        nav.replace("%%TITLE REPLACE","Just a routing test")+routerpag+footer;

router.get("/routertest", (req,res) => {
    res.send(routerPage)
})
/* plain html file send
router.get("/routertest",(req,res) => {

    res.sendFile(__dirname + "/routerExample.html")
})
*/
module.exports = {
    //router: router
    router
}