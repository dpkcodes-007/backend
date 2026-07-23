// file: src/context/NewsContext.jsx
import React, { createContext, useState, useEffect, useMemo, useCallback } from 'react';
import initialNewsData  from '../data/NewsData';

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [bookmarks, setBookmarks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load initial data and bookmarks from localStorage
  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    setBookmarks(savedBookmarks);
    
    // Simulate loading
    setTimeout(() => {
      setNews(initialNewsData);
      setFilteredNews(initialNewsData);
      setLoading(false);
    }, 1000);

    // Check for dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Filter news based on search and category
  useEffect(() => {
    let filtered = news;
    
    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase().trim();
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term) ||
        item.author.toLowerCase().includes(term)
      );
    }
    
    setFilteredNews(filtered);
  }, [searchTerm, selectedCategory, news]);

  // Save bookmarks to localStorage
  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  // Toggle dark mode
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Toggle bookmark
  const toggleBookmark = useCallback((newsId) => {
    setBookmarks(prev => {
      if (prev.includes(newsId)) {
        return prev.filter(id => id !== newsId);
      } else {
        return [...prev, newsId];
      }
    });
  }, []);

  // Get category statistics
  const getCategoryStats = useMemo(() => {
    const stats = {};
    news.forEach(item => {
      stats[item.category] = (stats[item.category] || 0) + 1;
    });
    return stats;
  }, [news]);

  // Get trending news
  const trendingNews = useMemo(() => {
    return news.filter(item => item.trending);
  }, [news]);

  // Get latest news (sorted by date)
  const latestNews = useMemo(() => {
    return [...news].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [news]);

  // Get news by ID
  const getNewsById = useCallback((id) => {
    return news.find(item => item.id === parseInt(id));
  }, [news]);

  // Clear filters
  const clearFilters = useCallback(() => {
    setSearchTerm('');
    setSelectedCategory('All');
  }, []);

  const value = {
    news,
    filteredNews,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    bookmarks,
    toggleBookmark,
    darkMode,
    setDarkMode,
    loading,
    getCategoryStats,
    trendingNews,
    latestNews,
    getNewsById,
    clearFilters,
    categories: ['All', 'Technology', 'Sports', 'Business', 'Health', 'Entertainment', 'Science', 'World', 'Education', 'Politics', 'Finance']
  };

  return (
    <NewsContext.Provider value={value}>
      {children}
    </NewsContext.Provider>
  );
};