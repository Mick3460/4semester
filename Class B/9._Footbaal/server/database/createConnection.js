import sqlite3 from 'sqlite3' // it is a simple single file relational database
import { open } from 'sqlite'


const db = await open({
    filename: 'football.db',
    driver: sqlite3.Database
});

export default db