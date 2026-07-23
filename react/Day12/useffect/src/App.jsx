import { useEffect, useState } from "react"

const App = () => {
 const [timer,setTimer] = useState(0)
 const [vela,setVela] = useState(0)
  console.log('COM RUNS');
  
 const count = useEffect(()=>{

  const settings = setInterval(()=>{
     
    setTimer((p)=>(p+1))
  },1200)
    console.log('effect runs');
  return ()=>{
    clearInterval(settings)
  }

  
 },[])

 const tables = useEffect(()=>{
  const usertable = setInterval(() => {
    setVela((p)=>(p+2))
  }, 1000);

  return ()=>{
    clearInterval(usertable)
  }
 },[])

  return (
    <><h1> This is useEffect process</h1>
    <h2>TIMER : {timer}</h2>
    <h2> 2 TABLES OUTPUT : {vela}</h2>

    </>
  )
}

export default App