import express from 'express'
import {register} from '../controllers/authControllers.js'

//end point
//http://localhost:5000/api/users/register

const router = express.Router()

router.post("/register",register)

router.post("/search",search)

export default router