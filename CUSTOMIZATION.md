# Portfolio Customization Quick Reference

## Quick Edits Needed

### 1. Update Personal Info
**File: `src/components/Hero.jsx`**
- Change "Swarnim Dahal" to your name
- Update roles in the `roles` array

**File: `src/components/About.jsx`**
- Update bio text
- Modify highlights section
- Change the emoji/icon

### 2. Update Skills
**File: `src/components/Skills.jsx`**
- Edit the `skills` array:
  - Change skill names, descriptions, icons
  - Adjust proficiency levels (0-100)

Example:
```javascript
{
  icon: '💻',
  title: 'Your Skill',
  description: 'Description of the skill',
  level: 85
}
```

### 3. Update Projects
**File: `src/components/Projects.jsx`**
- Edit the `projects` array
- Update title, description, tech tags
- Add your actual GitHub and live links

Example:
```javascript
{
  icon: '🎮',
  title: 'My Project Name',
  description: 'What the project does',
  tech: ['React', 'CSS', 'JavaScript'],
  github: 'https://github.com/yourprojects/project',
  live: 'https://yourproject.com'
}
```

### 4. Update Stats
**File: `src/components/Stats.jsx`**
- Change the `stats` array values
- Update labels and icons

Example:
```javascript
{
  number: 50,
  label: 'Projects Completed',
  icon: '📦'
}
```

### 5. Color Theme
**File: `src/App.css`**
Look for `:root` section (top of file):

```css
:root {
  --neon-cyan: #00d9ff;        /* Main neon color */
  --neon-purple: #d946ef;      /* Accent color */
  --neon-green: #39ff14;       /* Success/highlight */
  --dark-bg: #0a0e27;          /* Background */
  --dark-secondary: #1a1f3a;   /* Secondary bg */
  --text-primary: #e0e0e0;     /* Main text */
  --text-secondary: #a0a0a0;   /* Secondary text */
}
```

### 6. Font Customization
**File: `index.html`**
- Change font link (currently Fira Code)
- Or import a different Google Font

### 7. Update Navigation
**File: `src/components/Navigation.jsx`**
- Change "&lt;Swarnim /&gt;" to your brand/name
- The nav links auto-generate from section IDs

### 8. Contact Form
**File: `src/components/Contact.jsx`**
- The form currently logs to console
- To send emails, integrate with:
  - EmailJS
  - Formspree
  - Backend API
  - Mailgun, SendGrid, etc.

Example with Formspree:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  
  const response = await fetch('https://formspree.io/f/YOUR_ID', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' }
  })
  
  if (response.ok) {
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }
}
```

## CSS Classes Reference

### Main Sections
- `.hero` - Hero section
- `.about` - About section
- `.skills` - Skills section
- `.projects` - Projects section
- `.stats` - Stats section
- `.contact` - Contact section
- `.footer` - Footer

### Components
- `.nav` - Navigation bar
- `.skill-card` - Individual skill card
- `.project-card` - Individual project card
- `.stat-item` - Individual stat box
- `.btn-primary`, `.btn-secondary` - Button styles

### Typography & Effects
- `.hero-title` - Hero main title
- `.hero-subtitle` - Hero subtitle
- `.typing-effect` - Typing animation text
- `.role-badge` - Role badges
- `.neon-cyan`, `.neon-purple` - Neon text colors

## Animation Keyframes

Located in `src/App.css`, customizable:
- `slideInDown` - Slide in animation
- `slideInUp` - Slide in upward
- `fadeIn` - Fade effect
- `float` - Floating animation
- `typing` - Typing effect
- `pulse` - Pulse effect
- `shimmer` - Shimmer effect

## Responsive Breakpoints

```css
@media (max-width: 768px) { }   /* Tablets */
@media (max-width: 480px) { }   /* Mobile */
```

## Performance Tips

1. **Disable Particles on Mobile**: Comment out `<ParticleBackground />` in App.jsx
2. **Optimize Images**: Use WebP format when possible
3. **Lazy Load Projects**: Consider implementing with Intersection Observer
4. **Minify CSS**: Already done in production build

## Deployment Checklist

- [ ] Update all personal information
- [ ] Replace placeholder images
- [ ] Update social links
- [ ] Test form submissions
- [ ] Check mobile responsiveness
- [ ] Optimize images
- [ ] Set up analytics (Google Analytics)
- [ ] Add favicon
- [ ] Update meta tags for SEO
- [ ] Test across browsers

## SEO Meta Tags

Update in `index.html`:
```html
<meta name="description" content="Your portfolio description">
<meta name="keywords" content="developer, designer, web developer">
<meta name="author" content="Your Name">
```

## Social Links

Update social links in `Footer` (App.jsx):
- GitHub: `https://github.com/yourprofile`
- LinkedIn: `https://linkedin.com/in/yourprofile`
- Twitter: `https://twitter.com/yourprofile`

## Helpful Resources

- **Google Fonts**: https://fonts.google.com
- **Color Picker**: https://coolors.co
- **Emoji Library**: https://emojipedia.org
- **SVG Icons**: https://heroicons.com
- **CSS Gradients**: https://gradientgenerator.com

## Common Customizations

### Change Primary Color (Cyan to Blue)
```css
--neon-cyan: #0080ff;
```

### Adjust Animation Speed
Search for `0.3s ease` or similar and modify duration.

### Remove Particle Background
In `App.jsx`, remove or comment:
```javascript
<ParticleBackground />
```

### Add More Projects
Duplicate an object in the `projects` array in Projects.jsx.

### Disable Form Success Message
In Contact.jsx, remove or comment the success feedback div.

---

**Need Help?** Check the main PORTFOLIO_GUIDE.md for detailed information!
