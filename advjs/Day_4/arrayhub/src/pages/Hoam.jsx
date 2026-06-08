import NavBar from "../components/NavBar";
import MethodCard from "../components/MethodCard";
import { Link } from "react-router-dom";

const hoamMethods = [
  {
    category: "Transformation",
    description: "Transform each element of an array into something new",
    methods: [
      {
        name: "map()",
        example: `const nums=[1,2,3];\nnums.map(num=>num*2);`,
        output: "[2,4,6]",
        details: "Creates a new array by applying a function to each element. Does not modify the original array.",
        useCase: "Perfect for converting data formats, extracting properties from objects, or applying calculations to each item.",
      },
      {
        name: "flatMap()",
        example: `const nums=[1,2];\nnums.flatMap(num=>[num,num*2]);`,
        output: "[1,2,2,4]",
        details: "First maps each element using a function, then flattens the result into a new array (depth of 1).",
        useCase: "Ideal when you want to map and flatten in one go, like splitting sentences into words or handling nested arrays.",
      },
    ],
  },
  {
    category: "Filtering",
    description: "Select specific elements based on conditions",
    methods: [
      {
        name: "filter()",
        example: `const nums=[1,2,3,4];\nnums.filter(num=>num>2);`,
        output: "[3,4]",
        details: "Creates a new array with all elements that pass the test implemented by the provided function.",
        useCase: "Great for removing unwanted items, searching for specific values, or creating subsets of data.",
      },
    ],
  },
  {
    category: "Finding",
    description: "Search and locate elements in the array",
    methods: [
      {
        name: "find()",
        example: `const nums=[10,20,30];\nnums.find(num=>num>15);`,
        output: "20",
        details: "Returns the first element that satisfies the testing function. Returns undefined if no element is found.",
        useCase: "Use when you need to get the first matching item, like finding a user by ID in a list.",
      },
      {
        name: "findIndex()",
        example: `const nums=[10,20,30];\nnums.findIndex(num=>num===20);`,
        output: "1",
        details: "Returns the index of the first element that satisfies the testing function. Returns -1 if not found.",
        useCase: "Perfect when you need the position of an element rather than the element itself.",
      },
      {
        name: "findLast()",
        example: `const nums=[1,2,3,4];\nnums.findLast(num=>num%2===0);`,
        output: "4",
        details: "Returns the last element that satisfies the testing function (searches from end to beginning).",
        useCase: "Useful when you need the last matching item, like finding the most recent entry that meets criteria.",
      },
    ],
  },
  {
    category: "Iteration",
    description: "Execute functions on each array element",
    methods: [
      {
        name: "forEach()",
        example: `const nums=[1,2,3];\nnums.forEach(num=>console.log(num));`,
        output: "1 2 3",
        details: "Executes a provided function once for each array element. Does not return a value (returns undefined).",
        useCase: "Best for performing side effects like logging, updating UI elements, or making API calls for each item.",
      },
    ],
  },
  {
    category: "Checking",
    description: "Verify conditions across array elements",
    methods: [
      {
        name: "some()",
        example: `const nums=[1,2,3];\nnums.some(num=>num>2);`,
        output: "true",
        details: "Tests whether at least one element in the array passes the test. Returns true if any element passes.",
        useCase: "Use to check if any item meets a condition, like checking if a cart has expensive items.",
      },
      {
        name: "every()",
        example: `const nums=[2,4,6];\nnums.every(num=>num%2===0);`,
        output: "true",
        details: "Tests whether all elements in the array pass the test. Returns true only if all elements pass.",
        useCase: "Perfect for validation, like checking if all form fields are filled or all items are in stock.",
      },
    ],
  },
  {
    category: "Aggregation",
    description: "Combine elements into a single value",
    methods: [
      {
        name: "reduce()",
        example: `const nums=[1,2,3];\nnums.reduce((acc,curr)=>acc+curr,0);`,
        output: "6",
        details: "Reduces the array to a single value by executing a reducer function on each element (from left to right).",
        useCase: "Excellent for summing numbers, concatenating strings, grouping data, or building complex objects.",
      },
      {
        name: "reduceRight()",
        example: `const nums=[1,2,3];\nnums.reduceRight((acc,curr)=>acc-curr);`,
        output: "0",
        details: "Similar to reduce but works from right to left (end to beginning) in the array.",
        useCase: "Useful when order matters from right to left, like evaluating expressions or reversing operations.",
      },
    ],
  },
];

const HOAM = () => {
  return (
    <>
      <NavBar />
      <div className="p-10 bg-slate-100 min-h-screen">
        {/* Header Section with Back Button */}
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-800">Higher Order Array Methods</h1>
              <p className="text-gray-600 mt-2">
                Powerful methods that take functions as arguments to transform, filter, and manipulate arrays
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
              <div className="text-2xl mb-2">🔧</div>
              <h3 className="font-semibold text-blue-800">What are Higher Order Methods?</h3>
              <p className="text-sm text-blue-700">Methods that accept functions as arguments or return functions as results.</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <div className="text-2xl mb-2">💡</div>
              <h3 className="font-semibold text-green-800">Why Use Them?</h3>
              <p className="text-sm text-green-700">Write cleaner, more readable, and declarative code compared to traditional loops.</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-semibold text-purple-800">Key Benefits</h3>
              <p className="text-sm text-purple-700">Immutability, chainability, and functional programming style.</p>
            </div>
          </div>

          {/* Methods Grid */}
          {hoamMethods.map((section) => (
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
              <li>• Chain methods together for complex operations: <code className="bg-yellow-100 px-2 py-1 rounded">array.filter().map().reduce()</code></li>
              <li>• Higher order methods don't modify the original array (immutable) - always return new arrays</li>
              <li>• Use arrow functions for shorter, cleaner syntax</li>
              <li>• Combine with spread operator (...) for even more powerful operations</li>
              <li>• Always consider performance with large arrays - some methods are slower than traditional loops</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOAM;