import db from "./createMySQLConnection.js";

db.query(` INSERT INTO players (name) VALUES ('Malte') `, (err,data) => {
    
    console.log(data);
    db.end()
} );

//const [rows, fields] = await db.query(`SELECT * FROM players;`)   //might not be rgiht..
//await promises for query is only allowed with mysql2 I think... read teams. 5/4/2022.
db.end();