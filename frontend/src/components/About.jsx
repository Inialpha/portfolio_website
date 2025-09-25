import profileImage from '../assets/images/inimfon.jpg'
import { motion } from 'framer-motion'

const about = `I'm Inimfon Ebong, a software engineer passionate about creating impactful digital solutions. I specialize in both backend and frontend development, with experience building scalable applications using Python, Django, FastAPI, Node.js, React, and Tailwind CSS.
Beyond coding, I enjoy tackling complex problems and transforming ideas into products that make a real difference. Whether it's developing efficient APIs, crafting intuitive user interfaces, or managing data with modern databases, I bring both creativity and precision to every project.

When I'm not building, you'll often find me learning new technologies, exploring innovative ways to solve real-world challenges, or mentoring others who are starting their tech journey.`

function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <img 
                src={profileImage} 
                alt="Inimfon Ebong" 
                className="w-80 h-80 rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-blue-400">
              My Journey Into Software Engineering
            </h3>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              {about.split('\n').map((paragraph, index) => (
                paragraph.trim() && (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="text-lg"
                  >
                    {paragraph.trim()}
                  </motion.p>
                )
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                Full-Stack Developer
              </span>
              <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm">
                Mentor
              </span>
              <span className="px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">
                Continuous Learner
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About