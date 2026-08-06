import mongoose from 'mongoose'

const connectdb = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`successfully connected to MDB ${conn.connection.host}`);
        
    } catch (error) {
        console.log("Failed to connect MDB",error.message);
        
    }
}

export default connectdb