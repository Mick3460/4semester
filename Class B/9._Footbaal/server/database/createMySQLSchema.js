import db from "./createMySQLConnection";

db.query(`
CREATE TABLE IF NOT EXISTS players (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(70)
);
`);

db.end(); //ends the script so it stops "hanging".



