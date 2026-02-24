import { useEffect, useRef } from 'react'
import photo from '../assets/photo.jpg'

export default function Hero() {
  const titleRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const roles = ['Full-Stack Developer', 'Tech Innovator', 'IoT Enthusiast', 'Creative Problem Solver']
    let currentRole = 0
    let charIndex = 0
    let isDeleting = false

    const typeEffect = () => {
      const element = titleRef.current
      if (!element) return

      const currentText = roles[currentRole]
      
      if (!isDeleting && charIndex < currentText.length) {
        element.textContent = currentText.substring(0, charIndex + 1)
        charIndex++
        setTimeout(typeEffect, 50)
      } else if (isDeleting && charIndex > 0) {
        element.textContent = currentText.substring(0, charIndex - 1)
        charIndex--
        setTimeout(typeEffect, 30)
      } else if (charIndex === currentText.length) {
        isDeleting = true
        setTimeout(typeEffect, 2000)
      } else {
        isDeleting = false
        currentRole = (currentRole + 1) % roles.length
        setTimeout(typeEffect, 200)
      }
    }

    typeEffect()
  }, [])

  // Floating animation effect
  useEffect(() => {
    const element = imageRef.current
    if (!element) return
    
    let pos = 0
    let direction = 1
    const animate = () => {
      pos += direction * 0.3
      if (pos > 15 || pos < -15) direction *= -1
      element.style.transform = `translateY(${pos}px)`
      requestAnimationFrame(animate)
    }
    animate()
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="hero-wrapper">
        <div className="hero-content">
          <div className="hero-text-group">
            <h1 className="hero-title">Hi, I'm <span className="name-highlight">Swarnim Dahal</span></h1>
            <p className="hero-subtitle">
              <span className="typing-effect" ref={titleRef}></span>
            </p>
            <p className="hero-tagline">Building the Future, One Code at a Time</p>
            <p className="hero-description">
              Crafting beautiful, responsive digital experiences with modern technology. Passionate about clean code, thoughtful design, and creating meaningful solutions that impact the world.
            </p>
            <div className="hero-cta">
              <button 
                className="btn btn-primary"
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              >
                Explore My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        <div className="hero-image-container" ref={imageRef}>
          <div className="hexagon-frame">
            <div className="hexagon-inner">
              <img src={photo} alt="Swarnim Dahal" className="profile-image" />
            </div>
            <div className="hexagon-glow"></div>
          </div>
        </div>
      </div>

      {/* Floating tech elements background */}
      <div className="floating-elements">
        <div className="float-element element-1"><span className="tech-icon">{"</>"}</span></div>
        <div className="float-element element-2"><span className="tech-icon">⚛</span></div>
      </div>
    </section>
  )
}
