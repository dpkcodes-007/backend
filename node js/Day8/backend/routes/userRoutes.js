import express from 'express'
import { insertdata,finddata,singledata,deletedata,updatadata} from '../controllers/userControllers.js'

const routes = express.Router()
//http://localhost:5000/api/user

//http://localhost:5000/api/user/insertdata
//http://localhost:5000/api/user/finddata
//http://localhost:5000/api/user/singledata
//http://localhost:5000/api/user/deletedata
//http://localhost:5000/api/user/updatedata



routes.post("/insertdata",insertdata)
routes.get("/finddata",finddata)
routes.get("/singledata/:id",singledata)
routes.delete("/deletedata/:id",deletedata)
routes.put("/updatedata/:id",updatadata)


export default routes