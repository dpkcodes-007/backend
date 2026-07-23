import React, { useState } from 'react'
import useCounter from './hooks/useCounter'
import Counter from './sildes/Counter'
import Toggle from './sildes/Toggle'


const App = () => {
  return (
    <>
     <Counter/>
     <Toggle/>
    </>
  )

   }
export default App