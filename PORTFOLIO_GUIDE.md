# Swarnim Dahal's Portfolio Website

A beautiful, responsive, tech-inspired portfolio website with futuristic neon aesthetics, interactive animations, and pop culture elements.

## Features

### 🎨 Design & Aesthetics
- **Neon Color Scheme**: Cyan, purple, green neon colors with dark backgrounds
- **Futuristic Theme**: Inspired by Tron, cyberpunk, and modern tech aesthetics
- **Code-like Typography**: Uses 'Fira Code' monospace font throughout
- **Smooth Animations**: Floating elements, glowing effects, typing animations
- **Particle Background**: Animated canvas with floating particles and connection lines

### 📱 Responsive Layout
- **Mobile-Friendly**: Fully responsive design with media queries
- **Smooth Scrolling**: Enhanced scroll experience with progress indicator
- **Flexible Grid System**: Adapts to various screen sizes

### ✨ Interactive Elements
- **Navigation Bar**: Fixed navigation with active section highlighting
- **Hero Section**: Animated typing effect with role cycling
- **Skills Cards**: Hover effects with animated progress bars
- **Project Cards**: Shimmer effects and smooth hover animations
- **Stats Section**: Animated number counters with intersection observer
- **Contact Form**: Working form with validation and success feedback
- **Particle Effects**: Dynamic canvas-based particle system

### 🚀 Performance Optimized
- Lazy loading for stats animations
- Efficient particle rendering
- Optimized CSS animations
- Minimal JavaScript dependencies

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx       # Fixed navigation with scroll tracking
│   ├── Hero.jsx             # Hero section with typing animation
│   ├── About.jsx            # About section with highlights
│   ├── Skills.jsx           # Skills with progress bars
│   ├── Projects.jsx         # Project cards grid
│   ├── Stats.jsx            # Animated statistics
│   ├── Contact.jsx          # Contact form
│   └── ParticleBackground.jsx # Canvas particle system
├── App.jsx                  # Main app component
├── App.css                  # All styling and animations
└── main.jsx                 # Entry point
```

## Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Customization Guide

### Color Theme
Edit the CSS variables in `App.css`:
```css
:root {
  --neon-cyan: #00d9ff;
  --neon-purple: #d946ef;
  --neon-green: #39ff14;
  --dark-bg: #0a0e27;
  /* ... other colors */
}
```

### Personal Information
Update in respective components:
- **Hero.jsx**: Name, roles, and description
- **About.jsx**: Bio and highlights
- **Projects.jsx**: Project data with links
- **Contact.jsx**: Contact details

### Skills & Stats
Edit the arrays in:
- **Skills.jsx**: Add/remove skills, adjust proficiency levels
- **Stats.jsx**: Update achievement numbers

### Project Data
Update the `projects` array in `Projects.jsx` with your actual projects:
```javascript
const projects = [
  {
    icon: '🎮',
    title: 'Your Project',
    description: 'Project description',
    tech: ['React', 'CSS3'],
    github: 'your-github-link',
    live: 'your-live-demo-link'
  },
  // ... more projects
]
```

## Key Features Explained

### Typing Effect (Hero Section)
The hero section features a dynamic typing effect that cycles through different roles:
- Uses `requestAnimationFrame` for smooth animation
- Automatically cycles through predefined roles
- Customizable speeds for typing and deleting

### Progress Bar Animation
Skills section uses Intersection Observer API to:
- Detect when section comes into view
- Automatically animate progress bars
- Only runs animation once for performance

### Particle Background
Canvas-based particle system with:
- Dynamic particle generation
- Responsive sizing
- Connection lines between nearby particles
- Smooth parallax-like movement

### Form Handling
Contact form includes:
- Controlled component state management
- Form validation (HTML5)
- Success feedback message
- Automatic form reset

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- **React 18**: UI framework
- **CSS3**: Styling with variables and animations
- **Canvas API**: Particle effects
- **Intersection Observer API**: Lazy animations
- **ES6+ JavaScript**: Modern JavaScript features

## Animation Libraries

All animations are built with CSS and vanilla JavaScript - no external animation libraries required!

## Tips for Best Results

1. **Performance**: The particle background can be disabled on low-end devices by removing `<ParticleBackground />`
2. **Customization**: All colors, fonts, and timings are easily customizable
3. **Accessibility**: Consider adding ARIA labels for screen readers if deploying publicly
4. **SEO**: Update meta tags in `index.html` for better SEO

## Sections Overview

### Hero Section
- Eye-catching title with gradient
- Typing effect subtitle
- Role badges
- Call-to-action buttons

### About Section
- Personal bio
- Key highlights with icons
- Professional roles
- Placeholder image area

### Skills Section
- 6 skill cards with icons
- Proficiency progress bars
- Hover animations
- Tech-focused descriptions

### Projects Section
- Responsive grid layout
- Project cards with gradients
- Technology tags
- GitHub and live demo links

### Stats Section
- Animated counters
- Achievement metrics
- Hover effects
- Icon representations

### Contact Section
- Professional form
- Input validation
- Success feedback
- Pop culture button text ("Beam me up")

### Footer
- Social links
- Copyright info
- Neon-styled text

## Future Enhancements

- [ ] Backend integration for contact form
- [ ] Blog section with articles
- [ ] Dark/Light mode toggle
- [ ] More interactive games/easter eggs
- [ ] 3D elements with Three.js
- [ ] Sound effects and audio feedback
- [ ] Testimonials section
- [ ] Resume download

## License

This portfolio is customizable and ready for personal use. Feel free to modify and deploy!

## Contact

For questions or collaboration:
- Email: your-email@example.com
- LinkedIn: Your LinkedIn
- GitHub: Your GitHub

---

Built with passion and code by Swarnim Dahal © 2026
