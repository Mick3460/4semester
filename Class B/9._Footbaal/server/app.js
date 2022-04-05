import  express  from "express";
const app = express();

app.use(express.json()); //body parser, can now read JSON

/*allow CORS with npm i cors and app.use
import cors from "cors";
app.use(cors());
*/

//part of Node.js core, so no need for an install.
import path from "path";
app.use(express.static(path.resolve("../client/public"))) 
/*den her server svelte mappen, så den kan findes på samme port som Node
You can get the absolute path calculation of a relative path using path.resolve()
*/

import playersRouter from "./playersRouter/playersRouter.js";
app.use(playersRouter);


//PORT=6000 node app.js    would launch the server on that given port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server up and running on PORT: ", PORT)
})