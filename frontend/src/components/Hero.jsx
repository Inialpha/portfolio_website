function Hero() {
  return (
    <section id="home" className="h-screen flex items-center justify-center text-center relative overflow-hidden">
      <div className="max-w-4xl px-5 animate-fade-in-up">
        <h1 className="text-6xl md:text-8xl font-black mb-5 leading-tight bg-gradient-to-r from-white via-cyan-400 to-indigo-500 bg-clip-text text-transparent">
          Inimfon Ebong
        </h1>
        <p className="text-2xl text-gray-400 mb-8 font-light">
          Full-Stack Software Engineer & Problem Solver
        </p>
        <a 
          href="#projects" 
          className="inline-block py-4 px-10 bg-gradient-to-r from-indigo-500 to-purple-600 text-white no-underline rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/40"
        >
          View My Work
        </a>
      </div>
    </section>
  )
}

export default Hero
