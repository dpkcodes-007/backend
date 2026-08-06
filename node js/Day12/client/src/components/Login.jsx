import React, { useState } from 'react'
import { loginData } from '../apis/Axios.js'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [formdata,setFormData]=useState({useremail:"",userpassword:""})
  
  const nav = useNavigate()
 
  const inputchange = (e)=>{

    setFormData({...formdata,[e.target.name]:e.target.value})
  }

  const handlesubmit = async(e)=>{

    e.preventDefault()

    try {
      const registerform = await loginData(formdata)

      alert(registerform.data.msg)

      setFormData({useremail:"",userpassword:""})

      nav("/dashboard", {state:registerform.data.users})

    } catch (error) {

      alert(error.response?.data?.msg)
    }

  }
  return (
    <>
    <form onSubmit={handlesubmit}>
      <input type="text" placeholder='Enter the email' onChange={inputchange} value={formdata.useremail} name='useremail'/>
      <input type="text" placeholder='Enter the pass' onChange={inputchange} value={formdata.userpassword} name='userpassword'/>
      <input type='submit' value={"LOGIN"}/>
    </form>
    </>
  )
}

export default Login