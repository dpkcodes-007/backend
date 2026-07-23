import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from '../components/Register'
import Login from '../components/Login'
import Dash from '../components/Dash'

const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Register/>}/>
         <Route path='/login' element={<Login/>}/>
          <Route path='/dash' element={<Dash/>}/>
    </Routes>
    </>
  )
}

export default AppRoutes