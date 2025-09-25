import { useState } from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Skill from '../components/Skill'
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Contact from './Contact'
import { Outlet } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Nav />
      
      {/* Main Content */}
      <main className="pt-16"> {/* Add padding-top to account for fixed nav */}
        <Hero />
        <About />
        <Skill />
        <Projects />
        
        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Contact <span className="text-blue-400">Me</span>
              </h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
              <p className="text-gray-300 text-lg">
                Let's work together! Feel free to reach out for collaborations or just a friendly hello.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <Contact />
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <Outlet />
    </div>
  )
}

export default Home
