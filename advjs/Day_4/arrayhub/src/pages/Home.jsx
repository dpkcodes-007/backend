import Navbar from "../components/NavBar";
import { Link } from "react-router-dom";
import { 
  FaCode, 
  FaLayerGroup, 
  FaArrowRight, 
  FaBook, 
  FaList, 
  FaFilter, 
  FaChartLine,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaHeart,
  FaInfoCircle,
  FaCheckCircle,
  FaRocket,
  FaDatabase,
  FaJs,
  FaReact
} from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import { MdEmail, MdLocationOn, MdDateRange, MdSchool } from "react-icons/md";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 text-9xl animate-pulse">[ ]</div>
            <div className="absolute bottom-20 right-10 text-9xl animate-bounce">{ }</div>
            <div className="absolute top-40 right-20 text-8xl animate-pulse">( )</div>
          </div>
          
          <div className="p-10 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full mb-4 shadow-lg">
                <FaJs className="text-yellow-300 text-2xl" />
                <span className="font-semibold">JavaScript Arrays</span>
              </div>
              <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-5 flex items-center justify-center gap-3">
                <FaLayerGroup className="text-blue-600" />
                Array Learning Hub
                <FaRocket className="text-purple-600" />
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Master JavaScript arrays with interactive examples, detailed explanations, and hands-on practice
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-xl transition-all hover:scale-105">
                <FaDatabase className="text-3xl text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">20+</div>
                <div className="text-sm text-gray-600">Array Methods</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-xl transition-all hover:scale-105">
                <FaCode className="text-3xl text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">50+</div>
                <div className="text-sm text-gray-600">Code Examples</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-xl transition-all hover:scale-105">
                <FaCheckCircle className="text-3xl text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">100%</div>
                <div className="text-sm text-gray-600">Hands-on Practice</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-xl transition-all hover:scale-105">
                <FaRocket className="text-3xl text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">24/7</div>
                <div className="text-sm text-gray-600">Learn at Pace</div>
              </div>
            </div>

            {/* Detailed information about Arrays */}
            <div className="max-w-5xl mx-auto mb-12 bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <FaInfoCircle />
                  What is an Array?
                </h2>
              </div>
              <div className="p-8">
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  An array is a special variable that can hold more than one value at a time. 
                  Instead of declaring separate variables for each value, you can store them all 
                  in a single array. Arrays are <strong className="text-blue-600">zero-indexed</strong>, meaning the first element is at index 0, 
                  the second at index 1, and so on.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 rounded-xl p-5">
                    <h3 className="text-xl font-semibold mb-3 text-blue-800 flex items-center gap-2">
                      <FaCheckCircle className="text-blue-600" />
                      Key Characteristics:
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">✓ Hold different data types</li>
                      <li className="flex items-start gap-2">✓ Dynamic size (grow/shrink)</li>
                      <li className="flex items-start gap-2">✓ Built-in .length property</li>
                      <li className="flex items-start gap-2">✓ Access by index: array[index]</li>
                      <li className="flex items-start gap-2">✓ Modify even with const</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 rounded-xl p-5">
                    <h3 className="text-xl font-semibold mb-3 text-purple-800 flex items-center gap-2">
                      <FaRocket className="text-purple-600" />
                      When to Use Arrays:
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">✓ Store lists of related items</li>
                      <li className="flex items-start gap-2">✓ Perform operations on multiple values</li>
                      <li className="flex items-start gap-2">✓ When order matters</li>
                      <li className="flex items-start gap-2">✓ Iterate through collections</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold mb-3 text-gray-300 flex items-center gap-2">
                    <FaCode className="text-green-400" />
                    Example:
                  </h4>
                  <pre className="text-sm bg-gray-800 p-4 rounded-lg overflow-x-auto">
                    <code className="text-green-400">
                      {`const fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log(fruits[0]); // Output: Apple
console.log(fruits.length); // Output: 4
fruits.push("Grape"); // Add new fruit
console.log(fruits); // ["Apple", "Banana", "Orange", "Mango", "Grape"]`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Methods Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Normal Methods Card */}
              <div className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <FaList className="text-white text-4xl mb-2" />
                      <h2 className="text-2xl font-bold text-white">Normal Array Methods</h2>
                    </div>
                    <div className="bg-white/20 rounded-full p-3">
                      <span className="text-white font-bold">15+</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between p-2 hover:bg-blue-50 rounded transition">
                      <span className="font-semibold text-gray-800">push()</span>
                      <span className="text-sm text-gray-600">Adds to end</span>
                    </div>
                    <div className="flex items-center justify-between p-2 hover:bg-blue-50 rounded transition">
                      <span className="font-semibold text-gray-800">pop()</span>
                      <span className="text-sm text-gray-600">Removes last</span>
                    </div>
                    <div className="flex items-center justify-between p-2 hover:bg-blue-50 rounded transition">
                      <span className="font-semibold text-gray-800">shift()</span>
                      <span className="text-sm text-gray-600">Removes first</span>
                    </div>
                    <div className="flex items-center justify-between p-2 hover:bg-blue-50 rounded transition">
                      <span className="font-semibold text-gray-800">unshift()</span>
                      <span className="text-sm text-gray-600">Adds to start</span>
                    </div>
                    <div className="flex items-center justify-between p-2 hover:bg-blue-50 rounded transition">
                      <span className="font-semibold text-gray-800">slice()</span>
                      <span className="text-sm text-gray-600">Extracts portion</span>
                    </div>
                  </div>
                  <Link to="/normal">
                    <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-2 font-semibold shadow-md">
                      Explore Methods <FaArrowRight />
                    </button>
                  </Link>
                </div>
              </div>

              {/* Higher Order Methods Card */}
              <div className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <FaFilter className="text-white text-4xl mb-2" />
                      <h2 className="text-2xl font-bold text-white">Higher Order Methods</h2>
                    </div>
                    <div className="bg-white/20 rounded-full p-3">
                      <span className="text-white font-bold">10+</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between p-2 hover:bg-green-50 rounded transition">
                      <span className="font-semibold text-gray-800">map()</span>
                      <span className="text-sm text-gray-600">Transform each element</span>
                    </div>
                    <div className="flex items-center justify-between p-2 hover:bg-green-50 rounded transition">
                      <span className="font-semibold text-gray-800">filter()</span>
                      <span className="text-sm text-gray-600">Filter elements</span>
                    </div>
                    <div className="flex items-center justify-between p-2 hover:bg-green-50 rounded transition">
                      <span className="font-semibold text-gray-800">reduce()</span>
                      <span className="text-sm text-gray-600">Reduce to single value</span>
                    </div>
                    <div className="flex items-center justify-between p-2 hover:bg-green-50 rounded transition">
                      <span className="font-semibold text-gray-800">find()</span>
                      <span className="text-sm text-gray-600">Find element</span>
                    </div>
                    <div className="flex items-center justify-between p-2 hover:bg-green-50 rounded transition">
                      <span className="font-semibold text-gray-800">forEach()</span>
                      <span className="text-sm text-gray-600">Loop through</span>
                    </div>
                  </div>
                  <Link to="/hoam">
                    <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-2 font-semibold shadow-md">
                      Explore Methods <FaArrowRight />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white mt-16">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid md:grid-cols-3 gap-10">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <FaLayerGroup className="text-3xl text-blue-400" />
                  <h3 className="text-2xl font-bold">Array Learning Hub</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Master JavaScript arrays with interactive examples and detailed explanations. 
                  Your journey to becoming a JavaScript expert starts here!
                </p>
                <div className="flex gap-4 mt-6">
                  <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition">
                    <FaGithub className="text-xl" />
                  </a>
                  <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition">
                    <FaTwitter className="text-xl" />
                  </a>
                  <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition">
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition">
                    <MdEmail className="text-xl" />
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <FaBook className="text-blue-400" />
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/normal" className="text-gray-300 hover:text-blue-400 transition flex items-center gap-2">
                      <FaArrowRight className="text-sm" />
                      Normal Array Methods
                    </Link>
                  </li>
                  <li>
                    <Link to="/hoam" className="text-gray-300 hover:text-green-400 transition flex items-center gap-2">
                      <FaArrowRight className="text-sm" />
                      Higher Order Methods
                    </Link>
                  </li>
                  <li>
                    <Link to="/profile" className="text-gray-300 hover:text-purple-400 transition flex items-center gap-2">
                      <FaArrowRight className="text-sm" />
                      About Developer
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <FaChartLine className="text-green-400" />
                  Resources
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-blue-400 transition flex items-center gap-2">
                      <FaArrowRight className="text-sm" />
                      MDN Web Docs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-blue-400 transition flex items-center gap-2">
                      <FaArrowRight className="text-sm" />
                      JavaScript.info
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-blue-400 transition flex items-center gap-2">
                      <FaArrowRight className="text-sm" />
                      Practice Challenges
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
              <p className="flex items-center justify-center gap-2">
                &copy; 2024 Array Learning Hub. All rights reserved. | Made with <FaHeart className="text-red-500 animate-pulse" /> for learning JavaScript
              </p>
              <p className="text-sm mt-2 flex items-center justify-center gap-2">
                <FaReact className="text-blue-400 animate-spin-slow" />
                Built with React & Tailwind CSS
                <SiTailwindcss className="text-cyan-400" />
              </p>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Home;