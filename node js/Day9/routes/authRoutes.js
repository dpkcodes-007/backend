import express from "express"
import { registerdata,logindata } from "../controllers/authContollers.js"

//http://localhost:5000/api/user

const userRoute = express.Router()


//http://localhost:5000/api/user/register
userRoute.post("/register",registerdata)

//http://localhost:5000/api/user/login
userRoute.post("/login",logindata)

export default userRoute