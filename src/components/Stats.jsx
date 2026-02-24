import { useEffect, useRef } from 'react'

export default function Stats() {
  const statsRef = useRef(null)
  const numbersRef = useRef([])

  useEffect(() => {
    const animateNumbers = () => {
      numbersRef.current.forEach((element) => {
        if (!element) return
        const target = parseInt(element.getAttribute('data-target'))
        const duration = 2000
        const start = Date.now()
        const initialValue = 0

        const animate = () => {
          const now = Date.now()
          const progress = Math.min((now - start) / duration, 1)
          const value = Math.floor(initialValue + (target - initialValue) * progress)
          element.textContent = value
          
          if (progress < 1) {
            requestAnimationFrame(animate)
          }
        }

        animate()
      })
    }

    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateNumbers()
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      number: 10,
      label: 'Projects Completed & Going',
      icon: '📦'
    },
    {
      number: 3,
      label: 'Years of Experience',
      icon: '⏱️'
    },
    {
      number: 100,
      label: 'Passion & Dedication',
      icon: '❤️'
    },
    {
      number: 15,
      label: 'Tech Skills',
      icon: '🛠️'
    }
  ]

  return (
    <section className="stats" id="stats" ref={statsRef}>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{stat.icon}</div>
            <div className="stat-number" ref={(el) => numbersRef.current[index] = el} data-target={stat.number}>
              0
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
