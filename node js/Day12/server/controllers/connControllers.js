import { connmodel } from '../models/connmodel.js'
import bcrypt from 'bcrypt'

export const registerData = async (req, res) => {
    try {
        const { username, useremail, userpassword } = req.body

        console.log(req.body);
        

        if (!username || !useremail|| !userpassword) {
            return res.status(400).json({ msg: 'kindly fill the empty fields' })
        }

        const checkemail = await connmodel.findOne({ useremail })

        if (checkemail) {
            return res.status(409).json({msg:"Entered Email id has been already existed "})
        }

        const checkpass = await bcrypt.hash(userpassword,10)

        const newUser = await connmodel.create({username,useremail,userpassword:checkpass})
        return res.status(201).json({ msg: 'user sucessfully registered', data: newUser })


    } catch (error) {
        console.log('error', error.message)
        return res.status(500).json({ msg: 'failed to regsiter', error: error.message })
    }
}

export const loginData = async(req,res)=>{
    try {
        const { useremail,userpassword } = req.body

        if (!useremail || !userpassword) {
            return res.status(400).json({msg:"Kindly fill the empty fields"})
        }
    
        const emailcheck = await connmodel.findOne({useremail})
        if (!emailcheck) {
            return res.status(409).json({msg:"Entered Email id has not found"})
        }


        const passcheck = await bcrypt.compare(userpassword,emailcheck.userpassword)
        if (!passcheck) {
            return res.status(400).json({msg:"invalid password"})
        }
        
        res.status(200).json({msg:"sucessfully moved to dashboard",users:{id:emailcheck._id,email:emailcheck.useremail}})
    } catch (error) {

        console.log('error', error.message)
        return res.status(500).json({ msg: 'failed to login', error: error.message })
    }
}

