// file: src/components/NewsCard.jsx
import React, { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FaBookmark, FaRegBookmark, FaHeart, FaEye, FaUser, FaCalendarAlt } from 'react-icons/fa';
import { NewsContext } from '../context/NewsContext';

const NewsCard = ({ item }) => {
  const { bookmarks, toggleBookmark } = useContext(NewsContext);
  const isBookmarked = bookmarks.includes(item.id);

  const formattedDate = useMemo(() => {
    const date = new Date(item.date);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }, [item.date]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden card-hover">
      <Link to={`/news/${item.id}`}>
        <div className="relative">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover"
          />
          {item.trending && (
            <span className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              🔥 Trending
            </span>
          )}
        </div>
      </Link>
      
      <div className="p-5">
        <Link to={`/news/${item.id}`}>
          <h3 className="text-xl font-bold mb-2 hover:text-primary-500 transition-colors line-clamp-2">
            {item.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
          {item.description}
        </p>
        
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-3">
          <span className="flex items-center gap-1">
            <FaUser /> {item.author}
          </span>
          <span className="flex items-center gap-1">
            <FaCalendarAlt /> {formattedDate}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <Link to={`/news/${item.id}`}>
            <span className="text-primary-500 hover:text-primary-600 font-semibold text-sm">
              Read More →
            </span>
          </Link>
          
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
              <FaHeart className="text-red-500" /> {item.likes}
            </span>
            <span className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
              <FaEye /> {item.views}
            </span>
            <button
              onClick={() => toggleBookmark(item.id)}
              className="text-xl hover:scale-110 transition-transform"
            >
              {isBookmarked ? (
                <FaBookmark className="text-primary-500" />
              ) : (
                <FaRegBookmark className="text-gray-400 hover:text-primary-500" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;