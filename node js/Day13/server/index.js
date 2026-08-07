import express,{json} from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectdb from './config/mdb.js'
import routes from './routes/authRoute.js'

dotenv.config()

const App = express()
App.use(cors())
App.use(express.json())

connectdb()


App.use("/api/user",routes)

const PORT = process.env.PORT || 3000

App.listen(PORT,()=>{
    console.log(`PORT Successfully connected on http://localhost:${PORT}`);
    
})