import { useState } from "react";
import Nullish from "./pages/Nullish";

const App = () => {
  const [hooks, setHooks] = useState(true);

  const clickbtn = () => {
    setHooks(!hooks);
  };

  const [number, setNumber] = useState(0);

  const num = () => {
    setNumber(number + 1);
  };

  const [decrease, setDecrease] = useState(0);

  const minus = () => {
    setDecrease(decrease - 1);
  };

  return (
    
      <>
    <Nullish/>


    </>
  );
};

      
export default App;