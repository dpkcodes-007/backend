import React from "react";
import jsImage from "./assets/js.png";

// ---------- SVG Icons (3D style) ----------
const icons = {
  variables: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-cyan-400 drop-shadow-[0_6px_8px_rgba(34,211,238,0.4)]">
      <path d="M4 7L8 3L12 7L8 11L4 7Z" fill="#67E8F9" stroke="#06B6D4" />
      <path d="M12 7L16 3L20 7L16 11L12 7Z" fill="#A5F3FC" stroke="#06B6D4" />
      <path d="M8 11L12 15L16 11L12 7L8 11Z" fill="#22D3EE" stroke="#06B6D4" />
      <circle cx="12" cy="15" r="2" fill="#CFFAFE" stroke="#06B6D4" />
    </svg>
  ),
  functions: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-amber-400 drop-shadow-[0_6px_8px_rgba(251,191,36,0.4)]">
      <path d="M5 6L9 4V20L5 18" stroke="#FBBF24" fill="#FDE68A" />
      <path d="M9 4L19 8V16L9 20" stroke="#FBBF24" fill="#FCD34D" />
      <circle cx="15" cy="12" r="2" fill="#FEF3C7" stroke="#FBBF24" />
      <path d="M19 8L21 10L19 12" stroke="#FBBF24" />
      <path d="M19 16L21 14L19 12" stroke="#FBBF24" />
    </svg>
  ),
  loops: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-emerald-400 drop-shadow-[0_6px_8px_rgba(52,211,153,0.4)]">
      <circle cx="12" cy="12" r="8" stroke="#34D399" fill="#6EE7B7" />
      <path d="M12 4L12 12L16 16" stroke="#34D399" />
      <path d="M12 20L12 12L8 8" stroke="#34D399" />
      <circle cx="12" cy="12" r="2" fill="#A7F3D0" stroke="#34D399" />
      <path d="M4 12H8" stroke="#34D399" />
      <path d="M20 12H16" stroke="#34D399" />
    </svg>
  ),
  arrays: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-rose-400 drop-shadow-[0_6px_8px_rgba(251,113,133,0.4)]">
      <rect x="3" y="5" width="18" height="14" rx="2" fill="#FDA4AF" stroke="#FB7185" />
      <line x1="8" y1="9" x2="16" y2="9" stroke="#BE123C" />
      <line x1="8" y1="12" x2="14" y2="12" stroke="#BE123C" />
      <line x1="8" y1="15" x2="16" y2="15" stroke="#BE123C" />
      <circle cx="18" cy="9" r="1.5" fill="#FECDD3" stroke="#FB7185" />
      <circle cx="18" cy="12" r="1.5" fill="#FECDD3" stroke="#FB7185" />
      <circle cx="18" cy="15" r="1.5" fill="#FECDD3" stroke="#FB7185" />
    </svg>
  ),
  objects: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-violet-400 drop-shadow-[0_6px_8px_rgba(167,139,250,0.4)]">
      <rect x="4" y="4" width="16" height="16" rx="3" fill="#C4B5FD" stroke="#A78BFA" />
      <rect x="8" y="8" width="8" height="8" rx="2" fill="#A78BFA" stroke="#8B5CF6" />
      <circle cx="12" cy="12" r="2" fill="#DDD6FE" stroke="#8B5CF6" />
      <line x1="12" y1="4" x2="12" y2="8" stroke="#8B5CF6" />
      <line x1="12" y1="16" x2="12" y2="20" stroke="#8B5CF6" />
      <line x1="4" y1="12" x2="8" y2="12" stroke="#8B5CF6" />
      <line x1="16" y1="12" x2="20" y2="12" stroke="#8B5CF6" />
    </svg>
  ),
  promises: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-sky-400 drop-shadow-[0_6px_8px_rgba(56,189,248,0.4)]">
      <path d="M12 3L12 9" stroke="#38BDF8" />
      <path d="M12 15L12 21" stroke="#38BDF8" />
      <path d="M5 8L9 12L5 16" stroke="#38BDF8" fill="#7DD3FC" />
      <path d="M19 8L15 12L19 16" stroke="#38BDF8" fill="#7DD3FC" />
      <circle cx="12" cy="12" r="3" fill="#BAE6FD" stroke="#38BDF8" />
    </svg>
  ),
  react: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-blue-400 drop-shadow-[0_6px_8px_rgba(96,165,250,0.4)]">
      <circle cx="12" cy="12" r="3" fill="#93C5FD" stroke="#60A5FA" />
      <path d="M12 5C7.5 5 4 8 4 12C4 16 7.5 19 12 19C16.5 19 20 16 20 12C20 8 16.5 5 12 5Z" stroke="#60A5FA" fill="none" />
      <path d="M8 7.5C5.5 10.5 5.5 13.5 8 16.5C10.5 19.5 13.5 19.5 16 16.5C18.5 13.5 18.5 10.5 16 7.5" stroke="#60A5FA" fill="none" />
      <path d="M8 16.5C5.5 13.5 5.5 10.5 8 7.5" stroke="#60A5FA" fill="none" />
      <path d="M16 16.5C18.5 13.5 18.5 10.5 16 7.5" stroke="#60A5FA" fill="none" />
    </svg>
  ),
  useState: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-fuchsia-400 drop-shadow-[0_6px_8px_rgba(232,121,249,0.4)]">
      <rect x="4" y="6" width="16" height="12" rx="2" fill="#F0ABFC" stroke="#E879F9" />
      <circle cx="9" cy="12" r="2" fill="#FAE8FF" stroke="#E879F9" />
      <circle cx="15" cy="12" r="2" fill="#FAE8FF" stroke="#E879F9" />
      <path d="M11 12L13 12" stroke="#E879F9" />
      <path d="M9 6L9 9" stroke="#E879F9" />
      <path d="M15 6L15 9" stroke="#E879F9" />
      <path d="M9 15L9 18" stroke="#E879F9" />
      <path d="M15 15L15 18" stroke="#E879F9" />
    </svg>
  )
};

// ---------- Custom Logo SVG ----------
const LogoIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9 drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">
    <defs>
      <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#60A5FA" />
        <stop offset="50%" stopColor="#A78BFA" />
        <stop offset="100%" stopColor="#F472B6" />
      </linearGradient>
      <filter id="logoGlow">
        <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#818CF8" floodOpacity="0.5"/>
      </filter>
    </defs>
    {/* Star/Comet body */}
    <path d="M20 4L14 16L8 28L20 22L32 28L26 16L20 4Z" 
          fill="url(#logoGrad)" filter="url(#logoGlow)" stroke="#93C5FD" strokeWidth="1.5"/>
    {/* Inner star */}
    <path d="M20 8L17 15L14 22L20 19L26 22L23 15L20 8Z" 
          fill="#E0E7FF" stroke="#60A5FA" strokeWidth="1.2"/>
    {/* Nova burst lines */}
    <line x1="20" y1="2" x2="20" y2="6" stroke="#FDE68A" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="20" y1="34" x2="20" y2="38" stroke="#FDE68A" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="4" y1="20" x2="8" y2="20" stroke="#FDE68A" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="32" y1="20" x2="36" y2="20" stroke="#FDE68A" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="10" y1="10" x2="12" y2="12" stroke="#93C5FD" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="30" y1="10" x2="28" y2="12" stroke="#93C5FD" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="10" y1="30" x2="12" y2="28" stroke="#93C5FD" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="30" y1="30" x2="28" y2="28" stroke="#93C5FD" strokeWidth="1.2" strokeLinecap="round"/>
    <circle cx="6" cy="8" r="1" fill="#FDE68A" />
    <circle cx="34" cy="6" r="0.8" fill="#FDE68A" />
    <circle cx="6" cy="32" r="0.8" fill="#93C5FD" />
    <circle cx="34" cy="34" r="1" fill="#93C5FD" />
  </svg>
);

const topics = [
  { id: 1, icon: icons.variables, title: "JavaScript Variables", description: "Learn about var, let, const and how variables work in JavaScript." },
  { id: 2, icon: icons.functions, title: "Functions", description: "Understand function declaration, expression and arrow functions." },
  { id: 3, icon: icons.loops, title: "Loops", description: "Master for, while, do-while and forEach loops with examples." },
  { id: 4, icon: icons.arrays, title: "Arrays", description: "Learn array methods like map, filter, reduce, find and more." },
  { id: 5, icon: icons.objects, title: "Objects", description: "Understand objects, properties, methods and destructuring." },
  { id: 6, icon: icons.promises, title: "Promises", description: "Learn asynchronous JavaScript using Promises and async/await." },
  { id: 7, icon: icons.react, title: "React Basics", description: "Understand components, props and JSX in React." },
  { id: 8, icon: icons.useState, title: "useState Hook", description: "Learn how to manage state using the useState hook." }
];

// ---------- App Component ----------
function App() {
  const handleReadMore = (id) => {
    alert(`Read More clicked for Topic ${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
      {/* ================= Navbar ================= */}
      <nav className="bg-gradient-to-r from-gray-900/95 via-slate-900/95 to-gray-900/95 backdrop-blur-xl shadow-2xl sticky top-0 z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <LogoIcon />
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">
              CodeNova
            </h1>
          </div>

          <div className="flex gap-8 text-white/80 font-medium text-lg">
            <a href="#" className="hover:text-blue-400 transition duration-300 transform hover:scale-105 drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
              Home
            </a>
            <a href="#topics" className="hover:text-blue-400 transition duration-300 transform hover:scale-105 drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
              Topics
            </a>
          </div>
        </div>
      </nav>

      {/* ================= Hero Section ================= */}
      <section className="relative bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950 text-white py-28 overflow-hidden shadow-2xl">
        {/* Animated background orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse delay-500"></div>

        <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10 relative z-10">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-semibold mb-6 backdrop-blur-sm">
              🚀 Start Your Journey
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-[0_8px_12px_rgba(0,0,0,0.4)]">
              Master <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">JavaScript</span> <br /> <span className="text-white">&amp; React</span>
            </h2>

            <p className="text-lg text-gray-300 mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)] max-w-xl">
              Master JavaScript and React from beginner to advanced level with
              easy explanations, practical examples, projects, and interview
              questions.
            </p>

            <button className="group bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold px-10 py-4 rounded-full shadow-2xl hover:shadow-[0_20px_40px_rgba(99,102,241,0.3)] hover:scale-105 transition duration-300 transform hover:-translate-y-1">
              Get Started
              <span className="inline-block ml-2 group-hover:translate-x-1 transition">→</span>
            </button>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
              <img
                src={jsImage}
                alt="JavaScript"
                className="relative w-72 md:w-[450px] drop-shadow-[0_30px_40px_rgba(0,0,0,0.5)] transform hover:scale-105 transition duration-700 hover:rotate-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= Topics ================= */}
      <section id="topics" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
              Explore Topics
            </h2>
            <p className="text-gray-400 text-lg">
              Choose a topic and start learning.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {topics.map((topic) => (
              <div
                key={topic.id}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 hover:-translate-y-3 transition-all duration-300 border border-white/10 hover:border-blue-500/30 shadow-xl hover:shadow-2xl"
                style={{
                  boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05) inset"
                }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition duration-500"></div>
                
                <div className="relative z-10">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition duration-300 drop-shadow-[0_8px_12px_rgba(0,0,0,0.2)]">
                    {topic.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition">
                    {topic.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {topic.description}
                  </p>

                  <button
                    onClick={() => handleReadMore(topic.id)}
                    className="relative bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-2.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-0.5 font-medium border border-white/10 hover:border-transparent"
                  >
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Footer ================= */}
      <footer className="bg-gradient-to-r from-gray-900 to-slate-900 text-white/60 py-8 text-center border-t border-white/5 shadow-[0_-10px_30px_rgba(0,0,0,0.2)]">
        <p className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
          © 2026 <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">CodeNova</span> Learning Platform. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;