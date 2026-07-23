import  { useEffect, useState } from 'react'

const App = () => {
    const [products,setProducts] = useState([])
    const [cat,setCat] = useState([])
    const [search,setSearch] = useState("")
    const [category,setCategory] = useState("")
    const [high,setHigh] = useState(false)




    const fetchLoad = async() =>{
      try {
        const fetchData = await fetch('https://dummyjson.com/products')
        const getData = await fetchData.json()
        setProducts(getData.products)
        console.log(getData.products);
        const show = getData.products.map((e)=>e.category)
        const foruni = [...new Set(show)]
        setCat(foruni)

        
        
      } catch (error) {
        console.log('error');
        
      }
    }
    useEffect(()=>{
      fetchLoad()
    },[])

    let usershow = [...products]  

    const handlesearch = (e)=>{
       setSearch(e.target.value)
    }
    if(search){
      usershow = usershow.filter((e)=>e.title.toLowerCase().includes(search.toLowerCase()))
    }

    const handleselect = (e)=>{
       setCategory(e.target.value)
    }
    if(category){
      usershow = usershow.filter((e)=>e.category === category)
    }  

    const handlehigh = (e)=>{
      e.preventDefault()
      setHigh(!high)
      
    }
    if(high){
        usershow = usershow.sort((a,b)=>b.price-a.price)
      console.log('kameshwar',usershow);
    }
    
  return (
    <>
     <select onChange={handleselect}>
      <option value="">select </option>
     {cat.map((e,i)=>(
       <option key={i+1}>{e}</option>

     ))}
     </select>
    
    <div style = {{
  background: "green",display: "flex",flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: "20px", padding: "10px 20px", color: "white"}}>
      {usershow.map((e)=>(
        <div key={e.id}>
        <p>{e.title}</p> 
        <p>{e.category}</p> 
        <p>{e.price}</p> 

        </div>
      ))}
    </div>
     <input type="text" onChange={handlesearch}/>

     <button onClick={handlehigh}>high to low</button>
     </>
  )
}

export default App