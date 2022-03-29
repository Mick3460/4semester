import  express  from "express";
const app = express();

app.use(express.json()); //body parser, can now read JSON

/*
//allow CORS with npm i cors
import cors from "cors";
app.use(cors());
*/

//Hvad er path
import path from "path";
app.use(express.static(path.resolve("../client/public"))) //den her server svelte mappen, så den kan findes på samme port som Node

import playersRouter from "./playersRouter/playersRouter.js";
app.use(playersRouter);


//PORT=6000 node app.js    would launch the server on that given port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server up and running on PORT: ", PORT)
})