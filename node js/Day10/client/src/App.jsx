import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
   
  const [formdata,setFormData] = useState({username:"",useremail:"",userage:""})

  const [showing,setShowing] = useState([])

  const getdata = async()=>{
    try {
      const get = await axios.get("http://localhost:5000/api/userdetails/alldata",formdata)
      console.log(get);
      console.log(getdata);
      
      


    } catch (error) {
      console.log(error);
      
    }
  }

  // useEffect(()=>{
  //  getdata()
  // },[])



  
  const inputchange = (e)=>{
     setFormData({...formdata,[e.target.name]:e.target.value})
  }

  const insertclick = async(e)=>{
    
    e.preventDefault()
    
    try {
      const res = await axios.post("http://localhost:5000/api/userdetails/insert",formdata)
      console.log('res',res);

      alert('data inserted')
      setFormData({username:"",useremail:"",userage:""})
      // getdata()
      
    } catch (error) {
      console.log(error);
      
    }

  }




  return (
    <>
    <form>
      <input type="text" value={formdata.username} name='username' onChange={inputchange} />
      <input type="text" value={formdata.useremail} name='useremail' onChange={inputchange} />
      <input type="number" value={formdata.userage} name='userage' onChange={inputchange} />
      <button onClick={insertclick}>ADD DATA</button>
    </form>

    {formdata.map((e)=>(
      <div key={e._id}>
           <h1>{e.username}</h1>
           <h1>{e.useremail}</h1>
           <h1>{e.userage}</h1>
      </div>
    ))}


  

    </>
  )
}

export default App