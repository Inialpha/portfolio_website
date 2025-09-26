import { useState } from 'react'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full px-12 py-5 bg-gray-900/80 backdrop-blur-xl z-50 transition-all duration-300">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          AC
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <a 
              href="#home" 
              className="text-gray-400 hover:text-cyan-400 font-medium transition-all duration-300 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className="text-gray-400 hover:text-cyan-400 font-medium transition-all duration-300 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className="text-gray-400 hover:text-cyan-400 font-medium transition-all duration-300 relative group"
            >
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className="text-gray-400 hover:text-cyan-400 font-medium transition-all duration-300 relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="text-gray-400 hover:text-cyan-400 font-medium transition-all duration-300 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <ul className="flex flex-col items-center space-y-4">
            <li><a href="#home" onClick={() => setIsMenuOpen(false)} className="text-gray-400 hover:text-cyan-400">Home</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)} className="text-gray-400 hover:text-cyan-400">About</a></li>
            <li><a href="#skills" onClick={() => setIsMenuOpen(false)} className="text-gray-400 hover:text-cyan-400">Skills</a></li>
            <li><a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-gray-400 hover:text-cyan-400">Projects</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-gray-400 hover:text-cyan-400">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navigation