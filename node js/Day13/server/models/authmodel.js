import mongoose from 'mongoose'

const authSchema = new mongoose.Schema({
    username:String,
    useremail:String,
    userpassword:String
},{timestamps:true})

 const connmodel = mongoose.model("login_regsiter",authSchema)

 export default connmodel