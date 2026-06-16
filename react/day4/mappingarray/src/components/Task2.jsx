import React from 'react'

const Task2 = () => {
    const schools = [
    {
      id: 1,
      schoolName: "ABC School",
      courses: ["LKG", "UKG", "Primary"],
    },
  ];
  return (
    
    <div>
    {schools.map((sch) => (
         <>
        <div  key = {sch.id}>
        <h2> {sch.schoolName}</h2>
        </div>

        {sch.courses.map((e,i) => ( 
        <span key = {i}>

         {e}
        </span>
          
        )) }
          </>
        
    )) }
    </div>
    
    
  )
}

export default Task2