import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let particles = []
    let floatingIcons = []
    let animationId

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Particle class for subtle background dots
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.5
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = (Math.random() - 0.5) * 0.3
        this.opacity = Math.random() * 0.4 + 0.1
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0
      }

      draw() {
        ctx.fillStyle = `rgba(8, 145, 178, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Floating icon class for tech logos and programming language icons
    class FloatingIcon {
      constructor() {
        this.icons = ['</>', '⚛️', '🔧', '📱', '🎨', '⚡', '🌐', '🔌']
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.icon = this.icons[Math.floor(Math.random() * this.icons.length)]
        this.size = 20 + Math.random() * 20
        this.opacity = Math.random() * 0.3 + 0.1
        this.rotation = Math.random() * Math.PI * 2
        this.rotationSpeed = (Math.random() - 0.5) * 0.02
        this.wobbleAmount = Math.random() * 2 + 1
        this.wobblePhase = Math.random() * Math.PI * 2
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.rotation += this.rotationSpeed
        this.wobblePhase += 0.01

        // Gentle bobbing motion
        this.y += Math.sin(this.wobblePhase) * 0.3

        // Wrap around edges
        if (this.x < -50) this.x = canvas.width + 50
        if (this.x > canvas.width + 50) this.x = -50
        if (this.y < -50) this.y = canvas.height + 50
        if (this.y > canvas.height + 50) this.y = -50
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity
        ctx.font = `${this.size}px Arial`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'

        // Apply rotation
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)

        // Draw icon with glow effect
        ctx.fillStyle = 'rgba(8, 145, 178, 0.8)'
        ctx.filter = `drop-shadow(0 0 ${this.size * 0.3}px rgba(8, 145, 178, 0.4))`
        ctx.fillText(this.icon, 0, 0)

        ctx.restore()
      }
    }

    // Initialize particles
    const initParticles = () => {
      particles = []
      floatingIcons = []
      for (let i = 0; i < 50; i++) {
        particles.push(new Particle())
      }
      for (let i = 0; i < 12; i++) {
        floatingIcons.push(new FloatingIcon())
      }
    }

    initParticles()

    // Animation loop
    const animate = () => {
      // Clear canvas with semi-transparent background for trail effect
      ctx.fillStyle = `rgba(255, 255, 255, 0.05)`
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      // Update and draw floating icons
      floatingIcons.forEach(icon => {
        icon.update()
        icon.draw()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
        background: 'transparent'
      }}
    />
  )
}
