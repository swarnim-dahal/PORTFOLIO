import { useEffect, useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'

import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={`app ${isDark ? 'dark-mode' : 'light-mode'}`}>
      <ParticleBackground />
      <Navigation isDark={isDark} setIsDark={setIsDark} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
