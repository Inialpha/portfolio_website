function About() {
  return (
    <section id="about" className="py-25 px-12 animate-on-scroll">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl mb-16 text-center bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent font-bold">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16 items-center">
          <div className="md:col-span-2 flex justify-center">
            <div className="w-75 h-75 rounded-3xl bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center text-8xl transition-transform duration-300 hover:scale-105 hover:rotate-2 shadow-2xl shadow-black/30">
              ‍
            </div>
          </div>
          <div className="md:col-span-3 text-gray-400 text-xl leading-relaxed space-y-6">
            <p>
              I'm a passionate software engineer with 5+ years of experience building scalable web applications and distributed systems. I love turning complex problems into elegant solutions and creating user experiences that make a difference.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community through blog posts and speaking engagements.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
