 
 //import Express
const express = require('express')
const app = express();

app.use(express.json()); // allow to parse bodies as JSON.. 
    //IF THE REQ.BODY IS UNDEFINED, IT'S BECAUSE YOU CANT READ JSON
    //THIS IS BECAUSE OF THE OSI MODEL (NET WORKING, LÆS OM BIT STREAMS OG OMSKRIVNINGEN)
    //VI KAN OGSÅ FORTÆLLE KODEN AT DET SKAL VÆRE JSON MED HEADERS, CONTENT-TYPE: JSON (eller noget)

//
// EXERCISE / HOMEWORK 
//
const beerArray = [{id: 1, name: "Tuborg"},{id:2, name: "Carlsberg"}]
let highestId = 0

/*
const beers = [
    { id: 1, type: "Pilsner"},
    { id: 1, brand: "Different properties is fine", alcoholProcentage: 4.6}
]
*/

//Find highest Id
beerArray.forEach(beer => {
    if (beer.id >= highestId){
        highestId = (beer.id)+1 
    }
});

//assigns ID and updates highest ID number
function assignId () {
    const theNewId = highestId
    highestId +=1   // kunne bruge ++Number for at incremente FØR den bruges. det er irrelevant her, men bare noter.
    return theNewId
}

//GET
app.get("/beers",(req,res) => {
    res.send(beerArray);
})

//GET by id
app.get("/beers/:beerId",(req,res) => {
    const targetId = parseFloat(req.params.beerId)
    const foundBeer = beerArray[beerArray.findIndex( beer => beer.id === targetId)]
    foundBeer ? res.send({ data: foundBeer }) : res.status(204).send({});
})          //foundBeer would be FALSE if it was undefined.

//POST and assign id
app.post("/beers",(req,res) => {
    const newBeer = {id: assignId(), name: req.body.name}
   
    beerArray.push(newBeer)
    res.send(newBeer);
})

//PUT 
app.put("/beers/:beerId",(req,res) => {
    //beers.findIndex(predicate) takes in a predicate
    //beers.indexOf({}) takes in a object - NOT THE RIGHT CHOICE
    const foundBeerIndex = beerArray.findIndex(beer => beer.id === Number(req.params.id));
    if (foundBeerIndex !== -1){
        const foundBeer = beerArray[foundBeerIndex];
        const beerToUpdate = req.body;
        const updatedBeer = {...beerToUpdate, id: foundBeer.id}
        res.send({data: updatedBeer})
    } else {
        res.status(404).send({}) // ALWAYS PUT FAIL-SAFE-DEFAULTS IN ELSE-STATEMENTS
    }
})

//PATCH
app.patch("/beers/:beerId",(req,res) => {
    
    const foundBeerIndex = beerArray.findIndex(beer => beer.id === Number(req.params.id));

    if (foundBeerIndex !== -1){
        const foundBeer = beerArray[foundBeerIndex];
        const beerToUpdate = req.body;
        const updatedBeer = {...foundBeer, ...beerToUpdate, id: foundBeer.id};
        res.send({ data: updatedBeer});
    } else {
        res.status(404).send({}) // ALWAYS PUT FAIL-SAFE-DEFAULTS IN ELSE-STATEMENTS
    }
})

//DELETE
app.delete("/beers/:beerId",(req,res) => {
    const targetId = Number(req.params.beerId)
    const indexNumber = beerArray.findIndex( beer => beer.id === targetId)
    beerArray.splice(indexNumber,1)
    //er det her rigtigt? -v- er det ikke === 1 ? 
    indexNumber === -1 ? res.status(204).send({}) : res.status(404).send({}) 
})



app.listen(8080,(error) => {
    console.log("Server is running on port", 8080);
});

/*
    How can I send data with a GET request?
    Path variable.. URL: beer/1
    query string.. URL: ?key=value&key2=value2

    url: kangaroofacts?cankick=true    kunne være en url.


    //path variable
app.get("/clientgreeting/:name", (req,res) => {
    res.send({greeting : `Hello there, ${req.params.name}... `})
})
*/