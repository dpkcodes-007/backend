// file: src/pages/Categories.jsx
import React, { useContext } from 'react';
import { NewsContext } from '../context/NewsContext';
import CategoryFilter from '../components/CategoryFilter';
import NewsCard from '../components/NewsCard';

const Categories = () => {
  const { filteredNews } = useContext(NewsContext);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-center mb-8 dark:text-white">
          Browse by Category
        </h1>

        <CategoryFilter />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filteredNews.length > 0 ? (
            filteredNews.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <h3 className="text-2xl font-semibold text-gray-600 dark:text-gray-400">
                No News Available
              </h3>
              <p className="text-gray-500 dark:text-gray-500 mt-2">
                Try selecting a different category.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;