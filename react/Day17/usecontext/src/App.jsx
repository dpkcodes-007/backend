import React, { useContext, useRef } from 'react'
import DayNight from './styles/DayNight'

const App = () => {
  const myname = useRef()
  const showref = useRef()

  const handlechange = () =>{
    const inputdata = myname.current.value

    showref.current.innerText = inputdata
  } 
  return (
    <>
    <DayNight/>
      <div>
        <input type="text" placeholder='Name' ref={myname} onChange={handlechange} />
        <h2 ref={showref}></h2>
      </div>
    
    </>
    )}
export default App