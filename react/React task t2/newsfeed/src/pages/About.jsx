// file: src/pages/About.jsx
import React from 'react';
import {
  FaNewspaper,
  FaReact,
  FaDatabase,
  FaSearch,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';

const About = () => {
  const features = [
    {
      id: 1,
      icon: <FaNewspaper />,
      title: "Latest News",
      desc: "Read the latest news from multiple categories including Technology, Sports, Business, and more."
    },
    {
      id: 2,
      icon: <FaSearch />,
      title: "Smart Search",
      desc: "Search news instantly using keywords. Filter by title, category, or author name."
    },
    {
      id: 3,
      icon: <FaDatabase />,
      title: "Local Storage",
      desc: "All your bookmarks are stored locally in your browser. Never lose your favorite articles."
    },
    {
      id: 4,
      icon: <FaReact />,
      title: "React Project",
      desc: "Built using React.js, Tailwind CSS, and modern web technologies for optimal performance."
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-center mb-4 dark:text-white">
          About <span className="gradient-text">News Feed</span>
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-lg mb-12 max-w-3xl mx-auto">
          This News Feed App is developed using React.js, React Router, Context API, 
          Local Storage, Tailwind CSS and React Icons. Stay informed with real-time 
          news from around the world.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 text-center card-hover"
            >
              <div className="text-5xl text-primary-500 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h2 className="text-xl font-bold dark:text-white mb-2">
                {item.title}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-5 dark:text-white">
              Technologies Used
            </h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-2">✅ React JS 18</li>
              <li className="flex items-center gap-2">✅ React Router DOM v6</li>
              <li className="flex items-center gap-2">✅ Tailwind CSS v3</li>
              <li className="flex items-center gap-2">✅ React Icons</li>
              <li className="flex items-center gap-2">✅ Context API</li>
              <li className="flex items-center gap-2">✅ Local Storage</li>
              <li className="flex items-center gap-2">✅ Vite Build Tool</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-5 dark:text-white">
              Features
            </h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-2">✅ Dynamic Rendering</li>
              <li className="flex items-center gap-2">✅ Search & Filter</li>
              <li className="flex items-center gap-2">✅ Bookmark System</li>
              <li className="flex items-center gap-2">✅ Dark Mode</li>
              <li className="flex items-center gap-2">✅ Responsive Design</li>
              <li className="flex items-center gap-2">✅ Trending News</li>
              <li className="flex items-center gap-2">✅ Statistics Dashboard</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl p-8 mt-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-2">Built with ❤️</h2>
          <p className="text-lg opacity-90">
            A modern news portal for the digital age
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="text-white hover:scale-110 transition-transform">
              <FaGithub size={24} />
            </a>
            <a href="#" className="text-white hover:scale-110 transition-transform">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-white hover:scale-110 transition-transform">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;