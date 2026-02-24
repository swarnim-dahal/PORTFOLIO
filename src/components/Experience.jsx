import { useEffect, useRef } from 'react'

export default function Experience() {
  const timelineRef = useRef(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll('.timeline-item')
          items.forEach((item, idx) => {
            setTimeout(() => {
              item.classList.add('animate-in')
            }, idx * 200)
          })
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    if (timelineRef.current) {
      observer.observe(timelineRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      id: 1,
      date: '2025 - Present',
      title: 'Sergeant-at-Arms',
      organization: 'Rotaract Club of Kathmandu Heights',
      description: 'Leading organizational discipline, protocol management, and strategic planning for club events and community initiatives. Overseeing member engagement and ensuring smooth operations.',
      icon: '🎖️',
      color: '#0891b2'
    },
    {
      id: 2,
      date: '2023 - Present',
      title: 'Strategic Coordination Committee Member',
      organization: 'CSIT Association Nepal',
      description: 'Coordinating strategic initiatives, planning academic programs, and fostering collaboration within the national Computer Science community. Supporting student development and industry partnerships.',
      icon: '🤝',
      color: '#06b6d4'
    },
    {
      id: 3,
      date: '2024 - Present',
      title: 'Full Stack Web Developer',
      organization: 'Freelance Projects',
      description: 'Developed responsive web applications for diverse clients, implementing modern technologies and best practices. Created scalable solutions with focus on user experience and performance optimization.',
      icon: '💻',
      color: '#5eead4'
    },
    {
      id: 4,
      date: '2024 - Present',
      title: 'Frontend Developer',
      organization: 'Tech Projects',
      description: 'Built intuitive user interfaces and optimized performance for web applications. Collaborated with design and backend teams to deliver seamless, engaging user experiences.',
      icon: '⚡',
      color: '#0066cc'
    }
  ]

  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience & Roles</h2>
      <p className="section-subtitle">A journey of growth, leadership, and technical excellence</p>
      
      <div className="timeline" ref={timelineRef}>
        {experiences.map((exp, index) => (
          <div 
            key={exp.id} 
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            {/* Connector line */}
            <div className="timeline-connector"></div>

            {/* Content card with 3D effect */}
            <div className="timeline-card">
              <div className="card-inner">
                {/* Icon with 3D rotation */}
                <div className="experience-icon" style={{ borderColor: exp.color }}>
                  {exp.icon}
                </div>

                {/* Content */}
                <div className="timeline-content">
                  <span className="timeline-date">{exp.date}</span>
                  <h3 className="timeline-title">{exp.title}</h3>
                  <p className="timeline-organization">{exp.organization}</p>
                  <p className="timeline-description">
                    {exp.description}
                  </p>

                  {/* Skills indicator */}
                  <div className="timeline-skills">
                    <span className="skill-dot" style={{ backgroundColor: exp.color }}></span>
                    <span className="skill-dot" style={{ backgroundColor: exp.color }}></span>
                    <span className="skill-dot" style={{ backgroundColor: exp.color }}></span>
                  </div>
                </div>
              </div>

              {/* Glow effect on hover */}
              <div 
                className="card-glow"
                style={{ backgroundColor: exp.color }}
              ></div>
            </div>

            {/* Timeline dot */}
            <div 
              className="timeline-dot"
              style={{ backgroundColor: exp.color, boxShadow: `0 0 20px ${exp.color}` }}
            ></div>
          </div>
        ))}
      </div>

      {/* Additional stats */}
      <div className="experience-highlight">
        <div className="highlight-card">
          <h4>Leadership</h4>
          <p>Driving organizational excellence and community growth</p>
        </div>
        <div className="highlight-card">
          <h4>Technical Skills</h4>
          <p>Master of modern web technologies and best practices</p>
        </div>
        <div className="highlight-card">
          <h4>Innovation</h4>
          <p>Creating cutting-edge solutions with passion and precision</p>
        </div>
      </div>
    </section>
  )
}
