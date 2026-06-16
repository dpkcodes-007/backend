import { useState } from "react";

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
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100">
      
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        
        <div className="mb-4">
          {hooks ? (
            <h1 className="text-3xl font-bold text-green-600">ON</h1>
          ) : (
            <h1 className="text-3xl font-bold text-red-600">OFF</h1>
          )}
        </div>

        <button
          onClick={clickbtn}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          CLICK HERE
        </button>

        <div className="mt-6">
          <h1 className="text-3xl font-bold">{number}</h1>

          <button
            onClick={num}
            className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            HIGH
          </button>
        </div>

        <div className="mt-6">
          <h1 className="text-3xl font-bold">{decrease}</h1>

          <button
            onClick={minus}
            className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            LOW
          </button>
        </div>

      </div>
    </div>
  );
};

export default App;