import React, { useReducer, useState } from 'react'


const userDatas = []
const reduce = (state,action)=>{
  switch(action.type){
    case "ADD":
    return [...state,action.payload]

    case "EDIT" :
    return 
    
    case "DELETE" :
    return useredit.map((e)=>e.id!==action.payload.id)

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
    setUsername("")
    setUserEdit(null)
   }
   
   const handleAdd = ()=>{
    const newdataId = {
      Id:Date.now(),
      userName:username
    }
   }

   Dispatch({
    type : "ADD",
    payload : username
   })

   const handleEdit = (user) =>{
      setUserEdit(  
        user.id,
        user.userName )

        Dispatch ({
            type : "EDIT",
            payload : useredit
        })
   }
    
   const handleDelete = ()=>{
     Dispatch({
        type : "DELETE",
        payload : useredit
     })
   }
  return (
    <>
    <input type="text" placeholder='Enter name' value={values} onChange={handleChange} />
    <button onClick={handleAdd}>ADD DATAS</button>
    
    <div>
        {username.map((e)=>(
            <div>
            <p key={e.Id}>{e.userName}</p>
            <button onClick={()=>handleEdit(e)}>Edit</button>
            ||
            <button on onClick={handleDelete}>delete</button>
            </div>
            
        ))}
    </div>
    </>
  )
}

export default TodoReducer