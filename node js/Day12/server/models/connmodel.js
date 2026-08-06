import mongoose from 'mongoose'

const authSchema = new mongoose.Schema({
    username:String,
    useremail:String,
    userpassword:Number
},{timestamps:true})

export const connmodel = mongoose.model("login_regsiter",authSchema)