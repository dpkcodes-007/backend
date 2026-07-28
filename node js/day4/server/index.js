import express, { json } from "express"
import dotenv from 'dotenv'
import cors from 'cors'


dotenv.config()

const app = express()

app.use(cors())

app.use(json())

const PORTenv = process.env.PORT || 3000

app.listen(PORTenv,()=>{
    console.log(`sucessfully connected on http://localhost:${PORTenv}`);
    
})

// import express,{json} from 'express'
// import dotenv from 'dotenv'
// import cors from 'cors'

// dotenv.config()

// const app = express()
// app.use(cors())
// app.use(json())
// const port = process.env.PORT || 3000

// app.listen(port,()=>{
//     console.log(`sucessfully connected on http://localhost:${port}`);
    
// })

// import express,{json} from 'express'
// import dotenv from 'dotenv'
// import cors from 'cors'

// dotenv.config()
// const app = express()
// app.use(cors())
// app.use(json())
// const portno = process.env.PORT || 3000

// app.listen(portno,()=>{
//     console.log(`sucessfully connected on http://localhost:${portno}`);
    
// })




























// import express,{json} from 'express'
// import dotenv from 'dotenv'
// import cors from 'cors'

// dotenv.config()

// const http = express()
// http.use(cors())
// hhtp.use(json())
// const portvalue = process.env.PORT || 3000
// http.listen(portvalue,()=>{
//     console.log(`suceesfully connected to bluetooth via http://localhost:${portvalue}`);
    
// })
