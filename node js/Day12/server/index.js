import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import routes from './routes/connRoute.js'
import {connectdb} from './config/mdb.js'

dotenv.config()


const app = express()
const PORT = process.env.PORT || 3000
app.use(cors())
app.use(express.json())
app.use("/api/user",routes)
connectdb();



app.listen(PORT,()=>{
    console.log(`successfully connected on http:localhost:${PORT}`);
    
})

//http://localhost:5000/api/user


