//create a router here and combine with the app
import { Router } from "express";
const userRouter = Router()

userRouter.get("/api/fetchUser", (req,res) => {
    res.send({ data: req.session.username });
});

userRouter.get("api/logout", (req,res) => {
    req.session.destroy( );
    res.redirect("/")
});

userRouter.post("/api/registerUser", (req,res) => {
    console.log(req.body);
    req.session.username = req.body.username;
    res.redirect("/")
})

export default userRouter;