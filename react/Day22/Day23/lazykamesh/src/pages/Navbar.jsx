import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    <Link to={"/"} >Home</Link>
    <Link to={"/about"} >About</Link>
    <Link to={"/kamesh"} >Kamesh</Link>
    <Link to={"/mern"} >Mern</Link>
    </>
  )
}

export default Navbar