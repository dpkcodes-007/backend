import express from 'express'
import { insertData,getAllData } from '../controllers/connControllers.js'

const routes = express.Router()
//http://localhost:5000/api/userdetails


 //http://localhost:5000/api/userdetails/insert
 //http://localhost:5000/api/userdetails/alldata - to get all datas

 routes.post("/insert",insertData)
 routes.get('/alldata',getAllData)


export default routes