import React, { useState } from 'react'


const useCounter = (number) => {
  
    const [value,setValue] = useState(number)

    const increaseclick = ()=>{
        setValue((p)=> p + 1)
    }

        const decreaseclick = ()=>{
            if(value<1){
                alert('number cant be decreased below 0')
                return
            }
        setValue((p)=> p - 1)
    }

        const resetclick = ()=>{
        setValue(0)
    }
    
    
    

  return {value,increaseclick,decreaseclick,resetclick}
}

export default useCounter