// file: src/pages/NewsDetails.jsx
import React, { useContext, useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { NewsContext } from '../context/NewsContext';
import {
  FaUser,
  FaCalendarAlt,
  FaArrowLeft,
  FaHeart,
  FaEye,
  FaBookmark,
  FaRegBookmark,
} from 'react-icons/fa';
import NewsCard from '../components/NewsCard';
import Loader from '../components/Loader';

const NewsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { news, bookmarks, toggleBookmark, loading } = useContext(NewsContext);

  const singleNews = useMemo(() => {
    return news.find((item) => item.id === parseInt(id));
  }, [news, id]);

  const relatedNews = useMemo(() => {
    if (!singleNews) return [];
    return news
      .filter(item => 
        item.id !== singleNews.id && 
        item.category === singleNews.category
      )
      .slice(0, 3);
  }, [news, singleNews]);

  const isBookmarked = bookmarks.includes(parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (!singleNews) {
    return (
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            News Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(singleNews.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300 py-10">
      <div className="max-w-5xl mx-auto px-6">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 mb-6 transition-colors"
        >
          <FaArrowLeft /> Back
        </button>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <img
            src={singleNews.image}
            alt={singleNews.title}
            className="w-full h-[400px] object-cover"
          />

          <div className="p-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-4 py-1 rounded-full text-sm font-semibold">
                {singleNews.category}
              </span>
              {singleNews.trending && (
                <span className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 px-4 py-1 rounded-full text-sm font-semibold">
                  🔥 Trending
                </span>
              )}
              <button
                onClick={() => toggleBookmark(singleNews.id)}
                className="ml-auto text-2xl hover:scale-110 transition-transform"
              >
                {isBookmarked ? (
                  <FaBookmark className="text-primary-500" />
                ) : (
                  <FaRegBookmark className="text-gray-400 hover:text-primary-500" />
                )}
              </button>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold dark:text-white mb-4">
              {singleNews.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-sm text-gray-500 dark:text-gray-400 mb-6">
              <span className="flex items-center gap-2">
                <FaUser /> {singleNews.author}
              </span>
              <span className="flex items-center gap-2">
                <FaCalendarAlt /> {formattedDate}
              </span>
              <span className="flex items-center gap-2">
                <FaHeart className="text-red-500" /> {singleNews.likes} Likes
              </span>
              <span className="flex items-center gap-2">
                <FaEye /> {singleNews.views} Views
              </span>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                {singleNews.description}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
        </div>

        {/* Related News */}
        {relatedNews.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold dark:text-white mb-6">
              Related News
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedNews.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsDetails;