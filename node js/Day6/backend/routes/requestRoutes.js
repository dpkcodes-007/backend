import express from 'express'
import { getdatas, headersinfo, paramdata, queryparam, requestbody } from '../controllers/requestControllers.js'

//http://localhost:5000/register/api 

const reqRoute = express.Router()


//http://localhost:5000/register/api/reqbody
reqRoute.post("/reqbody",requestbody)

//http://localhost:5000/register/api/params/007
reqRoute.get("/params/:id",paramdata)

//http://localhost:5000/register/api/query
reqRoute.get("/query",queryparam)

//http://localhost:5000/register/api/head
reqRoute.post("/head",headersinfo)

//http://localhost:5000/register/api/getdata
reqRoute.get("/getdata",getdatas)


export default reqRoute 