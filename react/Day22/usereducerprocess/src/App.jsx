// import { useReducer } from "react"
// import TodoReducer from "./components/TodoReducer"
// const init = 0

// const reduce = (count,anyname)=>{

//   switch(anyname.type){
//     case "IN":
//     return count + 1

//     case "DE":
//     return count -1

//     case "RE":
//     return 0

//     default:
//     return init
//   }


// }

// const App = () => {
//   const [count,Dispatch] = useReducer(reduce,init)
//   return (
//     <>
//     <h1>{count}</h1>
//     <button onClick={()=>Dispatch({type:"IN"})}>In count </button>
//     <button onClick={()=>Dispatch({type:"DE"})} >De count </button>
//     <button onClick={()=>Dispatch({type:"RE"})} >Re count </button>
//     </>
//   )
// }
// <TodoReducer/>
// export default App  


import React, { useReducer, useState } from 'react'


const userDatas = []
const reduce = (state,action)=>{
  switch(action.type){
    case "ADD":
    return [...state,action.payload]

    case "update" :

    console.log(update);
    
    return state.map((e)=>e.Id === action.payload.Id ? action.payload : e)
    
    case "DELETE" :
    return state.filter((e)=>e.Id!==action.payload)

    default :
    return userDatas
  }
}


const TodoReducer = () => {
    const [state,Dispatch] = useReducer(reduce,userDatas)
    const [username,setUsername] = useState('')
    const [useredit,setUserEdit] = useState(null)




   const handleChange = (e)=>{
    setUsername(e.target.value)
   }
   
   const handleAdd = ()=>{
    const newdataId = {
      Id:Date.now(),
      userName:username
    }

    Dispatch({
    type : "ADD",
    payload : newdataId
   })
   
  setUsername("")
   }




   const handleEdit = (user) =>{
      setUserEdit(user.Id)
      setUsername(user.userName)
   }
    
   const handleDelete = (deleteid)=>{
     Dispatch({
        type : "DELETE",
        payload : deleteid
     })
   }


   const hadleup =()=>{

    Dispatch({
      type:"update",
      payload:{Id :useredit, userName:username}
    })

   }
  return (
    <>
    <input type="text" placeholder='Enter name' value={username} onChange={handleChange} />
    {useredit?<button onClick={hadleup}>Update</button>:<button onClick={handleAdd}>ADD DATAS</button>}
    
    <div>
        {state.map((e)=>(
            <div key={e.Id}>
            <p >{e.userName}</p>
            <button onClick={()=>handleEdit(e)}>Edit</button>
            ||
            <button on onClick={() => handleDelete(e.Id)}>delete</button>
            </div>
            
        ))}
    </div>
    </>
  )
}

export default TodoReducer