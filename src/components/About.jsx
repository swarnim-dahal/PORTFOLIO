import { useEffect, useRef } from 'react'

export default function About() {
  const aboutRef = useRef(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const highlights = entry.target.querySelectorAll('.highlight')
          highlights.forEach((highlight, idx) => {
            setTimeout(() => {
              highlight.classList.add('animate-in')
            }, idx * 150)
          })
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="about" id="about" ref={aboutRef}>
      <div className="about-grid">
        <div className="about-image">
          <div className="image-content">
            <div className="image-circle">
              <svg viewBox="0 0 200 200" className="profile-illustration">
                <circle cx="100" cy="70" r="40" fill="#0891b2" opacity="0.8" />
                <path d="M 50 130 Q 50 110 100 110 Q 150 110 150 130 L 150 180 Q 150 190 140 190 L 60 190 Q 50 190 50 180 Z" fill="#0891b2" opacity="0.6" />
                <circle cx="70" cy="65" r="4" fill="white" />
                <circle cx="130" cy="65" r="4" fill="white" />
                <path d="M 85 85 Q 100 95 115 85" stroke="white" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <div className="image-glow"></div>
          </div>
        </div>

        <div className="about-content">
          <h2>About Me</h2>
          <p className="about-intro">
            I'm a passionate developer and designer from Nepal, dedicated to creating stunning digital experiences. With expertise in web design, frontend development, and graphic design, I blend creativity with clean code to build solutions that not only look amazing but work flawlessly.
          </p>
          <p>
            Currently serving as <strong>Sergeant-at-Arms at Rotaract Club of Kathmandu Height</strong> and part of the <strong>Strategic Coordination Committee in CSIT Association Nepal</strong>, I'm committed to collaborative innovation and community impact. I love solving problems, learning new technologies, and pushing the boundaries of what's possible on the web.
          </p>
          
          <div className="about-highlights">
            <div className="highlight">
              <div className="highlight-icon">💻</div>
              <div className="highlight-title">Web Development</div>
              <div className="highlight-text">Creating responsive, user-centric interfaces with React, JavaScript, and modern CSS</div>
            </div>
            <div className="highlight">
              <div className="highlight-icon">🎨</div>
              <div className="highlight-title">Design & UI/UX</div>
              <div className="highlight-text">Crafting visual identities and compelling brand experiences using Figma and design principles</div>
            </div>
            <div className="highlight">
              <div className="highlight-icon">🚀</div>
              <div className="highlight-title">IoT & Innovation</div>
              <div className="highlight-text">Exploring connected systems, Arduino, and emerging technologies that shape the future</div>
            </div>
            <div className="highlight">
              <div className="highlight-icon">🤝</div>
              <div className="highlight-title">Leadership</div>
              <div className="highlight-text">Building teams, fostering innovation, and driving positive change through community initiatives</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
