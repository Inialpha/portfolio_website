function Contact() {
  const contactMethods = [
    {
      title: 'LinkedIn',
      info: 'https://www.linkedin.com/in/inimfon-ebong',
      icon: '💼',
    },
    {
      title: 'GitHub',
      info: 'https://github.com/Inialpha',
      icon: '💻',
    },
    {
      title: 'Twitter',
      info: 'https://twitter.com/Inimfon_Tech',
      icon: '🐦',
    },
    {
      title: 'Facebook',
      info: 'https://www.facebook.com/inimfion.ebong',
      icon: '📘',
    },
    {
      icon: '📧',
      title: 'Email',
      info: 'mailto:inimfonebong001@gmail.com'
    },
  ]

  return (
    <section id="contact" className="py-25 px-1 animate-on-scroll">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl mb-16 text-center bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent font-bold">
          Let's Connect
        </h2>
        <div className="text-center bg-slate-800/50 py-20">
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Let's build something amazing together!
          </p>
	  <div className="space-y-4 p-4">
  {contactMethods.map((method, index) => (
    <a
      key={index}
      href={method.info}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">

        {/* Icon */}
        <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
          {method.icon}
        </div>

        {/* Text */}
        <div className="text-left min-w-0 flex-1">
          <p className="text-slate-400 text-sm">
            {method.title}
          </p>
          <p className="text-white font-medium break-words">
            {method.info}
          </p>
        </div>

      </div>
    </a>
  ))}
</div>
	  </div>                                    </div>                                    </section>                                )                                         }


export default Contact
