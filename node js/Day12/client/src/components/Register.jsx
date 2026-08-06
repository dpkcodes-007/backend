import React from 'react'

const Register = () => {
  return (
    <>
    <form onSubmit={handlesubmit}>
      <input type="text" placeholder='Enter the Name' onChange={inputchange} value={FormData.username} name='username'/>
      <input type="text" placeholder='Enter the Name' onChange={inputchange} value={FormData.username} name='useremail'/>
      <input type="text" placeholder='Enter the Name' onChange={inputchange} value={FormData.userpassword} name='userpassword'/>
      <input type='submit' value={"REGISTER"}/>
    </form>
    </>
  )
}

export default Register