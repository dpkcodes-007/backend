import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"
import Home from "./pages/Home"
import About from "./pages/About"
import Navbar from "./pages/Navbar"

const Kamesh = lazy(()=>import("./pages/Kamesh"))
const Mern = lazy(()=>import("./pages/Mern"))
const App = ()=>{
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>

    <Suspense fallback={<h1>lazy Loading...</h1>}>
    <Routes>
      <Route path="/kamesh" element={<Kamesh/>}/>
      <Route path="/mern" element={<Mern/>}/>
    </Routes>
    </Suspense>
    </>
  )
}
export default App