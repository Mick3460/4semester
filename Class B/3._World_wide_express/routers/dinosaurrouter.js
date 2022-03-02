const { calculateAmountOfCoolDinosaurs } = require('../dinosaurs/dinosaurs');

const router = require('express').Router();
// we're not interested in having more servers running, so we are using a router

router.get("/calculatecooldinosaurs",(req,res) => {

    res.send({data: calculateAmountOfCoolDinosaurs()})
})

router.get("/amountofcooldinosaurs", (req,res) => {
    res.redirect("/calculatecooldinosaurs")
})

router.get("/coolestdinosaur", (req,res) => {
    if (req.query.cool === "yes"){
       return res.send({dinosaur: "Mosasaurus"})
    } 
        res.send({dinosaur: "TRex"})
    
})

module.exports = {
    //router: router
    router
}
