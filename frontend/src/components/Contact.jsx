function Contact() {
  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      info: 'inimfon.ebong@email.com'
    },
    {
      icon: '💼',
      title: 'LinkedIn', 
      info: 'linkedin.com/in/inimfonebong'
    },
    {
      icon: '🐙',
      title: 'GitHub',
      info: 'github.com/inialpha'
    }
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
              <div 
                key={index}
                className="p-8 bg-gray-800 rounded-2xl transition-transform duration-300 hover:-translate-y-2 border border-gray-700"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-xl">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{method.title}</h3>
                <p className="text-gray-400">{method.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact