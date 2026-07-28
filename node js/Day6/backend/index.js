import express, { json } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import reqRoute from './routes/requestRoutes.js'


dotenv.config()


const app = express()
app.use(cors())
app.use(express.json())


app.use("/register/api",reqRoute)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`sucessfully connected on http://localhost:${PORT}`);
    
}) 
//http://localhost:5000/register/api