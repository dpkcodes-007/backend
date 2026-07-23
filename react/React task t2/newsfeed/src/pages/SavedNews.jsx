// file: src/pages/SavedNews.jsx
import React, { useContext, useMemo } from 'react';
import { NewsContext } from '../context/NewsContext';
import NewsCard from '../components/NewsCard';
import EmptyState from '../components/EmptyState';

const SavedNews = () => {
  const { news, bookmarks } = useContext(NewsContext);

  const savedNews = useMemo(() => {
    return news.filter(item => bookmarks.includes(item.id));
  }, [news, bookmarks]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-center mb-8 dark:text-white">
          📌 Saved News
        </h1>

        {savedNews.length === 0 ? (
          <EmptyState
            message="You haven't saved any news articles yet. Start exploring and bookmark your favorite stories!"
            actionText="Browse News"
            actionLink="/"
          />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {savedNews.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedNews;