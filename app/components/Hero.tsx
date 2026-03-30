export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="text-center px-4 py-16 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Hi, I'm <span className="text-blue-400">CH.Swathi </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Frontend Developer
        </p>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
I develop scalable web applications using React.js, Next.js, and Tailwind CSS, with a focus on UI/UX and performance. I also have experience in Android development using Java and Kotlin.        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 border-2 border-blue-600 text-blue-400 rounded-full hover:bg-blue-600/10 transition-colors font-medium"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
