 
 //import Express
const express = require('express')
const app = express();

app.use(express.json()); // allow to parse JSON

//
// EXERCISE / HOMEWORK 
//
const beerArray = [{id: 1, name: "Tuborg"},{id:2, name: "Carlsberg"}]
let highestId = 0

//Find highest Id
beerArray.forEach(beer => {
    if (beer.id >= highestId){
        highestId = (beer.id)+1 
    }
});

//assigns ID and updates highest ID number
function assignId () {
    const theNewId = highestId
    highestId +=1
    return theNewId
}

//GET
app.get("/beers",(req,res) => {
    res.send(beerArray);
})
//GET by id
app.get("/beers/:beerId",(req,res) => {
    res.send(beerArray[(req.params.beerId)-1]);
}) // den skal laves bedre
 
//POST and assign id
app.post("/beers",(req,res) => {
    const newBeer = {id: assignId(), name: req.body.name}
   
    beerArray.push(newBeer)
    res.send(newBeer);
})

//PUT 
app.put("/beers/:beerId",(req,res) => {
    const targetId = parseFloat(req.params.beerId)
    const indexNumber = beerArray.findIndex( beer => beer.id === targetId) // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
    //note to self, findIndex(element, index, array), (element,index) or (element) 
    const beerReplace = req.body  
    if (indexNumber !== -1) {
        beerReplace.id = targetId //adjust body.id to URL id, if body is incorrect
        beerArray[indexNumber] = beerReplace
    }

    res.send(beerReplace); 
})

//PATCH
app.patch("/beers/:beerId",(req,res) => {
    const targetId = parseFloat(req.params.beerId)
    beerArray.forEach(beer => {
        if (beer.id === targetId){
            if (beer.name !== req.body.name && req.body.name !== undefined){
                beer.name = req.body.name
            }
            if (beer.age !== req.body.age && req.body.age !== undefined){
                console.log("No age key, but just an example of how to do it with multiple key-value-pairs");
            }
        }
        
    });

    res.send(beerArray);
})

//DELETE
app.delete("/beers/:beerId",(req,res) => {
    const targetId = parseFloat(req.params.beerId)
    const indexNumber = beerArray.findIndex( beer => beer.id === targetId)
    beerArray.splice(indexNumber,1)
    res.send(beerArray); //return array to check
})



app.listen(8080);

