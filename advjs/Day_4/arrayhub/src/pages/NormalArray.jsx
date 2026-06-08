import NavBar from "../components/NavBar";
import MethodCard from "../components/MethodCard";
import { Link } from "react-router-dom";

const normalMethods = [
  {
    category: "Add Methods",
    description: "Add new elements to your array",
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
      <div className="p-10 bg-slate-100 min-h-screen">
        {/* Header Section with Back Button */}
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-800">Normal Array Methods</h1>
              <p className="text-gray-600 mt-2">
                Essential methods to manipulate, search, and transform arrays in JavaScript
              </p>
            </div>
            <Link to="/">
              <button className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-lg transition duration-300 flex items-center gap-2">
                ← Back to Home
              </button>
            </Link>
          </div>

          {/* Quick Info Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="text-2xl mb-2">📦</div>
              <h3 className="font-semibold text-blue-800">What are Normal Methods?</h3>
              <p className="text-sm text-blue-700">Basic array methods that directly manipulate or extract data from arrays.</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-semibold text-green-800">Key Operations</h3>
              <p className="text-sm text-green-700">Add, remove, search, extract, convert, and rearrange array elements.</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <div className="text-2xl mb-2">🔄</div>
              <h3 className="font-semibold text-purple-800">Mutating vs Non-mutating</h3>
              <p className="text-sm text-purple-700">Some methods modify original array (push, pop), others create new arrays (slice, concat).</p>
            </div>
          </div>

          {/* Methods Grid */}
          {normalMethods.map((section) => (
            <div key={section.category} className="mb-10">
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-500 pl-3">
                  {section.category}
                </h2>
                <p className="text-gray-600 mt-1 ml-4">{section.description}</p>
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
          <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-yellow-800 mb-3">💡 Pro Tips</h3>
            <ul className="space-y-2 text-yellow-800">
              <li>• <strong>push/pop</strong> are faster than <strong>unshift/shift</strong> because they don't need to reindex all elements</li>
              <li>• Always check if an array is empty before using <strong>pop()</strong> or <strong>shift()</strong> to avoid undefined values</li>
              <li>• Use <strong>slice()</strong> to create a copy of an array: <code className="bg-yellow-100 px-2 py-1 rounded">const copy = original.slice()</code></li>
              <li>• <strong>splice()</strong> is versatile - it can add, remove, and replace elements in one operation</li>
              <li>• For sorting numbers correctly, always provide a compare function: <code className="bg-yellow-100 px-2 py-1 rounded">sort((a,b) =&gt; a - b)</code></li>
              <li>• <strong>join()</strong> without parameters uses commas by default, specify a separator for better formatting</li>
            </ul>
          </div>

          {/* Common Mistakes Section */}
          <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-red-800 mb-3">⚠️ Common Mistakes to Avoid</h3>
            <ul className="space-y-2 text-red-800">
              <li>• Forgetting that <strong>sort()</strong> sorts strings by default - numbers need a compare function</li>
              <li>• Not realizing that <strong>reverse()</strong> and <strong>sort()</strong> modify the original array</li>
              <li>• Using <strong>splice()</strong> when you meant <strong>slice()</strong> - they sound similar but work differently</li>
              <li>• Assuming <strong>indexOf()</strong> works with objects (it uses strict equality, so it won't find different object references)</li>
              <li>• Using <strong>push()</strong> inside a loop without considering performance for large arrays</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NormalArray;