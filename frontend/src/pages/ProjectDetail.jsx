import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ArrowLeft, Github, ExternalLink } from 'lucide-react'
import Footer from '../components/Footer'
import { getProjectBySlug } from '../data/projects'

function ProjectDetailNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full px-6 md:px-12 py-5 bg-gray-900/80 backdrop-blur-xl z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent"
        >
          IE
        </Link>

        <ul className="hidden md:flex items-center space-x-8">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <Link
                to={`/#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-cyan-400 font-medium transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <ul className="flex flex-col items-center space-y-4">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  to={`/#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-400 hover:text-cyan-400"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

function VideoCarousel({ videos }) {
  const [current, setCurrent] = useState(0)
  const videoRef = useRef(null)

  const prev = () => setCurrent((c) => (c - 1 + videos.length) % videos.length)
  const next = () => setCurrent((c) => (c + 1) % videos.length)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
      videoRef.current.play().catch(() => {})
    }
  }, [current])

  return (
    <div>
      <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.35 }}
          >
            <video
              ref={videoRef}
              className="w-full max-h-[520px] object-cover bg-black"
              controls
              muted
              loop
              playsInline
            >
              <source src={videos[current]} type="video/mp4" />
            </video>
          </motion.div>
        </AnimatePresence>

        {videos.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous video"
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-gray-900/70 hover:bg-gray-900 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={next}
              aria-label="Next video"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-900/70 hover:bg-gray-900 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-110"
            >
              <ChevronRight size={22} />
            </button>
          </>
        )}
      </div>

      {videos.length > 1 && (
        <div className="flex items-center justify-center gap-3 mt-4">
          {videos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to video ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === current ? 'w-6 bg-blue-500' : 'w-2 bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()

  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            404
          </h1>
          <p className="text-gray-400 mb-6 text-lg">Project not found.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-xl font-medium transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  const videos = project.videos || []
  const images = project.images || []
  const hasVideos = videos.length > 0
  const hasImages = images.length > 0
  const hasMedia = hasVideos || hasImages

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <ProjectDetailNav />

      <div className="pt-28 pb-6 px-4 md:px-12 max-w-7xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-200" />
          Back
        </button>
      </div>

      {/* ── Header ─────────────────────────────────────────── */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="px-4 md:px-12 max-w-7xl mx-auto pb-14"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent mb-3 leading-tight">
          {project.title}
        </h1>
        <p className="text-blue-400 text-xl font-medium mb-6">{project.subtitle}</p>
        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mb-10">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-5">Tech Stack</h2>
          <div className="space-y-5">
            {Object.entries(project.tech_stack).map(([category, techs]) => (
              <div key={category}>
                <span className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-2 block">
                  {category.replace(/_/g, ' ')}
                </span>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-cyan-400/10 text-cyan-400 px-4 py-1 rounded-2xl text-sm border border-cyan-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          {project.github_link && (
            <a
              href={project.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-xl font-medium transition-colors duration-200"
            >
              <Github size={18} />
              GitHub
            </a>
          )}
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-xl font-medium transition-colors duration-200"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}
        </div>
      </motion.section>

      {/* ── Key Features ───────────────────────────────────── */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-4 md:px-12 max-w-7xl mx-auto py-14 border-t border-gray-800"
      >
        <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.key_features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="bg-gray-800/50 rounded-2xl p-5 border border-gray-700 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
            >
              <span className="text-blue-400 font-bold text-lg mr-2">✦</span>
              <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── Media ──────────────────────────────────────────── */}
      {hasMedia && (
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="px-4 md:px-12 max-w-7xl mx-auto py-14 border-t border-gray-800"
        >
          <h2 className="text-3xl font-bold text-white mb-10">Media</h2>

          {/* Videos */}
          {hasVideos && (
            <div className="mb-14">
              <h3 className="text-xl font-semibold text-blue-400 mb-5">Videos</h3>
              <VideoCarousel videos={videos} />
            </div>
          )}

          {/* Images */}
          {hasImages && (
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-5">Images</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {images.map((image, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group"
                  >
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.section>
      )}

      <Footer />
    </div>
  )
}

export default ProjectDetail
