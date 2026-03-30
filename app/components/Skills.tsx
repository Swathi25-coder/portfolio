export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Ant Design"]
    },
    {
      title: "State Management", 
      skills: ["Zustand", "Redux"]
    },
    {
      title: "Web Concepts",
      skills: ["REST APIs", "SSR", "CSR", "SSG"]
    },
    {
      title: "Development",
      skills: ["Performance Optimization", "Agile", "Team Collaboration"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-600/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">
            Core Competencies
          </h3>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { name: "Frontend Development", level: 95 },
              { name: "React.js & Next.js", level: 90 },
              { name: "Performance Optimization", level: 85 },
              { name: "UI/UX Problem Solving", level: 80 },
              { name: "Android Development", level: 75 }
            ].map((skill, index) => (
              <div key={index} className="text-left">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300 font-medium">
                    {skill.name}
                  </span>
                  <span className="text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3">
                  <div 
                    className="bg-blue-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
