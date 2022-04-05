import {MongoClient} from "mongodb";

const url = "mongodb://localhost:27017"; //The localhost the Mongo DB server is on.
const dbName = "youtubevideos";

const client = await MongoClient.connect(url);

const db = client.db(dbName); //the databse is the client.db(takes in the name)

//console.log(db);

export default {
    tutorials: db.collection("tutorials") // saves us from using db.getCollection, and now we can just use tutorials.
};







