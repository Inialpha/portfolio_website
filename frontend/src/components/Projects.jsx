function Projects() {
  const projects = [
    {
      icon: '📱',
      title: 'TaskFlow',
      description: 'A collaborative task management platform with real-time updates, drag-and-drop interface, and team analytics. Built for modern remote teams.',
      techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      liveDemo: '#',
      github: '#'
    },
    {
      icon: '🌐', 
      title: 'EcoTracker',
      description: 'Carbon footprint tracking app with ML-powered insights and gamification. Helps users reduce their environmental impact through data-driven recommendations.',
      techStack: ['Vue.js', 'Python', 'TensorFlow', 'AWS'],
      liveDemo: '#',
      github: '#'
    },
    {
      icon: '💡',
      title: 'DevTools Suite', 
      description: 'Collection of developer productivity tools including API testing, regex builder, and JSON formatter. Used by 10k+ developers monthly.',
      techStack: ['TypeScript', 'Next.js', 'Tailwind', 'Vercel'],
      liveDemo: '#',
      github: '#'
    }
  ]

  return (
    <section id="projects" className="py-25 px-12 animate-on-scroll">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl mb-16 text-center bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent font-bold">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-black/30 border border-gray-700"
            >
              <div className="h-50 bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center text-5xl">
                {project.icon}
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-5 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-cyan-400/10 text-cyan-400 px-4 py-1 rounded-2xl text-sm border border-cyan-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.liveDemo} 
                    className="text-cyan-400 font-medium transition-colors duration-300 hover:text-white"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.github} 
                    className="text-cyan-400 font-medium transition-colors duration-300 hover:text-white"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects