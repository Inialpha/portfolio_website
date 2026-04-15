import { motion } from 'framer-motion'
import profileImage from '../assets/images/profile.png'
const about = `I'm Inimfon Ebong, a software engineer passionate about creating impactful digital solutions. I specialize in both backend and frontend development, with experience building scalable applications using Python, Django, FastAPI, Node.js, React, and Tailwind CSS.
Beyond coding, I enjoy tackling complex problems and transforming ideas into products that make a real difference. Whether it's developing efficient APIs, crafting intuitive user interfaces, or managing data with modern databases, I bring both creativity and precision to every project.

When I'm not building, you'll often find me learning new technologies, exploring innovative ways to solve real-world challenges, or mentoring others who are starting their tech journey.`

function About() {
  return (
    <section id="about" className="py-25 px-10 md:px-12 animate-on-scroll">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="text-center mb-16"
        >
	  <div className="">
            <h2 className="text-5xl mb-6 text-center bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent font-bold">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
	  </div>
	</motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
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
                  className="w-80 h-80 rounded-full md:rounded-2xl object-cover shadow-2xl"
                />
              </div>
            </motion.div>
            <div className="text-gray-400 text-xl leading-relaxed space-y-6">
	      {about.split('\n').map((paragraph, index) => (
                paragraph.trim() && (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 * (index / 2), delay: 0.1 * index }}
                    className="text-lg"
                  >
                    {paragraph.trim()}
                  </motion.p>
                )
              ))}
	  </div>
        </div>
      </div>
    </section>
  )
}

export default About
