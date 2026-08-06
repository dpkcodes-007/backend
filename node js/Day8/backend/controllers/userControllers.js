import userModel from "../models/userModel.js"

export const insertdata = async(req,res)=>{
try {
    const {name,email,age} = req.body
    const insert = await userModel.create({name,email,age}) 
    res.status(201).json({msg: "DATA INSERTED",insert})
} catch (error) {
    console.log(error);
    res.status(500).json({msg:"data not inserted",ERROR:error.message})
    
}
}

export const finddata = async(req,res)=>{
    try {
        const get = await userModel.find()
        res.status(200).json(get)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"data not found",ERROR:error.message})
    }
}


export const singledata = async(req,res)=>{
    try {
        const single = await userModel.findById(req.params.id)
        res.status(200).json(single)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"data not found",ERROR:error.message})
    }
}


export const deletedata = async(req,res)=>{
    try {
        const deletechikoo = await userModel.findByIdAndDelete(req.params.id)
        res.status(200).json(deletechikoo)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"data not found",ERROR:error.message})
    }
}

export const updatadata = async(req,res)=>{
    try {
        const {name,email,age} = req.body
        const updatechikoo = await userModel.findByIdAndUpdate(req.params.id,{name,email,age},{new : true})
        res.status(201).json(updatechikoo)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"data not found",ERROR:error.message})
    }
}



