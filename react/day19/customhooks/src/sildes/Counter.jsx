import React from 'react'
import useCounter from '../hooks/useCounter'

const Counter = () => {
const {value,increaseclick,decreaseclick,resetclick} = useCounter(0)
  return (
    <>
       <p>{value}</p>
    <button onClick={increaseclick}> Click to increase </button>
    <button onClick={decreaseclick}> Click to decrease </button>
    <button onClick={resetclick}> Click to reset </button>
    </>
  )
}

export default Counter