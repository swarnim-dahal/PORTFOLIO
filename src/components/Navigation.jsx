export default function Navigation({ isDark, setIsDark }) {
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav>
      <button className="nav-brand" onClick={() => handleScroll('hero')}>SD</button>
      <div className="nav-links">
        <button className="nav-link" onClick={() => handleScroll('hero')}>Home</button>
        <button className="nav-link" onClick={() => handleScroll('about')}>About</button>
        <button className="nav-link" onClick={() => handleScroll('skills')}>Skills</button>
        <button className="nav-link" onClick={() => handleScroll('projects')}>Projects</button>
        <button className="nav-link" onClick={() => handleScroll('experience')}>Experience</button>
        <button className="nav-link" onClick={() => handleScroll('contact')}>Contact</button>
      </div>
      
      <div className="nav-right">
        <button
          className="theme-toggle"
          onClick={() => setIsDark(!isDark)}
          aria-label="Toggle theme"
        >
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  )
}
