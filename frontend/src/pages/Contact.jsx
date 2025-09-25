import { Link } from 'react-router-dom'

function Contact() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/inimfon-ebong',
      icon: '💼',
      description: 'Professional network'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Inialpha',
      icon: '💻',
      description: 'Code repositories'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/Inimfon_Tech',
      icon: '🐦',
      description: 'Tech thoughts & updates'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/inimfion.ebong',
      icon: '📘',
      description: 'Social updates'
    }
  ]

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-blue-400 mb-4">Get In Touch</h3>
        <p className="text-gray-300 leading-relaxed mb-6">
          I'm always open to discussing new opportunities, interesting projects, 
          or just having a conversation about technology and software development.
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <span className="text-blue-400">📧</span>
            <span className="text-gray-300">inimfonebong@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-blue-400">📍</span>
            <span className="text-gray-300">Nigeria</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-blue-400">💼</span>
            <span className="text-gray-300">Available for freelance & full-time opportunities</span>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-xl font-semibold text-blue-400 mb-4">Connect With Me</h4>
        <div className="grid grid-cols-2 gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500/50 hover:bg-gray-800/70 transition-all duration-300"
            >
              <span className="text-2xl">{link.icon}</span>
              <div>
                <div className="font-medium text-white">{link.name}</div>
                <div className="text-sm text-gray-400">{link.description}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contact
