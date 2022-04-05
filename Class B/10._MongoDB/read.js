import db from "./createConnection.js"

const allTutorials = await db.tutorials.find().toArray(); //gets the data and inserts it into an array.

console.log(allTutorials);







