import  authmodel  from '../models/authmodel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const registerData = async (req, res) => {
    try {
        const { username, useremail, userpassword } = req.body

        console.log(req.body);
        

        if (!username || !useremail|| !userpassword) {
            return res.status(400).json({ msg: 'kindly fill the empty fields' })
        }

        const checkemail = await authmodel.findOne({ useremail })

        if (checkemail) {
            return res.status(409).json({msg:"Entered Email id has been already existed "})
        }

        const checkpass = await bcrypt.hash(userpassword,10)

        const newUser = await authmodel.create({username,useremail,userpassword:checkpass})
        return res.status(201).json({ msg: 'user sucessfully registered', data: newUser })


    } catch (error) {
        console.log('error', error.message)
        return res.status(500).json({ msg: 'failed to regsiter', error: error.message })
    }
}

export const loginData = async(req,res)=>{
    try {
    
      const {useremail,userpassword} = req.body

      if (!useremail || !userpassword) {
        return res.status(400).json({msg:"fill the empty fields"})
      }

      const useremailcheck = await authmodel.findOne({useremail})
      
      
      if (!useremailcheck) {
        return res.status(409).json({msg:"email is not found"})
      }

      const passcheck = await bcrypt.compare(userpassword,useremailcheck.userpassword)

      if (!passcheck) {
        return res.status(409).json({msg:"invalid password retry"})
      }

      const accesstoken = jwt.sign({id:useremailcheck._id,Name:useremailcheck.username},process.env.ACCESS_SECRET_TOKEN,{expiresIn : '5m'})
      const refreshtoken = jwt.sign({id:useremailcheck._id,Name:useremailcheck.username},process.env.REFRESH_SECRET_TOKEN,{expiresIn : '7d'})

      useremailcheck.refreshtoken = refreshtoken

      await useremailcheck.save()


      res.status(201).json({msg:"success"},accesstoken,refreshtoken)
     


    } catch (error) {

        console.log('error', error)
        console.log(
            'dweeee'
        );
        
        return res.status(500).json({ msg: 'failed to login', error: error.message })
    }
}

