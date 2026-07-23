




// const App = ()=>{
//   console.log("components");
  
//   const [user,setUser] = useState('')
//   const [theme,setTheme] = useState(true)

//   const userData = [
//     {userId:"10",userName:"DEEPAK",userCourse:"HTML"},
//     {userId:"7",userName:"GOWTHAM",userCourse:"CSS"},
//     {userId:"11",userName:"KAMESH",userCourse:"REACT"},
//     {userId:"1",userName:"PRANESH",userCourse:"JS"},
//     {userId:"5",userName:"MUGUND",userCourse:"MERN"}
//   ]

//   const light = {
//     background: "white",
//     color : "black"
//     }

//     const dark = {
//     background : "black",
//     color : "white"
//     }


//   const handleChange = (e)=>{
//     setUser(e.target.value)
//     console.log("comp");
    
//   }

//   const handleBTN =()=>{
//     setTheme(!theme)
 
    
//   }
  
   
  
//   const dats = useMemo(()=>{

//   return filterdata(user,userData)

//   },[user])
  
 




//   return(
//     <>

//     <center>
//     <div style={theme?light:dark}>
//       <h2>{theme?"Theme was in light color":"Theme was in black color"}</h2>
//       <button onClick={handleBTN}>Click here</button>
//     </div>
//     </center>
//     <br />

//     {user}

//     <input type="text" placeholder="Search for input"  onChange={handleChange}/>
//     <h1>USERS & COURSE</h1>
//     <div>
//       {dats.map((e)=>(
//         <div key={e.userId}>
//          <h3>{e.userId}</h3>
//          <h2>{e.userName}</h2>
//          <h3>{e.userCourse}</h3>
//          <hr />
         
//         </div>
//       ))}
//     </div>

//     </>
//   )
// }
// export default App 


import { useMemo, useState } from "react"

 const filterdata = (value,data,sort)=>{
   const kamesh=  data.filter((e)=>e.userName.toLowerCase().includes(value.toLowerCase()))
    console.log(sort);
    

  if(sort === "des"){
      kamesh.sort((a,b)=>b.userAmt-a.userAmt)

      return kamesh

    }

   if(sort === "asc"){
    kamesh.sort((a,b)=>a.userAmt-b.userAmt)

    return kamesh
  }

  return kamesh
 }




const App = ()=>{
  const [users,setUsers]=useState("")
  const [sort,setSort]=useState("")

    const userData = [
    {userId:"10",userName:"DEEPAK",userCourse:"HTML",userAmt:2000},
    {userId:"7",userName:"GOWTHAM",userCourse:"CSS",userAmt:1500},
    {userId:"11",userName:"KAMESH",userCourse:"REACT",userAmt:1800},
    {userId:"1",userName:"PRANESH",userCourse:"JS",userAmt:2200},
    {userId:"5",userName:"MUGUND",userCourse:"MERN",userAmt:20000}
  ]

 
    const handleChange = (e)=>{
     setUsers (e.target.value)
     console.log("comp");
    
   }

    const handlesort = (e)=>{
    setSort(e.target.value)
  }

  const dats = useMemo(()=>{
  return filterdata(users,userData,sort)
  },[users,sort])

  




  return(
    <>
    
    <select onChange={handlesort}>
      <option >Select to Sort</option>
      <option value="des">High-Low</option>
      <option value="asc">Low-High</option>
    </select>
         {users}

     <input type="text" placeholder="Search for input"  onChange={handleChange}/>
     <h1>USERS & COURSE</h1>
     <div>
        {dats.map((e)=>(
         <div key={e.userId}>
         <h3>{e.userId}</h3>          
         <h2>{e.userName}</h2>
         <h3>{e.userCourse}</h3>
          <hr />
         
         </div>
       ))}
   </div>
    </>
  )
}
export default App 