// import express from 'express'
// import dotenv from 'dotenv'
// import cors from 'cors'
// import newdb from './config/db.js'


// dotenv.config()
// newdb();

// const app = express()
// const PORT = process.env.PORT || 3000
// app.use(cors())
// app.use(express.json())



// app.listen(PORT,()=>{
//     console.log(`successfully connected on http:localhost:${PORT}`);
    
// })


import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectdb from './config/db.js'


dotenv.config()
connectdb()

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`sucessfully connected on http:localhost:${PORT}`);
    
})
