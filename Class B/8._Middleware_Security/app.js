// const express = require('express');
// You cannot have REQUIRE if you are using type: module in your json.package
// We are using type:module to make us able to EXPORT things from javascript files.
import express from 'express';
const app = express();

//https://helmetjs.github.io/   some security to think about.   (--save dev dependencies maybe)
import helmet from "helmet";
app.use(helmet());   //executes on every request.


app.use(express.static("public")); //this is actually middleware lol

// ######################
//  rate limiter
// ######################

//You could have this import within a function to save memory on load 
import rateLimit from 'express-rate-limit'

const baseLimiter = rateLimit({ // Create an instance of IP rate-limiting middleware for Express.
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})
const authLimiter = rateLimit({ // Create an instance of IP rate-limiting middleware for Express.
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

app.use(baseLimiter); //the base limiter should be ABOVE our auth limiter.
//REMEMBER TO ALWAYS HAVE THE BASE LIMITER ON THE TOP.
app.use("/auth/*", authLimiter);

app.get("/auth/*", (req,res,next) => {
    res.send( { message: "You are trying to login"})
})

// #################
//  SESSION ON BACKEND SERVERS
// ################# https://www.npmjs.com/package/express-session for explanation about resave and
import session from 'express-session';
app.use(session({
    secret: 'keyboard cat',
    resave: false, //Forces the session to be saved back to the session store, even if the session was never modified during the request. 
    saveUninitialized: true, //Forces a session that is "uninitialized" to be saved to the store. A session is uninitialized when it is new but not modified. 
    cookie: { secure: false } //secure true only works if the server is https. This aint it chief.
  }))

import planetsRouter from './routers/planets.js'; //Here planetsRouter is the name we wish to give the const from the default export
app.use(planetsRouter); //without default export, we wouldnt needed to make a const name = exported const()


// #####################
// https://www.npmjs.com/package/bcrypt, uses blowfish cipher.. google it
// #####################




//request logger middleware: npm morgan.. Ikke pensum tror jeg, but now you know.
//You shouldn't ipLog in a standard app... A honeyput might use one, to catch ip's that should be blacklisted.
function ipLogger(req,res,next) {
    console.log(req.ip)
    next();
}

app.use("/auth/*",ipLogger); // now every single request will use the iplogger (but only on paths that start with auth/)


app.get("/frontgate", ipLogger, (req,res) => {
    res.send({});
})


/* Here we are using middleware as a sort of security.
*/
let isHatchOpen = true;
function allowEscape(req,res,next) {
    isHatchOpen = !isHatchOpen;
    if (isHatchOpen){
        console.log("Go on");
        req.escapee = "Jimmy";
        next();
    } else {
        res.send({message: "Hatch aint open lol"})}
    }
    /*  We are calling the middleware function before sending the response.
    All middleware take the same parameters, req res and next.
    */
   app.get("/escapehatch", allowEscape, (req,res) => { //Calling "middleware" before calling the callback
    res.send( {message: `Congrats ${req.escapee}, you managed to escape`} )
})

app.get("/room", (req,res, next) => { //We call next to look for the next matching endpoint
    console.log("You are in room 1")
    next();
})
app.get("/room", (req,res,next) => {
    res.send( {data: "You are in room 2"})
    next();
})

//wildcard route
/*The order of the routes are important. 
If the wildcard is in the top, our next() functions will hit that before any other routes,
    as it is the first valid route to hit. (I think lol)
    */
   app.get("*", (req,res) => {
       res.send("<h1>Not found 404 lol</h1>")
    })
    
    
    const PORT = process.env.PORT || 9000
    app.listen(PORT, () => {
        console.log("Running on PORT:",PORT);
    });
    
                            /*   import path from "path";
                                
                            app.get("/clothes", (req,res) => {
                                res.sendFile(path.resolve("public/clothes.html"));   // __dirname VIRKER IKKE MED type:module
                            })
                            */