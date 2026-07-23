import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from '../sildes/Register'
import Login from '../sildes/Login'
import Home from '../sildes/Home'

const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
    </Routes>
    </>
  )
}

export default AppRoutes