import { useState } from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../pages/About'
import Project from '../pages/Project'
import Contact from '../pages/Contact'
import Skill from '../pages/Skill'
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-white">
      <Nav />
      <Hero />
      <About />
      <Project />
      <Skill />
      <h3 className="text-5xl font-bold mb-4">
	Contact Me
      </h3>
      <div className="grid md:grid-cols-2 mt-10 p-4 mb-40">
	<Contact />
        <ContactForm />
      </div>
      <Footer />

      <Outlet />
    </div>
  )
}

export default Home
