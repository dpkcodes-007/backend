import React, { useState } from 'react'

const App = () => {
  const [formdata,setFormdata]= useState({userName:"",userEmail:"",userMobile:""})
  const [viewdata,setViewdata] = useState([])
   
  const handlechange = (e)=>{
     setFormdata({...formdata,[e.target.name]:e.target.value})
  }

  const handleclick = (e) =>{
    e.preventDefault()
    setViewdata((prev)=>[...prev,formdata])
    setFormdata({userName:"",userEmail:"",userMobile:""})

  }


  
  return (
    <>
    <div>
    <h1>todo list </h1>
    <form >
      <input type="text"  placeholder='enter the name ' name='userName' onChange={handlechange} />
       <input type="text"  placeholder='enter the email ' name='userEmail' onChange={handlechange}/>
        <input type="text"  placeholder='enter the mobile ' name='userMobile' onChange={handlechange}/>
        <button onClick={handleclick}>Add</button>
    </form>

    
      <table>
        <thead>
          <tr>
            <th>s.no</th>
            <th>name</th>
            <th>email</th>
            <th>number</th>
          </tr>
        </thead>
        <tbody>
    
        {viewdata.map((e,i)=>(
        <tr key={i+1}>
          <td>{e.userName}</td>
          <td>{e.userEmail}</td>
          <td>{e.userMobile}</td>
        </tr>
      ))}
          
        </tbody>
      </table>

    </div>
    </>
  )
}

export default App