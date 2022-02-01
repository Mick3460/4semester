// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const alienMessage = {
	message: "Hello, earthling! I bring peace."
};

// Log the message 
console.log("Exercise 1: ", alienMessage.message);
console.log("");
// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 
const myObject = {
	name: "Michael",
	age: 30,
	secret: "Please dont tell people im 30"
}
console.log("Exercise 2: ",myObject);
console.log("");
// --------------------------------------
// Exercise 3 - Add a property 

const stackOverflow = {};
stackOverflow.isAllowed = true
console.log("Exercise 3: ", stackOverflow);
console.log("");
// make a rule called isAllowed and let the value be true

// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = {
	description: "The best song in the world."
}

// remove the property "description" and add a property called "about" that should say "Just a tribute." 
delete thisSong.description
thisSong.about = "Just a tribute."
thisSong.beYouAngels = false
thisSong.weAreButMen = true

console.log("Exercise 4: ", thisSong);
// --------------------------------------


