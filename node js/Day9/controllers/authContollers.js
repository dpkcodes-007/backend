import { authModel } from "../models/authModel.js"
import bcrypt from "bcrypt"

export const registerdata = async(req,res)=>{
    try {
        const {name,email,password} = req.body
        if (!name || !email || !password) {
            res.status(200).json({msg:"The field is empty pls fill"})
            return
        }

        const checkemail =await authModel.findOne({email})
        console.log(checkemail);
        
        if (checkemail) {
            res.status(401).json({msg:"email is already exist"})
        }

        const changepass =  await bcrypt.hash(password,10)
        console.log(changepass);

        const register = await authModel.create({name,email,password:changepass})
        res.status(401).json({msg:"Sucessfully Data Entered"})
        

    } catch (error) {
        console.log("error",error);
        
    }
}

export const logindata = async(req,res)=>{
    try {
        const {name,email,password} = req.body
        if (!name || !email || !password) {
            res.status(200).json({msg:"The field is empty pls fill"})
            return
        }

        const checkemail =await authModel.findOne({email})
        console.log(checkemail);
        
        if (checkemail) {
            res.status(401).json({msg:"email is already exist"})
        }

        const checkpass =  await bcrypt.compare(password,checkemail.password)
        
        
        if (!checkpass) {
         res.status(200).json({msg:""})
         return
        }
        

    } catch (error) {
        console.log("error",error);
        
    }
}


