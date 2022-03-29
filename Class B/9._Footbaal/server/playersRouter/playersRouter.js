import { Router } from "express";
//We deconstruct here because of it optimizses code and help with TREE SHAKING (removing dead code)
import db from '../database/createConnection.js'

const playersRouter = Router();

const players = [];

playersRouter.get("/api/players", async (req,res) => {
    const players = await db.all("SELECT * FROM players;");
    console.log(players);
    res.send({ data: players })
})

playersRouter.post("api/players", async (req,res) => {
    const {name} = req.body;
    const {changes} = await db.run("INSERT INTO players (name) VALUES (?)", [name]) ; //await not needed if we dont need the result
    //, [name] will do the sanitisation of the input (spørg mads lol)
    
    res.send({ rowsAffected: changes })
})

export default playersRouter;