import Image from "next/image";

export default function Projects() {
  const projects = [
    // {
    //   title: "MP Government – Case Management Dashboard",
    //   description: "Centralized system for managing legal and departmental cases across government departments.",
    //   technologies: ["React", "Next.js", "Tailwind", "REST APIs"],
    //   highlights: [
    //     "Case calendar for critical cases",
    //     "Search & filtering system",
    //     "WhatsApp notifications",
    //     "Secure document upload"
    //   ],
    //   // projectPreviewImage: "/cricclubs.png",
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com/example"
    // },
    {
      title: "CricClubs – Cricket Technology Platform",
      description: "Comprehensive cricket management platform with advanced features for players and organizers.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      highlights: [
        "Reusable UI components",
        "App Router with SSR/SSG",
        "Performance optimization",
        "Real-time match updates"
      ],
      projectPreviewImage: "/cricclubs.png",
      projectName: "CricClubs",
      liveUrl: "https://example.com",
      // githubUrl: "https://github.com/example"
    },
    {
      title: "Lokal – Hyperlocal Community Platform",
      description: "Community-driven platform connecting local businesses and residents with comprehensive services.",
      technologies: ["Next.js", "React", "Tailwind", "Razorpay API"],
      highlights: [
        "Razorpay integration",
        "Feedback form",
        "Document verification flow",
        "B2B job features"
      ],
      projectPreviewImage: "/lokal.png",
      liveUrl: "https://drive.google.com/file/d/11-bSj07Y2ooK0d-zv3eYkCQSqwMiwjMW/view?usp=sharing",
      // githubUrl: "https://github.com/example"
    },
    {
      title: "Freyr Energy – CRM Dashboard",
      description: "Advanced CRM solution for solar energy companies with lead management and sales tracking.",
      technologies: ["React", "Node.js", "PostgreSQL", "Chart.js"],
      highlights: [
        "Telecaller lead tracking",
        "Sales dashboard",
        "Customer interaction logs",
        "Analytics and reporting"
      ],
      projectPreviewImage: "/freyr.png",
      liveUrl: "https://drive.google.com/file/d/1rOhWUEO-L-DRicZEgJ98IsxFVoBq1dTq/view?usp=sharing",
      // githubUrl: "https://github.com/example"
    },
    {
      title: "Grit Financial",
      description: "Grit is a free financial wellness platform that gives you better ways to manage your finances. Our tools and resources empower you to pay bills on time.",
      technologies: ["Android", "MVI Architecture", "XML", "Firebase Integration"],
      highlights: [
        "Transfers with Western Union",
        "Transfers with Moneygram",
        "Add Money and Send Money",
        "Push Notifications"
      ],
      projectPreviewImage: "/grit.png",
      liveUrl: "https://drive.google.com/file/d/1pYzBCfykX78M8W9T-n-bfK-QFUGR-haR/view?usp=sharing",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-slate-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-700 hover:border-blue-600/50"
            >
              <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-2">
                    {project.projectPreviewImage ? (
                      <Image 
                        src={project.projectPreviewImage} 
                        alt={""} 
                        width={100} 
                        height={100}
                        className="rounded-lg"
                      />
                    ) : (
                      <div></div>
                    )}
                  </div>
                  <p className="text-lg">{project.projectName}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded text-xs border border-blue-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">
                    Key Features:
                  </h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-center">
                        <span className="w-1 h-1 bg-green-400 rounded-full mr-2"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    Live Demo
                  </a>
                  {/* <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 border border-blue-600 text-blue-400 rounded hover:bg-blue-600/10 transition-colors text-sm font-medium"
                  >
                    View Code
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
