import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../layout/Layout'
import Product from '../components/Product'


const AppRoute = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<Product/>} />
      </Route>
      
    </Routes>
  )
}

export default AppRoute