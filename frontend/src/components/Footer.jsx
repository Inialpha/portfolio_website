import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ExternalLink, Code, Database, Cloud, Smartphone, Send, CheckCircle } from 'lucide-react';

const socialLinks = [
  {
    title: "GitHub",
    href: "https://github.com/Inialpha",
    icon: Github,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/inimfon-ebong",
    icon: Linkedin,
  },
  {
    title: "Twitter",
    href: "https://twitter.com/Inimfon_Tech",
    icon: Twitter,
  },
  {
    title: "Email",
    href: 'mailto:inimfonebong001@gmail.com',
    icon: Mail,
  },
];

function Footer () {
  return (
      <footer className="bg-slate-900 border-t border-slate-700 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Inimfon Ebong
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Passionate software engineer dedicated to creating innovative solutions 
                that make a positive impact on the world through technology.
              </p>
              <div className="flex space-x-4">
	        {socialLinks.map(({ title, href, icon }, index) => {
		  const Icon = icon
                  return (
                    <a
                      key={index}
                      href={href}
                      title={title}
                      aria-label={title}
                      className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </a>
                  );
                })}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Full-Stack Development</li>
                <li>Mobile App Development</li>
                <li>Cloud Architecture</li>
                <li>Technical Consulting</li>
                <li>Team Leadership</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 Inimfon Ebong. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

  )
}

export default Footer;
