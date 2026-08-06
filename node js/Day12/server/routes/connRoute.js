import express from 'express'
import { registerData,loginData } from '../controllers/connControllers.js'


const routes = express.Router()

//http://localhost:5000/api/user

//http://localhost:5000/api/user/register

routes.post("/register",registerData)
routes.post("/login",loginData)

export default routes