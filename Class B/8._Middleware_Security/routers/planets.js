//setup the router here

import { Router } from 'express';
const router = Router();


router.get("/spinplanet", (req,res) => {
    req.session.planetName = "Jupiter"
    const wasSpinning = req.session.isSpinning;
    req.session.isSpinning = true; //this can be used to log and keep track of users across the request session.
    res.send( {message: `Pfdsanet was ${wasSpinning}`})
})

//WHEN USING A SIGN OUT FUNCTION, REMEMBER TO DESTROY THE SESSION  req.session.destroy, kig på express-session.
router.get("/stopplanet", (req,res) => {
    console.log(req.session)
    console.log(req.session.planetName) // show that the req is updated 
    const wasSpinning = req.session.isSpinning;
    req.session.isSpinning = false; //this can be used to log and keep track of users across the request session.
    res.send( {message: `Planet was ${wasSpinning})`})
})



export default router;