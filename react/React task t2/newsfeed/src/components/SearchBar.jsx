// file: src/components/SearchBar.jsx
import React, { useState, useContext } from 'react';
import { FaSearch } from 'react-icons/fa';
import { NewsContext } from '../context/NewsContext';

const SearchBar = () => {
  const [localSearch, setLocalSearch] = useState('');
  const { setSearchTerm } = useContext(NewsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(localSearch);
  };

  const handleChange = (e) => {
    setLocalSearch(e.target.value);
    if (e.target.value === '') {
      setSearchTerm('');
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          placeholder="Search news by title, category, or author..."
          value={localSearch}
          onChange={handleChange}
          className="w-full px-6 py-4 pl-14 rounded-full border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:border-primary-500 transition-all duration-300 shadow-lg"
        />
        <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 btn-primary"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;