import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    name : {type:String,required:true,trim:true},
    email : {type:String,unique:true,lowercase:true},
    age: {type:Number,required:true},
    createdBy : {type:String,default:"FOOTBALL ADMIN"}


},{timestamps:true})

const userModel = mongoose.model("PlayersData",userschema)

export default userModel;

