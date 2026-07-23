import React, { useState } from 'react'

const useToggle = (pass) => {
    const [storedata,setStoreData] = useState(pass)

    const handlepass = ()=>{
         setStoreData(!storedata)
         
    }
  return [handlepass,storedata]
}

export default useToggle