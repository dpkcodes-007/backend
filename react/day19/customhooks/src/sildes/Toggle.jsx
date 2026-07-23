import React from 'react'
import useToggle from '../hooks/useToggle'

const Toggle = () => {
    const [handlepass,storedata] = useToggle(true)
    console.log(storedata);
    
  return (
    <>
     <input type='Text' placeholder='name' />
     <br /><br />
     <input type={storedata?'text':'password'} placeholder='password'/>
     <br /><br />
     <button onClick={handlepass}>HIDE OR SHOW</button>
    
    </>
  )
}

export default Toggle