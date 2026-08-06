import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
},{timestamps:true})

export const authModel = mongoose.model("userDetails",userschema) 