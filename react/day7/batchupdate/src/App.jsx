import React from 'react'
import { useState } from 'react'

const App = () => {
  
  const [userName,setUserName] = useState("")
  const [userSub,setUserSub] = useState("")

  const handlechange = (e)=>{
     setUserName(e.target.value)
  }

  const hanlesubmit 


  return (
    <>
    
    <div>
      <form onSubmit={hanlesubmit}>
        <h1>{userName}</h1>
        <label htmlFor="name">Enter the name</label>
        <input type="text" id='name' onChange={handlechange}/>
         <input type="submit" id='name'/>
      </form>
    </div>
    
    </>
  )
}

export default App