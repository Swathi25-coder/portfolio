export default function Experience() {
  const experiences = [
    {
      title: "Software Developer",
      company: "Tilicho Labs",
      location: "Visakhapatnam, India",
      period: "Aug 2022 – Aug 2025",
      description: "Frontend developer specializing in React.js and Next.js applications for diverse client projects.",
      achievements: [
        "Developed scalable UI using React & Next.js",
        "Integrated REST APIs for seamless data flow",
        "Built reusable component architecture",
        "Collaborated with UI/UX and backend teams",
        "Optimized application performance and loading speeds",
        "Implemented responsive design principles"
      ],
      technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "Ant Design","Android"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Work Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {index + 1}
                </div>
                <div className="flex-1 bg-slate-800 rounded-lg p-8 shadow-lg border border-slate-700">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">
                        {exp.title}
                      </h3>
                      <p className="text-xl text-white">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <p className="text-gray-400 font-medium">
                        {exp.period}
                      </p>
                      <p className="text-gray-500">
                        {exp.location}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-gray-300">
                          <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm border border-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
