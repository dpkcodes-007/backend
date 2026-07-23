import React, { useState } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeProvider = ({children}) => {
  const [theme,setTheme] = useState(true)
  const click = ()=>{
    setTheme(!theme)
  } 

  return (
    <ThemeContext.Provider value={{theme,click}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;