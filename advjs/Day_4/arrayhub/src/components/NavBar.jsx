import { Link, useLocation } from "react-router-dom";
import { 
  FaHome, 
  FaBook, 
  FaBolt, 
  FaUser, 
  FaCode,
  FaLayerGroup,
  FaGraduationCap
} from "react-icons/fa";
import { useState } from "react";

const NavBar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", name: "Home", icon: <FaHome />, color: "hover:text-blue-400" },
    { path: "/normal", name: "Normal Methods", icon: <FaBook />, color: "hover:text-green-400" },
    { path: "/hoam", name: "Higher Order", icon: <FaBolt />, color: "hover:text-yellow-400" },
    { path: "/profile", name: "Profile", icon: <FaUser />, color: "hover:text-purple-400" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo Section */}
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg">
                <FaLayerGroup className="text-white text-xl" />
              </div>
              <div className="hidden md:block">
                <Link to="/" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Array Learning Hub
                </Link>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`
                    relative px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2
                    ${isActive(link.path) 
                      ? 'bg-white/10 text-white shadow-lg' 
                      : `text-gray-300 ${link.color}`
                    }
                    hover:scale-105 group
                  `}
                >
                  <span className="text-lg">{link.icon}</span>
                  <span className="font-medium">{link.name}</span>
                  
                  {/* Active Indicator */}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></span>
                  )}
                  
                  {/* Hover Effect */}
                  <span className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/5 transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* Right Section - Learning Badge */}
            <div className="hidden md:block">
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-3 py-1 rounded-full border border-blue-500/30">
                <div className="flex items-center gap-2 text-sm">
                  <FaGraduationCap className="text-blue-400" />
                  <span className="text-gray-300">Master Arrays</span>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-300 focus:outline-none"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="px-4 pt-2 pb-4 space-y-2 bg-slate-800/95 backdrop-blur-sm">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300
                  ${isActive(link.path) 
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white' 
                    : `text-gray-300 ${link.color}`
                  }
                  hover:bg-white/10 hover:translate-x-2
                `}
              >
                <span className="text-xl">{link.icon}</span>
                <span className="font-medium">{link.name}</span>
                {isActive(link.path) && (
                  <span className="ml-auto w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></span>
                )}
              </Link>
            ))}
            
            {/* Mobile Learning Badge */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-3 py-2 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <FaGraduationCap className="text-blue-400" />
                  <span>Master JavaScript Arrays</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Add custom styles for animations */}
      <style jsx>{`
        @keyframes glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default NavBar;