function Skills() {
  const skills = [
    {
      icon: '🚀',
      title: 'Frontend Development',
      description: 'React, Vue.js, TypeScript, Next.js, Tailwind CSS'
    },
    {
      icon: '⚡',
      title: 'Backend Development', 
      description: 'Node.js, Python, Go, PostgreSQL, MongoDB, Redis'
    },
    {
      icon: '☁️',
      title: 'Cloud & DevOps',
      description: 'AWS, Docker, Kubernetes, CI/CD, Terraform'
    },
    {
      icon: '🤖',
      title: 'Machine Learning',
      description: 'TensorFlow, PyTorch, Scikit-learn, Data Analysis'
    }
  ]

  return (
    <section id="skills" className="py-25 px-12 animate-on-scroll">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl mb-16 text-center bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent font-bold">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-gray-800 p-8 rounded-3xl text-center transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-500/10 border border-gray-700 hover:border-cyan-400"
            >
              <div className="w-16 h-16 mx-auto mb-5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{skill.title}</h3>
              <p className="text-gray-400 leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills