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
      info: 'inimfonebong001@gmail.com'
    },
  ]

  return (
    <section id="contact" className="py-25 px-12 animate-on-scroll">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl mb-16 text-center bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent font-bold">
          Let's Connect
        </h2>
        <div className="text-center">
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Let's build something amazing together!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {contactMethods.map((method, index) => (
		    <a
		    key={index}
		    href={method.info}
		    target="_blank"
		    rel="noopener noreferrer"
		  >
              <div 
                key={index}
                className="p-8 bg-gray-800 rounded-2xl transition-transform duration-300 hover:-translate-y-2 border border-gray-700"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-xl">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{method.title}</h3>
                <p className="text-gray-400">{method.info}</p>
              </div></a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
