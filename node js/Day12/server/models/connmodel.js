import mongoose from 'mongoose'

const authSchema = new mongoose.Schema({
    username:String,
    useremail:String,
    userpassword:String
},{timestamps:true})

export const connmodel = mongoose.model("login_regsiter",authSchema)