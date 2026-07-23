import React from 'react'
import Button from './components/Button.jsx'
import ButtonHoc from './hoc/ButtonHoc.jsx'
const EnhancedComp = ButtonHoc(Button)
const App = () => {
  return (
   <>
   <Button />
   </>
  )

}

export default App