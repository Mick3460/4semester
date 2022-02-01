// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

    console.log("Exercise 1 result: ", (parseFloat(numberOne)+parseFloat(numberTwo)), "Tak for tip Mads");
    console.log("");
// --------------------------------------


// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";
let summ = (parseFloat(anotherNumberOne)+parseFloat(anotherNumberTwo))
console.log("Exercise 2: ", summ.toFixed(2))  
console.log("");
// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

let averageOfThree = (one+two+three)/3
console.log(("Exercise 3: ", (one+two+three)/3).toFixed(5));


// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"
console.log("Exercise 4: ",letters.charAt(2));
console.log("");



// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript
let factReplace = fact.replace("javascript!","Javascript!")
console.log("Exercise 5: ",factReplace);
// --------------------------------------



