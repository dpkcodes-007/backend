import mongoose from "mongoose"

const userschema = new mongoose.Schema({
    username: String,
    useremail: String,
    userage: Number
}, { timestamps: true })

export const connmodel = mongoose.model("userdetails",userschema)