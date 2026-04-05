import { motion } from 'framer-motion'

const skills = {
    "technical": {
      "backend": ["Python", "Node.js"],
      "frontend": ["JavaScript", "HTML", "CSS", "React.js", "Tailwind CSS"],
      "database": ["MySQL", "MongoDB", "Redis"],
      "server": ["Nginx"],
      "devops": ["Puppet", "Fabrics"]
    },
    "nonTechnical": ["Good communication", "Team work"]
}

function Skill() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const SkillCard = ({ title, skillsList, color }) => (
    <motion.div 
      variants={itemVariants}
      className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
    >
      <h3 className={`text-xl font-bold mb-4 ${color}`}>{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skillsList.map((skill, index) => (
          <motion.span
            key={index}
            whileHover={{ scale: 1.05 }}
            className="px-3 py-2 bg-blue-500/20 text-blue-300 rounded-lg text-sm font-medium border border-blue-500/30 hover:bg-blue-500/30 transition-all duration-300"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )

  return (
    <section id="skills" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-blue-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8"
        >
          {/* Technical Skills */}
          <div>
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold text-blue-400 mb-6 text-center"
            >
              Technical Skills
            </motion.h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SkillCard 
                title="Backend Development" 
                skillsList={skills.technical.backend} 
                color="text-green-400"
              />
              <SkillCard 
                title="Frontend Development" 
                skillsList={skills.technical.frontend} 
                color="text-purple-400"
              />
              <SkillCard 
                title="Database" 
                skillsList={skills.technical.database} 
                color="text-yellow-400"
              />
              <SkillCard 
                title="Server & Infrastructure" 
                skillsList={skills.technical.server} 
                color="text-red-400"
              />
              <SkillCard 
                title="DevOps & Automation" 
                skillsList={skills.technical.devops} 
                color="text-indigo-400"
              />
            </div>
          </div>

          {/* Soft Skills */}
          <motion.div variants={itemVariants} className="mt-8">
            <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">
              Soft Skills
            </h3>
            <div className="flex justify-center">
              <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
                <div className="flex flex-wrap gap-3 justify-center">
                  {skills.nonTechnical.map((skill, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-lg font-medium border border-blue-500/30 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skill;
