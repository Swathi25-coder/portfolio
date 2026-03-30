export default function Achievements() {
  const achievements = [
    {
      title: "Hack the Flow Participant",
      organization: "AI Productivity Tools for Developers",
      description: "Participated in hackathon focused on developing innovative AI-powered productivity tools for developers, exploring cutting-edge solutions for enhancing development workflows.",
      date: "2024",
      type: "hackathon"
    }
  ];

  const interests = [
    { name: "AI & Machine Learning", icon: "🤖", description: "Exploring AI applications in web development" },
    { name: "Open Source", icon: "🌍", description: "Contributing to community projects" },
    { name: "Performance Optimization", icon: "⚡", description: "Optimizing web application performance" },
    { name: "UI/UX Design", icon: "🎨", description: "Creating intuitive user interfaces" },
    { name: "Music", icon: "🎵", description: "Feel the music, hear my soul" }
  ];
  return (
    <section id="achievements" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Achievements & Interests
        </h2>
        
        <div className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-slate-900 rounded-lg p-6 shadow-lg border border-slate-700 hover:border-blue-600/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mr-4 bg-blue-600/20 text-blue-400">
                    🏆
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-blue-400">
                      {achievement.organization}
                    </p>
                  </div>
                </div>
                <p className="text-gray-400 mb-3 text-sm leading-relaxed">
                  {achievement.description}
                </p>
                <p className="text-xs text-gray-500">
                  {achievement.date}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-center text-white mb-12">
            Personal Interests
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-lg p-6 text-center border border-slate-700 hover:border-blue-600/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{interest.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {interest.name}
                </h4>
                <p className="text-gray-400 text-sm">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Always Learning, Always Growing
            </h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              I believe in continuous improvement and staying curious. Whether it's learning a new technology, 
              contributing to innovative projects, or exploring creative solutions, I'm always seeking opportunities to grow as a developer.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">
                🚀 Innovation
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">
                💡 Problem Solving
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">
                🌱 Growth
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">
                🤝 Collaboration
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
