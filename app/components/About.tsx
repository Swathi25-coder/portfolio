export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a Frontend Developer with 3.5 years of experience specializing in React.js,Next.js and Android Development. I focus on building scalable, high-performance web applications with modern UI technologies like Tailwind CSS, Ant Design, and TypeScript.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I enjoy solving UI/UX problems, optimizing performance, and building reusable component-based systems. My approach combines technical expertise with a keen eye for user experience to create applications that are both powerful and intuitive.
            </p>
          </div>
          <div className="bg-slate-700 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Quick Facts
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                4+ years of professional experience
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Specialized in React.js & Next.js
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Performance optimization expert
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
