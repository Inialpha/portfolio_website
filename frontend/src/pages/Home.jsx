import { useState } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation'
import Contact from '../components/Contact'
import AnimatedBackground from '../components/AnimatedBackground'
function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
        <AnimatedBackground />
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
    </div>
  )
}

export default Home
