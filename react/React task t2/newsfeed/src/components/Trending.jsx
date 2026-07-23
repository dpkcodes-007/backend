// file: src/components/Trending.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NewsContext } from '../context/NewsContext';
import { FaFire } from 'react-icons/fa';

const Trending = () => {
  const { trendingNews } = useContext(NewsContext);

  if (trendingNews.length === 0) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <FaFire className="text-red-500 text-2xl" />
          <h2 className="text-3xl font-bold">Trending Now</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingNews.slice(0, 4).map((item) => (
            <Link
              key={item.id}
              to={`/news/${item.id}`}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 card-hover"
            >
              <div className="flex items-start gap-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <h4 className="font-semibold text-sm line-clamp-2 mb-1">
                    {item.title}
                  </h4>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {item.category}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;