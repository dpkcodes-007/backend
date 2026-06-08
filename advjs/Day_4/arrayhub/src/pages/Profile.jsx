import Navbar from "../components/NavBar";

const Profile = () => {
  const skills = [
    "JavaScript", "React.js", "Node.js", "Python",
    "HTML/CSS", "Tailwind CSS", "MongoDB", "Express.js"
  ];

  const arrayProjects = [
    "Array Method Visualizer",
    "Interactive Sorting Algorithm",
    "Data Structure Explorer",
    "Array Challenge Solver"
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 text-purple-500 opacity-10 text-9xl">[ ]</div>
          <div className="absolute bottom-20 right-10 text-blue-500 opacity-10 text-9xl">{ }</div>
          <div className="absolute top-40 right-20 text-green-500 opacity-10 text-8xl">( )</div>
          <div className="absolute bottom-40 left-20 text-yellow-500 opacity-10 text-8xl">→</div>
        </div>

        <div className="flex justify-center items-center p-10 relative z-10">
          <div className="max-w-6xl w-full">
            {/* Main Profile Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20">
              <div className="relative">
                {/* Cover image with array pattern */}
                <div className="h-48 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <div className="text-7xl font-mono">
                      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>
                
                {/* Profile Image */}
                <div className="absolute -bottom-16 left-8">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-1 rounded-full">
                    <div className="bg-white rounded-full p-2">
                      <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-6xl">👨‍💻</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="pt-20 px-8 pb-8">
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div>
                    <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                      Deepak
                      <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
                        React Developer
                      </span>
                    </h1>
                    <div className="flex flex-wrap gap-4 text-gray-300 mb-4">
                      <div className="flex items-center gap-2">
                        <span>📍</span>
                        <span>India</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>📅</span>
                        <span>Joined 2024</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>🎓</span>
                        <span>Computer Science</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex gap-3">
                    <a href="#" className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-all duration-300">
                      GitHub
                    </a>
                    <a href="#" className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-all duration-300">
                      LinkedIn
                    </a>
                    <a href="#" className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-all duration-300">
                      Twitter
                    </a>
                    <a href="#" className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-all duration-300">
                      Email
                    </a>
                  </div>
                </div>

                {/* Bio */}
                <div className="mt-6 bg-white/5 rounded-xl p-6 border border-white/10">
                  <p className="text-gray-300 leading-relaxed">
                    Passionate React Developer with a love for creating interactive learning experiences. 
                    I believe in making complex concepts simple and accessible through visual demonstrations 
                    and hands-on practice. Currently focused on building educational tools for JavaScript arrays.
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-white/10 text-center hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl mb-3">📚</div>
                    <h3 className="text-3xl font-bold text-white">20+</h3>
                    <p className="text-gray-400">Array Methods</p>
                    <p className="text-sm text-blue-400 mt-2">Mastered & Documented</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-white/10 text-center hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl mb-3">💻</div>
                    <h3 className="text-3xl font-bold text-white">50+</h3>
                    <p className="text-gray-400">Code Examples</p>
                    <p className="text-sm text-purple-400 mt-2">Interactive Demos</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-xl p-6 border border-white/10 text-center hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl mb-3">🧠</div>
                    <h3 className="text-3xl font-bold text-white">1000+</h3>
                    <p className="text-gray-400">Learners</p>
                    <p className="text-sm text-green-400 mt-2">Helped & Growing</p>
                  </div>
                </div>

                {/* Skills and Projects */}
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  {/* Skills Section */}
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <span>💻</span>
                      Technical Skills
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-gray-300 rounded-full text-sm border border-white/10 hover:scale-105 transition-transform duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    {/* Array Expertise */}
                    <div className="mt-6">
                      <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <span>📊</span>
                        Array Expertise:
                      </h3>
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between text-sm text-gray-400 mb-1">
                            <span>Normal Methods</span>
                            <span>100%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full w-full"></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm text-gray-400 mb-1">
                            <span>Higher Order Methods</span>
                            <span>95%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-purple-500 h-2 rounded-full" style={{width: '95%'}}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm text-gray-400 mb-1">
                            <span>Array Algorithms</span>
                            <span>85%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Projects Section */}
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <span>🚀</span>
                      Featured Projects
                    </h2>
                    <div className="space-y-3">
                      {arrayProjects.map((project, index) => (
                        <div key={index} className="group">
                          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-gray-300">{project}</span>
                            </div>
                            <span className="text-gray-500 group-hover:text-blue-400 transition-colors">→</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
                      <p className="text-sm text-gray-300">
                        🎯 Currently working on: <span className="text-blue-400 font-semibold">Array Learning Hub</span> - 
                        An interactive platform to master JavaScript arrays through visual learning.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="mt-8 text-center">
                  <div className="inline-block bg-white/5 rounded-xl px-6 py-4 border border-white/10">
                    <p className="text-gray-300 italic">
                      "Arrays are not just data structures, they're the building blocks of powerful applications.
                      Master them, and you master JavaScript!"
                    </p>
                    <p className="text-blue-400 mt-2">- Deepak</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;