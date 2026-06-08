import NavBar from "../components/NavBar";
import MethodCard from "../components/MethodCard";
import { Link } from "react-router-dom";
import { 
  FaArrowLeft, 
  FaBox, 
  FaBolt, 
  FaSync, 
  FaLightbulb, 
  FaExclamationTriangle,
  FaPlusCircle,
  FaMinusCircle,
  FaSearch,
  FaCut,
  FaExchangeAlt,
  FaSort,
  FaCheckCircle,
  FaBook,
  FaCode
} from "react-icons/fa";

const normalMethods = [
  {
    category: "Add Methods",
    description: "Add new elements to your array",
    icon: <FaPlusCircle className="text-green-500" />,
    methods: [
      {
        name: "push()",
        example: `let arr = [1,2];\narr.push(3);`,
        output: "[1,2,3]",
        details: "Adds one or more elements to the END of an array and returns the new length.",
        useCase: "Perfect for adding items to a list, like appending a new message to a chat history.",
      },
      {
        name: "unshift()",
        example: `let arr = [2,3];\narr.unshift(1);`,
        output: "[1,2,3]",
        details: "Adds one or more elements to the BEGINNING of an array and returns the new length.",
        useCase: "Ideal for adding items to the front of a queue or prepending data to a list.",
      },
      {
        name: "splice()",
        example: `let arr = [1,3];\narr.splice(1,0,2);`,
        output: "[1,2,3]",
        details: "Changes array contents by removing, replacing, or adding elements at a specific position.",
        useCase: "Great for inserting elements at any position, removing specific items, or replacing elements in place.",
      },
    ],
  },
  {
    category: "Remove Methods",
    description: "Remove elements from your array",
    icon: <FaMinusCircle className="text-red-500" />,
    methods: [
      {
        name: "pop()",
        example: `let arr = [1,2,3];\narr.pop();`,
        output: "[1,2]",
        details: "Removes the LAST element from an array and returns that element.",
        useCase: "Useful for implementing stack (LIFO) operations or removing the most recent item from a list.",
      },
      {
        name: "shift()",
        example: `let arr = [1,2,3];\narr.shift();`,
        output: "[2,3]",
        details: "Removes the FIRST element from an array and returns that element.",
        useCase: "Perfect for queue (FIFO) operations or removing the oldest item from a list.",
      },
    ],
  },
  {
    category: "Search Methods",
    description: "Find elements and check their existence",
    icon: <FaSearch className="text-blue-500" />,
    methods: [
      {
        name: "includes()",
        example: `let arr = [1,2,3];\narr.includes(2);`,
        output: "true",
        details: "Determines whether an array includes a certain value, returning true or false.",
        useCase: "Best for simple existence checks, like verifying if a username is already taken.",
      },
      {
        name: "indexOf()",
        example: `let arr = [1,2,3];\narr.indexOf(2);`,
        output: "1",
        details: "Returns the first index at which a given element can be found, or -1 if not present.",
        useCase: "Use when you need the position of an element for removal or insertion operations.",
      },
      {
        name: "lastIndexOf()",
        example: `let arr = [1,2,3,2];\narr.lastIndexOf(2);`,
        output: "3",
        details: "Returns the last index at which a given element can be found, searching from right to left.",
        useCase: "Helpful when dealing with duplicate values and you need the last occurrence's position.",
      },
    ],
  },
  {
    category: "Extract Methods",
    description: "Create new arrays from existing ones",
    icon: <FaCut className="text-purple-500" />,
    methods: [
      {
        name: "slice()",
        example: `let arr = [1,2,3,4];\narr.slice(1,3);`,
        output: "[2,3]",
        details: "Returns a shallow copy of a portion of an array without modifying the original.",
        useCase: "Perfect for pagination, getting a range of items, or creating copies of array segments.",
      },
      {
        name: "concat()",
        example: `let a = [1,2];\nlet b = [3,4];\na.concat(b);`,
        output: "[1,2,3,4]",
        details: "Merges two or more arrays into a new array without modifying existing arrays.",
        useCase: "Great for combining multiple data sources, merging lists, or appending arrays.",
      },
    ],
  },
  {
    category: "Convert Methods",
    description: "Transform arrays into other formats",
    icon: <FaExchangeAlt className="text-orange-500" />,
    methods: [
      {
        name: "join()",
        example: `['a','b','c'].join("-");`,
        output: "a-b-c",
        details: "Creates and returns a new string by concatenating all elements, separated by a specified separator.",
        useCase: "Ideal for creating URL slugs, CSV strings, or formatted display text from arrays.",
      },
      {
        name: "toString()",
        example: `[1,2,3].toString();`,
        output: "1,2,3",
        details: "Returns a string representing the array, with elements separated by commas.",
        useCase: "Useful for quick debugging, displaying arrays in UI, or converting data for storage.",
      },
    ],
  },
  {
    category: "Rearrange Methods",
    description: "Reorganize array elements",
    icon: <FaSort className="text-indigo-500" />,
    methods: [
      {
        name: "reverse()",
        example: `[1,2,3].reverse();`,
        output: "[3,2,1]",
        details: "Reverses the order of elements in place (modifies the original array).",
        useCase: "Perfect for displaying data in reverse chronological order or implementing undo features.",
      },
      {
        name: "sort()",
        example: `[5,1,4,2].sort();`,
        output: "[1,2,4,5]",
        details: "Sorts elements in place and returns the sorted array. Note: sorts strings by default!",
        useCase: "Essential for ordering data alphabetically, numerically (with compare function), or by custom criteria.",
      },
    ],
  },
];

const NormalArray = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-50">
        <div className="p-10">
          {/* Header Section with Back Button */}
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 rounded-lg">
                    <FaCode className="text-white text-2xl" />
                  </div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Normal Array Methods
                  </h1>
                </div>
                <p className="text-gray-600 mt-2 text-lg">
                  Essential methods to manipulate, search, and transform arrays in JavaScript
                </p>
              </div>
              <Link to="/">
                <button className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white px-6 py-2 rounded-lg transition duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
                  <FaArrowLeft /> Back to Home
                </button>
              </Link>
            </div>

            {/* Quick Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-blue-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-100 p-3 rounded-full group-hover:scale-110 transition-transform">
                    <FaBox className="text-blue-600 text-xl" />
                  </div>
                  <h3 className="font-bold text-blue-800 text-lg">What are Normal Methods?</h3>
                </div>
                <p className="text-gray-600">Basic array methods that directly manipulate or extract data from arrays.</p>
              </div>
              
              <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-green-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-green-100 p-3 rounded-full group-hover:scale-110 transition-transform">
                    <FaBolt className="text-green-600 text-xl" />
                  </div>
                  <h3 className="font-bold text-green-800 text-lg">Key Operations</h3>
                </div>
                <p className="text-gray-600">Add, remove, search, extract, convert, and rearrange array elements.</p>
              </div>
              
              <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-purple-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-purple-100 p-3 rounded-full group-hover:scale-110 transition-transform">
                    <FaSync className="text-purple-600 text-xl" />
                  </div>
                  <h3 className="font-bold text-purple-800 text-lg">Mutating vs Non-mutating</h3>
                </div>
                <p className="text-gray-600">Some methods modify original array (push, pop), others create new arrays (slice, concat).</p>
              </div>
            </div>

            {/* Methods Grid */}
            {normalMethods.map((section) => (
              <div key={section.category} className="mb-12">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-500 pl-3 flex items-center gap-2">
                    {section.icon}
                    {section.category}
                  </h2>
                  <p className="text-gray-600 mt-2 ml-4">{section.description}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {section.methods.map((method) => (
                    <MethodCard
                      key={`${section.category}-${method.name}`}
                      title={method.name}
                      description={section.category}
                      code={method.example}
                      output={method.output}
                      details={method.details}
                      useCase={method.useCase}
                    />
                  ))}
                </div>
              </div>
            ))}

            {/* Tips Section */}
            <div className="mt-12 bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl p-8 shadow-lg border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-3">
                <div className="bg-blue-200 p-2 rounded-full">
                  <FaLightbulb className="text-blue-600 text-xl" />
                </div>
                Pro Tips
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                  <span><strong className="font-semibold">push/pop</strong> are faster than <strong className="font-semibold">unshift/shift</strong> because they don't need to reindex all elements</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                  <span>Always check if an array is empty before using <strong className="font-semibold">pop()</strong> or <strong className="font-semibold">shift()</strong> to avoid undefined values</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                  <span>Use <strong className="font-semibold">slice()</strong> to create a copy of an array: <code className="bg-slate-100 px-2 py-1 rounded text-sm">const copy = original.slice()</code></span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                  <span><strong className="font-semibold">splice()</strong> is versatile - it can add, remove, and replace elements in one operation</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                  <span>For sorting numbers correctly, always provide a compare function: <code className="bg-slate-100 px-2 py-1 rounded text-sm">sort((a,b) =&gt; a - b)</code></span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                  <span><strong className="font-semibold">join()</strong> without parameters uses commas by default, specify a separator for better formatting</span>
                </li>
              </ul>
            </div>

            {/* Common Mistakes Section */}
            <div className="mt-8 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-8 shadow-lg border-l-4 border-red-500">
              <h3 className="text-2xl font-bold text-red-800 mb-4 flex items-center gap-3">
                <div className="bg-red-200 p-2 rounded-full">
                  <FaExclamationTriangle className="text-red-600 text-xl" />
                </div>
                Common Mistakes to Avoid
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">⚠</span>
                  <span>Forgetting that <strong className="font-semibold">sort()</strong> sorts strings by default - numbers need a compare function</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">⚠</span>
                  <span>Not realizing that <strong className="font-semibold">reverse()</strong> and <strong className="font-semibold">sort()</strong> modify the original array</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">⚠</span>
                  <span>Using <strong className="font-semibold">splice()</strong> when you meant <strong className="font-semibold">slice()</strong> - they sound similar but work differently</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">⚠</span>
                  <span>Assuming <strong className="font-semibold">indexOf()</strong> works with objects (it uses strict equality, so it won't find different object references)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">⚠</span>
                  <span>Using <strong className="font-semibold">push()</strong> inside a loop without considering performance for large arrays</span>
                </li>
              </ul>
            </div>

            {/* Progress Tracker */}
            <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-blue-800 mb-3 flex items-center gap-2">
                <FaBook className="text-blue-600" />
                Learning Progress
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Add Methods</span>
                    <span>3/3 Methods Learned</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full w-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Remove Methods</span>
                    <span>2/2 Methods Learned</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full w-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Search Methods</span>
                    <span>3/3 Methods Learned</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NormalArray;