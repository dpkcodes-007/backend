import React, { useState } from 'react'

const Register = () => {
    const [regdata,setRegData] = useState({userName:"",userEmail:"",userPass:""})
    const [showdata,setShowData] = useState([])

    const handlechange = (e)=>{
       setRegData({...regdata,[e.target.name]:e.target.value})
    }

    const handleclick = (e)=>{
      e.preventDefault()

      const obj = JSON.parse(localStorage.getItem('mydata')) || []
      setShowData()


    }
  return (
    <>
    <div>
        <h1>REGISTER</h1>
    </div>
    <div>
        <form onSubmit={handleclick}>
            <input type="text" placeholder='Enter the Name' name='userName' onChange={handlechange} value={regdata.userName}/>
            <input type="email" placeholder='Enter the Name'  name='userEmail'onChange={handlechange} value={regdata.userEmail}/>
            <input type="password" placeholder='Enter the Name' name='userPass' onChange={handlechange}value={regdata.userPass}/>
            <input type="submit" value="Register"/>
        </form>
    </div>
    </>
  )
}

export default Register