import React, { useState } from 'react'
import { registerData } from '../apis/Axios.js'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const [formdata,setFormData]=useState({username:"",useremail:"",userpassword:""})
  
  const nav = useNavigate()
 
  const inputchange = (e)=>{
    setFormData({...formdata,[e.target.name]:e.target.value})
  }

  const handlesubmit = async(e)=>{
    e.preventDefault()

    try {
      const registerform = await registerData(formdata)
      alert(registerform.data.msg)
      setFormData({username:"",useremail:"",userpassword:""})
      nav("/login")

    } catch (error) {
      alert(error.response?.data?.msg)
    }
  }
  return (
    <>
    <form onSubmit={handlesubmit}>
      <input type="text" placeholder='Enter the Name' onChange={inputchange} value={formdata.username} name='username'/>
      <input type="text" placeholder='Enter the Email' onChange={inputchange} value={formdata.useremail} name='useremail'/>
      <input type="text" placeholder='Enter the Pass' onChange={inputchange} value={formdata.userpassword} name='userpassword'/>
      <input type='submit' value={"REGISTER"}/>
    </form>
    </>
  )
}

export default Register