import Navbar from "../components/NavBar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100">
        <div className="p-10">
          <h1 className="text-5xl font-bold text-center mb-5">
            Array Learning Hub
          </h1>

          <p className="text-center text-lg mb-10">
            Array is used to store multiple values inside a single variable.
          </p>

          {/* Detailed information about Arrays */}
          <div className="max-w-4xl mx-auto mb-12 bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">
              What is an Array?
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              An array is a special variable that can hold more than one value at a time. 
              Instead of declaring separate variables for each value, you can store them all 
              in a single array. Arrays are zero-indexed, meaning the first element is at index 0, 
              the second at index 1, and so on.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-800 mt-6">
              Key Characteristics:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Arrays can hold values of different data types (strings, numbers, objects, etc.)</li>
              <li>JavaScript arrays are dynamic - they can grow or shrink in size</li>
              <li>Arrays have built-in properties like .length to check the number of elements</li>
              <li>Array elements can be accessed using their index number: array[index]</li>
              <li>You can modify array elements even if the array was declared with const</li>
            </ul>

            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">Example:</h4>
              <code className="text-sm bg-white p-2 rounded block">
                {`const fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log(fruits[0]); // Output: Apple
console.log(fruits.length); // Output: 4`}
              </code>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-gray-800 mt-6">
              When to Use Arrays:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>When you need to store a list of related items</li>
              <li>When you need to perform operations on multiple values</li>
              <li>When the order of items matters</li>
              <li>When you need to iterate through a collection of data</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">
                Normal Array Methods
              </h2>
              <p className="text-gray-700 mb-3">
                <span className="font-semibold">push()</span> - Adds element(s) to the end
              </p>
              <p className="text-gray-700 mb-3">
                <span className="font-semibold">pop()</span> - Removes last element
              </p>
              <p className="text-gray-700 mb-3">
                <span className="font-semibold">shift()</span> - Removes first element
              </p>
              <p className="text-gray-700 mb-3">
                <span className="font-semibold">unshift()</span> - Adds element(s) to the beginning
              </p>
              <p className="text-gray-700 mb-3">
                <span className="font-semibold">slice()</span> - Returns a portion of the array
              </p>
              <Link to="/normal">
                <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
                  Explore Methods
                </button>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold mb-4 text-green-600">
                Higher Order Methods
              </h2>
              <p className="text-gray-700 mb-3">
                <span className="font-semibold">map()</span> - Creates new array by transforming each element
              </p>
              <p className="text-gray-700 mb-3">
                <span className="font-semibold">filter()</span> - Creates new array with elements that pass a test
              </p>
              <p className="text-gray-700 mb-3">
                <span className="font-semibold">reduce()</span> - Reduces array to a single value
              </p>
              <p className="text-gray-700 mb-3">
                <span className="font-semibold">find()</span> - Returns first element that passes a test
              </p>
              <p className="text-gray-700 mb-3">
                <span className="font-semibold">forEach()</span> - Executes a function on each element
              </p>
              <Link to="/hoam">
                <button className="mt-5 bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition">
                  Explore Methods
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white mt-12">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Array Learning Hub</h3>
                <p className="text-gray-300">
                  Master JavaScript arrays with interactive examples and detailed explanations.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/normal" className="text-gray-300 hover:text-white transition">
                      Normal Array Methods
                    </Link>
                  </li>
                  <li>
                    <Link to="/hoam" className="text-gray-300 hover:text-white transition">
                      Higher Order Methods
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition">
                      MDN Web Docs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition">
                      JavaScript Tutorial
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition">
                      Practice Exercises
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
              <p>&copy; 2024 Array Learning Hub. All rights reserved. | Made with ❤️ for learning JavaScript</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;