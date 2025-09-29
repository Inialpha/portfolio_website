import { motion } from 'framer-motion'
import { Code, Layout, Database, Server, Cog } from "lucide-react"
;
function Skills() {

const skills = {
  technical: [
    {
      icon: <Code className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-1 rounded-lg" />,
      title: "Backend Development",
      tools: ["Python", "Node.js"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Layout className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-1 rounded-lg" />,
      title: "Frontend Development",
      tools: ["JavaScript", "HTML", "CSS", "React.js", "Tailwind CSS"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Database className="w-8 h-8 text-white p-1 rounded-lg" />,
      title: "Database",
      tools: ["MySQL", "MongoDB", "Redis"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Server className="w-8 h-8 text-white p-1 rounded-lg" />,
      title: "Server & Infrastructure",
      tools: ["Nginx"],
      color: "from-red-500 to-green-500",
    },
    {
      icon: <Cog className="w-8 h-8 text-white p-1 rounded-lg" />,
      title: "DevOps & Automation",
      tools: ["Puppet", "Fabrics"],
      color: "from-indigo-500 to-blue-500",
    },
  ],
  nonTechnical: ["Good communication", "Team work"],
};

  return (
    <section id="skills" className="py-25 px-12 animate-on-scroll bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
	<motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="text-center mb-16"
        >
	  <div className="">
            <h2 className="text-5xl mb-6 text-center bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text text-transparent font-bold">
	  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">                 Skills & Expertise                                  </span>
	    </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
	  </div>
	</motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.technical.map((skill, index) => (
            <div 
              key={index}
              className="bg-gray-800 p-8 rounded-3xl text-center transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-500/10 border border-gray-700 hover:border-cyan-400"
            >
              <div className={`w-16 h-16 mx-auto mb-5 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center text-2xl`}>
                {skill.icon}
              </div>
              <h3 className={`text-xl font-semibold mb-4 ${skill.color}` }>{skill.title}</h3>
	      <div className="flex flex-wrap gap-2">
                {skill.tools.map((tool, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-2 bg-blue-500/20 text-blue-300 rounded-lg text-sm font-medium border border-blue-500/30 hover:bg-blue-500/30 transition-all duration-300"
                   >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
