import express,{json}  from "express"
import cors from "cors"
import dotenv from "dotenv"
import userRoute from "./routes/authRoutes.js"
import {connectdb} from "./config/db.js"


dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
connectdb()
app.use("/api/user",userRoute)

const PORT  = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Sucessfully connected localhost ${PORT}`);
    
})

//http://localhost:5000/api/user