import express,{json} from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import authRoutes from './routes/authRoutes.js'

dotenv.config()

const app = express()
      app.use(cors())
      app.use(express.json())
    
      app.use("/api/users",authRoutes)
const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`sucessfully running on http://localhost:${PORT}`);
    
})

//api for register = http://localhost:5000/api/users