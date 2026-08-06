// import mongoose from "mongoose";

import mongoose from "mongoose";

// const newdb = async()=>{
//     try {
//         const db = await mongoose.connect(process.env.MONGO_URI)
//         console.log(`connected successfully to db ${db.connection.host}`);
        
//     } catch (error) {
//         console.log(`'MONGO DB FAILED TO CONNECT',error.message`);
        
//     }
// }

// export default newdb


const connectdb = async()=>{
    try {
        const db = await mongoose.connect(process.env.MONGO_URI)
        console.log(`successfully connected to MDB ${db.connection.host}`);
        
    } catch (error) {
        console.log("mongo db  failed to connect",error.message);
        
    }
}
 export default connectdb
