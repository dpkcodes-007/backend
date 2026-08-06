import React from 'react'
import {useLocation} from 'react-router-dom'

const Dashboard = () => {
  const detailsOfUser =useLocation()
  return (
    <>
    <center>
    <h1>Welcome ! {detailsOfUser.state.email}</h1>
    <h2>Your Id : {detailsOfUser.state.id}</h2>

    </center>
 
    </>
  )
}

export default Dashboard