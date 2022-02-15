//HER SKRIVER VI URL + "?key=value&key2=value2" osv
//Vi specificerer origin delen med res.query.origin
app.get("/kangaroofacts", (req,res) => {
    res.send(req.query.origin)
})


//path variable
app.get("/clientgreeting/:name", (req,res) => {
    res.send({greeting : `Hello there, ${req.params.name}... `})
})

app.listen(8080,(error) => {
    console.log("Server is running on port", 8080);
});

/*
    How can I send data with a GET request?
    Path variable.. URL: beer/1
    query string.. URL: ?key=value&key2=value2

    url: kangaroofacts?cankick=true    kunne være en url.
*/

/* https://github.com/remy/nodemon
    Find ud af: HOW TO HOST NODEJS WITH HEROKU
    Find ud af ting om Nodemon(terminal commands også), functional programming, senere Server side rendering, 
    Bonus: Research a covered subject in-depth you want to understand
    Bonus: Learn something new and document it.


    Type coersion er vigtig, for clienter skal ikke 
*/