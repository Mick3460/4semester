import db from "./createMySQLConnection.js";

const [rows, fields] = await connection.execute('SELECT * FROM `users`;');
console.log("rows: ", rows, " ..and fields: ",fields)
//const [rows, fields] = await db.query(`SELECT * FROM players;`)
//await promises for query is only allowed with mysql2 I think... read teams. 5/4/2022.
db.end();