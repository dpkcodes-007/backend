import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Task1 from './components/Task1'
import Task2 from './components/Task2'

const App = () => {
  return (
    <>
    <nav>
       <Link to={'/'}>TASK 1</Link>
       <Link to={'/task2'}>TASK 2</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Task1/>} />
      <Route path='/task2' element ={<Task2/>}/>
    </Routes>
    </>
  )
}

export default App