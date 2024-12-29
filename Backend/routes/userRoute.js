import express from "express"
import { loginUser,registerUser } from "../controllers/userController.js"


const userRouter = express.Router()


//we need the data of the user to create the user
userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)

export default userRouter;
