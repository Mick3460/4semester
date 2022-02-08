// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

const letters = ["a","b","c"];
// show b in the console 
console.log("Exercise 1: ",letters[1]);
console.log("");

// --------------------------------------
// Exercise 2 - Array Positioning

const friends = [];

// What a lonely array. Add at least 3 friend objects to it.  
const jimmy = {age: "atleast 30"}
const mads = {zoomer: true}
const michael = {superiorTutor: true}
friends.push(jimmy,mads,michael)
console.log("Exercise 2: ",friends);

// --------------------------------------
// Exercise 3 - Get the index of first occurrence of that value. 

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 

console.log("Exercise 3, index of 1729: ", significantMathNumbers.indexOf(1729));
console.log("");
// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket

diet.splice(2,0,"hamburger","soda","pizza")
console.log("Exercise 4: ",diet);
console.log("");

// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 

diet.pop()
console.log("Exercise 5: ",diet);
console.log("");

// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  
const newArray = diet.map(x => x)
console.log("Exercise 6: ",newArray);
console.log("");

// --------------------------------------
// Exercise 7 - For loop

const lettersExpanded = ["a","b","c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b

console.log("Exercise 7:");
for (i=1; i<lettersExpanded.length; i+=2){ //eller brug modulus istedet for +=2
    console.log(lettersExpanded[i]);
}
console.log("Exercise 7 over");

// --------------------------------------
// Exercise 8 - For loop and if statement

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers
const numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumbers = [];

//Reverse for loop fordi jeg læste opgaven forkert og troede jeg skulle fjerne de loggede numre 
for (i = numbers.length-1 ; i>=0; i--){
    
    if (numbers[i] > 6 || numbers[i] < 0){ 
        console.log(numbers[i]);
    } else {
        discardedNumbers.push(numbers[i])
        numbers.splice(i,1)
    }
}


console.log("Exercise 8:");
console.log("Numbers: ", numbers);
console.log("Discarded: ",discardedNumbers);

/* Første forsøg.. Det er den forkerte måde at gøre det på.
En fyr på nettet hjalp med forklaringen her:  https://gist.github.com/chad3814/2924672

numbers.forEach((number,index) => {
    console.log(number, " lalala ", index);
    if (number > 6 || number < 0){ 
        console.log(number);
    } else {
        discardedNumbers.push(number)
        numbers.splice(index,1)
    }
})*/

// --------------------------------------


