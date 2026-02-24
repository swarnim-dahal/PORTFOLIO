# 🚀 Quick Start Guide

## Installation (First Time Only)

```bash
cd Myprotfolio
npm install
npm run dev
```

Your portfolio will be available at `http://localhost:5173`

---

## Most Important Customizations

### 1. Change Your Name (Required!)
**File**: `src/components/Hero.jsx` (Line 25)
```javascript
<h1 className="hero-title">Hi, I'm Swarnim Dahal</h1>
// Change to:
<h1 className="hero-title">Hi, I'm YOUR NAME</h1>
```

### 2. Update Your Roles
**File**: `src/components/Hero.jsx` (Line 10)
```javascript
const roles = ['Full-Stack Developer', 'Tech Enthusiast', 'IoT Learner', 'Creative Coder']
// Change to your roles:
const roles = ['Your Role 1', 'Your Role 2', 'Your Role 3']
```

### 3. Update Your Skills
**File**: `src/components/Skills.jsx` (Line 59)
```javascript
const skills = [
  {
    icon: '🎨',
    title: 'Web Design',
    description: 'Your skill description',
    level: 85  // 0-100
  },
  // ... more skills
]
```

### 4. Add Your Projects
**File**: `src/components/Projects.jsx` (Line 3)
```javascript
const projects = [
  {
    icon: '🎮',
    title: 'Your Project Name',
    description: 'What your project does',
    tech: ['React', 'CSS3', 'JavaScript'],
    github: 'https://github.com/yourusername/project',
    live: 'https://yourproject-demo.com'
  },
  // ... more projects
]
```

### 5. Update Your Stats
**File**: `src/components/Stats.jsx` (Line 53)
```javascript
const stats = [
  {
    number: 50,           // Change this
    label: 'Projects Completed',
    icon: '📦'
  },
  // ... more stats
]
```

### 6. Update Your Brand Name
**File**: `src/components/Navigation.jsx` (Line 17)
```javascript
<div className="nav-brand" ...>
  &lt;Swarnim /&gt;
</div>
// Change to:
<div className="nav-brand" ...>
  &lt;YOUR_NAME /&gt;
</div>
```

### 7. Change Colors (Optional)
**File**: `src/App.css` (Line 6-16)
```css
:root {
  --neon-cyan: #00d9ff;      /* Change this */
  --neon-purple: #d946ef;    /* Change this */
  --neon-green: #39ff14;     /* Change this */
  --dark-bg: #0a0e27;        /* Change this */
  /* ... rest of colors */
}
```

---

## Testing Your Changes

1. **Live Preview**: Changes appear immediately (HMR)
2. **Mobile Test**: Open DevTools (F12) → Toggle device toolbar
3. **Check All Sections**: Scroll through entire page
4. **Test Interactions**:
   - Click navigation links
   - Hover on cards
   - Fill contact form
   - Check animations on scroll

---

## Deploy to Web (Free Options)

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel
# Follow prompts, choose "Myprotfolio" folder
```

### Option 2: Netlify
1. Build: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder

### Option 3: GitHub Pages
```bash
# Update vite.config.js to add base:
# base: '/repo-name/'

npm run build
# Then push to GitHub and enable Pages in repo settings
```

---

## Troubleshooting

### Issue: Styles look wrong
**Solution**: Clear cache and rebuild
```bash
rm -rf node_modules/.vite
npm run dev
```

### Issue: Some animations not working
**Solution**: Check browser support (need modern browser)
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

### Issue: Form not sending emails
**Solution**: This is expected! Contact form needs backend setup:
- Use Formspree: https://formspree.io
- Use EmailJS: https://www.emailjs.com
- Use Netlify Forms: https://docs.netlify.com/forms/overview/

---

## Folder Guide

```
src/
├── components/     ← Edit these to customize content
│   ├── Hero.jsx           → Main title & intro
│   ├── About.jsx          → Your bio
│   ├── Skills.jsx         → Your skills
│   ├── Projects.jsx       → Your projects
│   ├── Stats.jsx          → Achievement numbers
│   └── Contact.jsx        → Contact form
├── App.jsx         ← Main component (don't usually edit)
├── App.css         ← All styling (can customize colors here)
└── main.jsx        ← Entry point (don't edit)
```

---

## Key Files You'll Edit

| File | What to Change | Difficulty |
|------|----------------|------------|
| Hero.jsx | Name, roles | Easy |
| About.jsx | Bio, description | Easy |
| Skills.jsx | Skills, proficiency | Easy |
| Projects.jsx | Project data, links | Easy |
| Stats.jsx | Numbers, labels | Easy |
| App.css | Colors, fonts | Medium |
| Contact.jsx | Form integration | Hard |

---

## Quick Edits Cheatsheet

```
Need to...                          → Go to...
Change your name                    → Hero.jsx line 25
Change color theme                  → App.css line 6-16
Add a skill                          → Skills.jsx (duplicate a skill object)
Add a project                        → Projects.jsx (duplicate a project object)
Update stats                         → Stats.jsx (update the stats array)
Change navigation brand             → Navigation.jsx line 17
Update about section                → About.jsx
Disable particle background         → App.jsx (remove ParticleBackground)
Change font                          → index.html (Google Fonts link)
```

---

## Tips & Tricks

### 🎨 Color Customization
Use https://coolors.co to generate color palettes, then update CSS variables.

### 📸 Add Profile Image
Replace the gradient placeholder in About.jsx with an `<img>` tag:
```javascript
<div className="about-image">
  <img src="/your-image.jpg" alt="Your Name" />
</div>
```

### 🔗 Add Social Links
Update social links in footer (bottom of App.jsx):
```javascript
<a href="https://github.com/yourprofile">GitHub</a>
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
```

### ✨ Add More Sections
Duplicate a section component and customize it.

### 🎬 Adjust Animation Speed
In App.css, change animation durations. Example:
```css
animation: slideInDown 0.8s ease;  /* Change 0.8s to another value */
```

### 🚫 Disable Animations
Remove animation properties from CSS classes.

---

## Common Questions

**Q: Can I change the dark theme to light?**
A: Yes! Update CSS variables in App.css for light mode colors.

**Q: Can I add more projects?**
A: Yes! Add more objects to the `projects` array in Projects.jsx.

**Q: How do I get emails from the contact form?**
A: Integrate with Formspree, EmailJS, or your backend.

**Q: Can I use this with my own domain?**
A: Yes! Deploy to Vercel/Netlify and connect your domain.

**Q: How do I add a blog?**
A: Create a new Blog.jsx component and add it to App.jsx.

**Q: Can I remove animations?**
A: Yes, just delete animation properties from App.css classes.

---

## Performance Tips

1. **Images**: Optimize images before uploading
2. **Particles**: Disable on very low-end devices
3. **CSS**: Already minified in production
4. **JavaScript**: Already optimized by Vite

---

## Before Deploying

- [ ] Update all text (name, bio, skills, projects)
- [ ] Add real project links
- [ ] Update social links
- [ ] Test form (or integrate email service)
- [ ] Check mobile responsiveness
- [ ] Test all links work
- [ ] Optimize images
- [ ] Update page title in index.html
- [ ] Update meta description in index.html

---

## Final Build

When ready to deploy:

```bash
npm run build
```

This creates a `dist` folder with optimized production files. Upload this folder to your hosting.

---

## Need Help?

1. Check [PORTFOLIO_GUIDE.md](./PORTFOLIO_GUIDE.md) for detailed info
2. Check [CUSTOMIZATION.md](./CUSTOMIZATION.md) for specific edits
3. Check [IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md) for complete overview

---

## You're All Set! 🎉

Your portfolio is ready to customize and deploy. Start by editing the files mentioned above, and you'll have a professional portfolio online in minutes!

Good luck! 🚀
