import { useEffect, useRef, useState } from 'react'

export default function Skills() {
  const skillsRef = useRef(null)
  const [activeSkill, setActiveSkill] = useState(null)
  const [sliderValues, setSliderValues] = useState({})

  useEffect(() => {
    const skills = [
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'React.js', level: 88 },
      { name: 'Node.js', level: 80 },
      { name: 'Responsive Design', level: 92 },
      { name: 'Web Design', level: 85 },
      { name: 'IoT/Arduino', level: 70 },
      { name: 'Graphic Design', level: 78 }
    ]

    skills.forEach(skill => {
      setSliderValues(prev => ({
        ...prev,
        [skill.name]: 0
      }))
    })

    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skillCards = entry.target.querySelectorAll('.skill-card')
          skillCards.forEach((card, idx) => {
            setTimeout(() => {
              card.classList.add('animate-in')
              const slider = card.querySelector('.skill-slider-fill')
              const skillLevel = parseInt(card.getAttribute('data-level'))
              if (slider) {
                slider.style.animation = `fillBar 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`
              }
              const skillName = card.getAttribute('data-name')
              if (skillName) {
                setSliderValues(prev => ({
                  ...prev,
                  [skillName]: skillLevel
                }))
              }
            }, idx * 100)
          })
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skills = [
    {
      name: 'HTML/CSS',
      level: 95,
      icon: '🎨',
      description: 'Semantic HTML, CSS Grid, Flexbox, Animations',
      color: '#ff6b6b'
    },
    {
      name: 'JavaScript',
      level: 90,
      icon: '⚡',
      description: 'ES6+, Async/Await, DOM Manipulation, APIs',
      color: '#ffd93d'
    },
    {
      name: 'React.js',
      level: 88,
      icon: '⚛️',
      description: 'Hooks, Context API, State Management, Components',
      color: '#61dafb'
    },
    {
      name: 'Node.js',
      level: 80,
      icon: '🖥️',
      description: 'Express.js, REST APIs, Databases, Server Logic',
      color: '#68a063'
    },
    {
      name: 'Responsive Design',
      level: 92,
      icon: '📱',
      description: 'Mobile-first, Media Queries, Cross-browser Compatible',
      color: '#5eead4'
    },
    {
      name: 'Web Design',
      level: 85,
      icon: '🎭',
      description: 'UI/UX Principles, Prototyping, Visual Design',
      color: '#a78bfa'
    },
    {
      name: 'IoT/Arduino',
      level: 70,
      icon: '🔌',
      description: 'Embedded Systems, Sensors, Hardware Integration',
      color: '#fb7185'
    },
    {
      name: 'Graphic Design',
      level: 78,
      icon: '✨',
      description: 'Branding, Logos, Visual Assets, Figma',
      color: '#06b6d4'
    }
  ]

  return (
    <section className="skills" id="skills" ref={skillsRef}>
      <h2 className="section-title">Skills & Expertise</h2>
      <p className="section-subtitle">Master a diverse toolkit of modern technologies and design practices</p>
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className={`skill-card ${activeSkill === skill.name ? 'active' : ''}`}
            data-level={skill.level}
            data-name={skill.name}
            onMouseEnter={() => setActiveSkill(skill.name)}
            onMouseLeave={() => setActiveSkill(null)}
          >
            <div className="skill-card-inner">
              {/* Front of card */}
              <div className="skill-card-front">
                <div className="skill-icon-3d" style={{ borderColor: skill.color }}>
                  {skill.icon}
                </div>
                <h3 className="skill-name">{skill.name}</h3>
                <div className="skill-slider-container">
                  <div className="skill-slider-track">
                    <div 
                      className="skill-slider-fill" 
                      style={{
                        width: `${sliderValues[skill.name] || 0}%`,
                        backgroundColor: skill.color
                      }}
                    ></div>
                  </div>
                  <span className="skill-level-text">{sliderValues[skill.name] || 0}%</span>
                </div>
              </div>

              {/* Back of card with details */}
              <div className="skill-card-back">
                <p className="skill-description">{skill.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive range slider showcase */}
      <div className="skills-slider-showcase">
        <h3>Adjust Proficiency</h3>
        <div className="slider-demo">
          <label className="slider-label">
            Overall Proficiency:
            <input type="range" min="0" max="100" defaultValue="85" className="skill-range-slider" />
            <span className="slider-value">85%</span>
          </label>
        </div>
      </div>
    </section>
  )
}
