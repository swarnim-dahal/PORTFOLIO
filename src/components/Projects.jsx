import { useState, useRef, useEffect } from 'react'

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null)
  const projectsRef = useRef(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const projectCards = entry.target.querySelectorAll('.project-card')
          projectCards.forEach((card, idx) => {
            setTimeout(() => {
              card.classList.add('animate-in')
            }, idx * 150)
          })
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    if (projectsRef.current) {
      observer.observe(projectsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      id: 1,
      icon: '�️',
      title: 'MOTOELITE',
      description: 'Website that showcases the premium section of motorbikes with their true value. A comprehensive platform for browsing and comparing luxury motorcycles.',
      tech: ['React', 'Node.js', 'MongoDB', 'JavaScript'],
      github: 'https://github.com/swarnim-dahal',
      live: '#',
      device: 'laptop',
      color: '#06b6d4'
    },
    {
      id: 2,
      icon: '🎮',
      title: 'Gesture-Controlled',
      description: 'Project made using Python where volume and brightness are controlled through hand gesture on the device. Interactive gesture recognition system.',
      tech: ['Python', 'OpenCV', 'MediaPipe', 'Machine Learning'],
      github: 'https://github.com/swarnim-dahal',
      live: '#',
      device: 'phone',
      color: '#0891b2'
    },
    {
      id: 3,
      icon: '💡',
      title: 'Smart-Appliances',
      description: 'ESP32-Based IoT Smart Lighting Control System. A connected lighting solution for automated control and monitoring.',
      tech: ['ESP32', 'IoT', 'Arduino', 'C++'],
      github: 'https://github.com/swarnim-dahal',
      live: '#',
      device: 'laptop',
      color: '#0066cc'
    },
    {
      id: 4,
      icon: '🚦',
      title: 'TRAFFIC-MANAGEMENT',
      description: 'A smart project done through C++ for intelligently controlling traffic systems for proper management and optimization.',
      tech: ['C++', 'Algorithms', 'Data Structures', 'Systems'],
      github: 'https://github.com/swarnim-dahal',
      live: '#',
      device: 'laptop',
      color: '#5eead4'
    },
    {
      id: 5,
      icon: '✨',
      title: 'Portfolio',
      description: 'A modern portfolio with simple but cool UI frontend and a pinch of backend. Showcasing skills and projects with elegant design.',
      tech: ['React', 'Vite', 'CSS3', 'JavaScript'],
      github: 'https://github.com/swarnim-dahal',
      live: '#',
      device: 'phone',
      color: '#a78bfa'
    }
  ]

  return (
    <section className="projects" id="projects" ref={projectsRef}>
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">Showcasing innovative solutions built with cutting-edge technologies</p>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="project-card"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="project-card-inner">
              {/* Device frame animation */}
              <div className={`project-device ${project.device}`}>
                {project.device === 'laptop' && (
                  <div className="laptop-frame">
                    <div className="laptop-screen">
                      <div className="screen-content">
                        <div className="project-icon">{project.icon}</div>
                      </div>
                    </div>
                    <div className="laptop-base"></div>
                  </div>
                )}
                {project.device === 'phone' && (
                  <div className="phone-frame">
                    <div className="phone-notch"></div>
                    <div className="phone-screen">
                      <div className="screen-content">
                        <div className="project-icon">{project.icon}</div>
                      </div>
                    </div>
                    <div className="phone-home"></div>
                  </div>
                )}
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tag" style={{ borderColor: project.color }}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} className="project-link" style={{ color: project.color }} target="_blank" rel="noopener noreferrer">
                    <span>→ GitHub</span>
                  </a>
                  <a href={project.live} className="project-link" style={{ color: project.color }} target="_blank" rel="noopener noreferrer">
                    <span>→ Live Demo</span>
                  </a>
                </div>
              </div>

              {/* Hover glow effect */}
              <div 
                className="project-glow"
                style={{ backgroundColor: project.color }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats counter section */}
      <div className="projects-stats">
        <div className="stat-item">
          <h4 className="stat-number">10+</h4>
          <p className="stat-label">Projects Completed & Going</p>
        </div>
        <div className="stat-item">
          <h4 className="stat-number">3+</h4>
          <p className="stat-label">Years in Tech</p>
        </div>
        <div className="stat-item">
          <h4 className="stat-number">More</h4>
          <p className="stat-label">More projects coming soon</p>
          <div style={{ marginTop: '14px' }}>
            <a href="https://github.com/swarnim-dahal" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View on GitHub</a>
          </div>
        </div>
      </div>
    </section>
  )
}
