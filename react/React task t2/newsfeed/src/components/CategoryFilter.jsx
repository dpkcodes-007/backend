// file: src/components/CategoryFilter.jsx
import React, { useContext } from 'react';
import { NewsContext } from '../context/NewsContext';

const CategoryFilter = () => {
  const { categories, selectedCategory, setSelectedCategory } = useContext(NewsContext);

  return (
    <div className="max-w-7xl mx-auto px-6 py-4">
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              selectedCategory === cat
                ? 'bg-primary-500 text-white shadow-lg transform scale-105'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;