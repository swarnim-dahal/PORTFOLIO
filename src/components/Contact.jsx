import { useState, useRef } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState(null)
  const submitButtonRef = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setSubmitted(true)
      setIsSubmitting(false)
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      setTimeout(() => setSubmitted(false), 5000)
    }, 1500)
  }

  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: 'swarnimdahal57@gmail.com',
      link: 'mailto:swarnimdahal57@gmail.com'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'swarnim-dahal',
      link: 'https://www.linkedin.com/in/swarnim-dahal-749141327/'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'swarnim-dahal',
      link: 'https://github.com/swarnim-dahal'
    },
    {
      icon: '📸',
      label: 'Instagram',
      value: '@swarneem_dhl',
      link: 'https://www.instagram.com/swarneem_dhl/'
    },
    {
      icon: '👥',
      label: 'Facebook',
      value: 'swarnim.dahal',
      link: 'https://www.facebook.com/swarnim.dahal.9/'
    }
  ]

  return (
    <section className="contact" id="contact">
      <div className="contact-wrapper">
        <div className="contact-header">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">Have a project or idea? I'd love to collaborate and create something amazing together!</p>
          <div className="motivating-quote" style={{ marginTop: '2rem', fontSize: '1.1rem', fontStyle: 'italic', color: '#06b6d4', maxWidth: '600px', margin: '2rem auto 0' }}>
            "Code is poetry written in logic, and every project is an opportunity to create something beautiful and meaningful that changes the world."
          </div>
        </div>

        <div className="contact-grid">
          {/* Contact form */}
          <div className="contact-form-container">
            {submitted && (
              <div className="success-message animate-in">
                <div className="success-icon">✓</div>
                <h4>Message Sent!</h4>
                <p>Thank you for reaching out. I'll get back to you shortly.</p>
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit} style={{ display: submitted ? 'none' : 'block' }}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <div className="form-input-wrapper">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className={focusedField === 'name' ? 'focused' : ''}
                    required
                  />
                  <div className="input-underline"></div>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <div className="form-input-wrapper">
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={focusedField === 'email' ? 'focused' : ''}
                    required
                  />
                  <div className="input-underline"></div>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <div className="form-input-wrapper">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project idea or collaboration"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    className={focusedField === 'subject' ? 'focused' : ''}
                    required
                  />
                  <div className="input-underline"></div>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <div className="form-input-wrapper textarea-wrapper">
                  <textarea
                    name="message"
                    placeholder="Tell me about your project, ideas, or how we can work together..."
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className={focusedField === 'message' ? 'focused' : ''}
                    rows="6"
                    required
                  ></textarea>
                  <div className="input-underline"></div>
                </div>
              </div>

              <button 
                type="submit" 
                className={`btn btn-primary form-submit ${isSubmitting ? 'submitting' : ''}`}
                ref={submitButtonRef}
                disabled={isSubmitting}
              >
                <span className="button-text">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
                <span className="button-icon">
                  {isSubmitting ? '⏳' : '✉️'}
                </span>
              </button>
            </form>
          </div>

          {/* Contact methods */}
          <div className="contact-methods">
            <h3 className="methods-title">Other Ways to Connect</h3>
            <div className="methods-list">
              {contactMethods.map((method, idx) => (
                <a 
                  key={idx}
                  href={method.link} 
                  className="method-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="method-icon">{method.icon}</div>
                  <div className="method-content">
                    <h4 className="method-label">{method.label}</h4>
                    <p className="method-value">{method.value}</p>
                  </div>
                  <div className="method-arrow">→</div>
                </a>
              ))}
            </div>

            {/* Quick response time */}
            <div className="response-time">
              <div className="response-dot"></div>
              <p>Usually responds within <strong>24 hours</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
