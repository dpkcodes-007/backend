import express,{json} from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectdb } from './config/mdb.js'
import userRoute from './routes/connRoute.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

connectdb()

app.use("/api/userdetails",userRoute)

const port = process.env.PORT 

app.listen(port,()=>{
    console.log(`Sucessfully connected on http://localhost:${port}`);
    
})

//http://localhost:5000/api/userdetails