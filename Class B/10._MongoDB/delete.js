import db from "./createConnection.js";

db.tutorials.deleteOne({ channelName: "Computerphile"});

