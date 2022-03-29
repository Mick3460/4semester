import db from './createConnection.js';

//console.log(db)

const isInDeleteMode = true;
if(isInDeleteMode) {
    db.exec(`DROP TABLE IF EXISTS players;`)
}



//AUTO_INCREMENT og INT skal laves om til INTEGER (når det er en primary key) og AUTOINCREMENT istedet.
db.exec(`CREATE TABLE IF NOT EXISTS players (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(150)

);`);

// Seeding, implanting dummy data
if (isInDeleteMode){
db.run(`INSERT INTO players (name) VALUES ('Messi') `);
db.run(`INSERT INTO players (name) VALUES ('Ronaldo') `);
}