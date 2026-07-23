import React, { useState } from 'react'

const App = () => {
const [arrofobj,setArrOfObj] = useState([
{Name:'Deepak',age:27},
{Name:'kameshwar',age:20},
{Name:'ganesh',age:22}
]) 

const handleedit = (id) =>{
 setArrOfObj(arrofobj.map((Ageplus,i) =>i === id? { ...Ageplus, age: Ageplus.age + 1 } : Ageplus
))}

  return (
    <>
    <div>
      {arrofobj.map((e,i)=>(
        <div key={i+1}>
            <h1>{e.Name}</h1>
            <h1>{e.age}</h1>\
            <button  onClick={()=>handleedit(i)}> click here </button>
        </div>
      ))}
    </div>
    
    </>
  )
}
export default App;