import { useState } from "react"


const App = () => {
const [userdatas,setUserDatas] = useState({userName:"",userEmail:"",userAge : ""})
const [usershow,setUserShow] = useState([])


const handlechange = (e)=>{
  setUserDatas ({...userdatas,[e.target.name]:e.target.value})
}

const handlesubmit = (e)=>{

  e.preventDefault()
 

  const objchange = JSON.parse(localStorage.getItem('users')) || []
  if(userdatas.userName === "",
     userdatas.userAge  === "",
     userdatas.userEmail === ""
  ){
    alert('Fill the empty place')
    return

  }
  if(Number(userdatas.userAge < 18)){
    alert('Enter the valid AGE')
    return
  }
   setUserShow((p)=>[...p,userdatas])
  console.log(usershow);
  objchange.push(userdatas)
  
  localStorage.setItem('users',JSON.stringify(objchange))

  setUserDatas ({
    userName:"",
    userEmail:"",
    userAge : ""


    
   
  })


}

  return (
    <><div>
      <form onSubmit={handlesubmit}>
        <input type="text" placeholder="Enter your Name" onChange={handlechange} name="userName" value={userdatas.userName}/>
        <input type="email" placeholder="Enter your Email" onChange={handlechange} name="userEmail" value={userdatas.userEmail}  />
        <input type="number" placeholder="Enter your Age" onChange={handlechange} name="userAge" value={userdatas.userAge}  />
        <button type="submit">Register</button>
      </form>
      </div>

        
        <div>
        
        {usershow.map((e,i)=>(
            <div key={i+1}>  
             <h1>userdeatils</h1>
            <p>{e.userName}</p>
             <p>{e.userEmail}</p>
              <p>{e.userAge}</p>
              
            </div>
            
            
      
        ))}
        </div>

      </>

  )
}

export default App