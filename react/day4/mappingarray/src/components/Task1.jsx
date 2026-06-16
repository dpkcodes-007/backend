import React from 'react'

const Task1 = () => {

    const schools = [
            {
      id: 1,
      schoolName: "ABC School",
      city: "Chennai",
      principal: "Ramesh",
      students: 2500,
      teachers: 120,
    },
    {
      id: 2,
      schoolName: "Green Valley School",
      city: "Coimbatore",
      principal: "Suresh",
      students: 1800,
      teachers: 90,
    },
    ]

  return (
    <>
    {schools.map((sch) => (
      <div key={sch.id}>
        <h2>{sch.schoolName}</h2>
        <h4>{sch.city}</h4>
        <h4>{sch.principal}</h4>
        <h4>{sch.students}</h4>
        <h4>{sch.teachers}</h4>
      </div>
    ))}
    </>
  )
}

export default Task1