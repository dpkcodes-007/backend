// file: src/pages/Home.jsx
import React, { useContext, useMemo } from 'react';
import { NewsContext } from '../context/NewsContext';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import NewsCard from '../components/NewsCard';
import Statistics from '../components/Statistics';
import Trending from '../components/Trending';
import Loader from '../components/Loader';

const Home = () => {
  const { filteredNews, trendingNews, loading } = useContext(NewsContext);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <Hero />

      {/* Statistics */}
      <Statistics />

      {/* Search */}
      <SearchBar />

      {/* Category Filter */}
      <CategoryFilter />

      {/* Trending News */}
      <Trending />

      {/* Latest News */}
      <div className="max-w-7xl mx-auto px-6 mt-10 pb-20">
        <h2 className="text-3xl font-bold mb-6 dark:text-white">
          📰 Latest News
        </h2>

        {filteredNews.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-semibold text-gray-600 dark:text-gray-400">
              No News Found
            </h3>
            <p className="text-gray-500 dark:text-gray-500 mt-2">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;