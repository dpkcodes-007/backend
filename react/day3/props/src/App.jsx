import React from 'react'
import Student from "./Studentscard";
import EmployeeCard from "./Employee";
import Product from "./Product";

const App = () => {
  return (
    <>

    
      <Student
        name="Sudhan"
        age={22}
        course="MERN"
        city="Chennai"
      />

      

      <EmployeeCard
        name="Sudhan"
        id="EMP101"
        department="IT"
        salary={50000}
        experience="2 Years"
      />

      

      <Product
        productName="Laptop"
        productPrice={50000}
        category="Electronics"
        brand="HP"
      />
    </>
  
    
  )
}

export default App