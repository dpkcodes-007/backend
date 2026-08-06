import { connmodel } from '../models/connmodel.js'

export const insertData = async (req, res) => {
    try {
        const { username, useremail, userage } = req.body

        console.log(req.body);
        

        if (!username || !useremail|| !userage) {
            return res.status(409).json({ msg: 'kindly fill the empty fields' })
        }

        const checkemail = await connmodel.findOne({ useremail })

        if (checkemail) {
            return res.status(401).json({ msg: 'your email already exists' })
        }

        const newUser = await connmodel.create({username,useremail,userage})
        return res.status(200).json({ msg: 'data entered successfully', data: newUser })


    } catch (error) {
        console.log('error', error.message)
        return res.status(500).json({ msg: 'failed to insert data', error: error.message })
    }
}


export const getAllData = async(__,res)=>{
    try {
        const get = await connmodel.find()
        return res.status(200).json({msg:'all data',alldata : get})
    } catch (error) {
        console.log('error',error.message);
        return res.status(500).json({ msg: 'failed to insert data', error: error.message })
        
    }
}