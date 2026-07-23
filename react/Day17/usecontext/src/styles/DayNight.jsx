import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const DayNight = () => {
    const {theme,click} = useContext(ThemeContext)
  return (
    <>
        <div>
        <div>
            <h1 className={theme ? "bg-white text-black text-center" : "bg-black text-white text-center"}>
                {theme?'useContext process in day' : 'useContext process in night'}
            </h1>
            <hr />
            <button onClick={click} className=' bg-blue-500 text-white p-2 text-center border-2 rounded-3xl w-35'>Click Here !</button>
        </div>
    </div>
    </>
  )
}

export default DayNight