const {coolDinosaurs, shittyDinosaurs} = require('./dinosaurs.json')
// ^Destructuring assignment ^^^^


const people = {
    first: "lal",
    second: "laal"
}

//Destructuring, the variables has to have the same name as the objects keys.
//It's good for destructuring big objects.
const { first, third, second} = people;
//console.log( first, third, second);

function amountOfCoolDinosaurs() {
    return coolDinosaurs.length
}

module.exports = {
    calculateAmountOfCoolDinosaurs: amountOfCoolDinosaurs,
    newRandomthing: true
}