import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects, getProjectSlug } from '../data/projects'

function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 }
    }
  }

  const ProjectCard = ({ project, index }) => (
    <motion.div 
      variants={itemVariants}
      className="bg-gray-800/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
    >
      {/* Project Media */}
      <div className="relative h-64 overflow-hidden">
        {project.videos && project.videos.length > 0 ? (
          <video 
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={project.videos[0]} type="video/mp4" />
          </video>
        ) : project.images && project.images.length > 0 ? (
          <img 
            src={project.images[0]} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
            <span className="text-6xl"></span>
          </div>
        )}
        <div className="absolute inset-0"></div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-blue-400 font-medium">{project.subtitle}</p>
          </div>
        </div>

        <p className="text-gray-300 mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Key Features */}
        {project.key_features && (
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Features</h4>
            <ul className="space-y-2">
              {project.key_features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="text-gray-300 text-sm flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  {feature.split(':')[0]}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-blue-400 mb-3">Tech Stack:</h4>
          <div className="space-y-4">
            {Object.entries(project.tech_stack).map(([category, techs]) => (
              <div key={category} className="flex flex-wrap gap-2">
                {techs.map((tech, idx) => (
                  <span 
                    key={idx}
		    className="bg-cyan-400/10 text-cyan-400 px-4 py-1 rounded-2xl text-sm border border-cyan-400/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          {project.github_link && (
            <a
              href={project.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-lg text-center font-medium transition-colors duration-300"
            >
              GitHub
            </a>
          )}
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg text-center font-medium transition-colors duration-300"
            >
              Live Demo
            </a>
          )}
          <Link
            to={`/projects/${getProjectSlug(project.title)}`}
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg text-center font-medium transition-colors duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="projects" className="py-25 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8 }}
          className="text-center mb-16"
        >
	  <div className="">
    	    <h2 className="text-5xl mb-6 text-center bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent font-bold">
              My Projects
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
	  </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
