// file: src/components/Statistics.jsx
import React, { useContext, useMemo } from 'react';
import { NewsContext } from '../context/NewsContext';
import { FaNewspaper, FaBookmark, FaTags, FaFire } from 'react-icons/fa';

const Statistics = () => {
  const { news, bookmarks, getCategoryStats, trendingNews } = useContext(NewsContext);

  const stats = useMemo(() => [
    {
      id: 1,
      icon: <FaNewspaper className="text-3xl" />,
      label: 'Total News',
      value: news.length,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      icon: <FaBookmark className="text-3xl" />,
      label: 'Bookmarks',
      value: bookmarks.length,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 3,
      icon: <FaTags className="text-3xl" />,
      label: 'Categories',
      value: Object.keys(getCategoryStats).length,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 4,
      icon: <FaFire className="text-3xl" />,
      label: 'Trending',
      value: trendingNews.length,
      color: 'from-red-500 to-red-600'
    }
  ], [news.length, bookmarks.length, getCategoryStats, trendingNews.length]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className={`bg-gradient-to-r ${stat.color} rounded-xl p-4 md:p-6 text-white shadow-lg transform hover:scale-105 transition-all duration-300`}
          >
            <div className="flex items-center gap-3">
              {stat.icon}
              <div>
                <p className="text-2xl md:text-3xl font-bold">{stat.value}</p>
                <p className="text-xs md:text-sm opacity-90">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;