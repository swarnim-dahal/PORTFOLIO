# Portfolio Features Visual Reference

## 🎨 Color Palette

```
Primary Colors:
├── Neon Cyan (#00d9ff)       → Main accent, glow effects
├── Neon Purple (#d946ef)     → Secondary accent
├── Neon Green (#39ff14)      → Success, highlights
└── Dark Colors
    ├── Background (#0a0e27)
    ├── Secondary (#1a1f3a)
    └── Tertiary (#2d3250)

Text Colors:
├── Primary (#e0e0e0)         → Main text
└── Secondary (#a0a0a0)       → Muted text
```

---

## 📐 Layout Structure

```
┌─────────────────────────────────────┐
│        NAVIGATION BAR (Fixed)       │  ← Sticky, 80px height
├─────────────────────────────────────┤
│                                     │
│     HERO SECTION (100vh)           │  ← Full viewport, animated
│     - Title (animated)             │
│     - Typing effect                │
│     - Role badges                  │
│     - CTA buttons                  │
│                                     │
├─────────────────────────────────────┤
│                                     │
│     ABOUT SECTION (100vh)          │  ← 2-column on desktop
│     - Bio text                     │     1-column on mobile
│     - Highlights                   │
│     - Profile image                │
│                                     │
├─────────────────────────────────────┤
│                                     │
│     SKILLS SECTION (100vh)         │  ← 6-column grid (3 on mobile)
│     - 6 Skill cards               │
│     - Progress bars                │
│     - Hover effects                │
│                                     │
├─────────────────────────────────────┤
│                                     │
│     PROJECTS SECTION (100vh)       │  ← 3-column grid (1 on mobile)
│     - Project cards                │
│     - Tech tags                    │
│     - Links                        │
│                                     │
├─────────────────────────────────────┤
│     STATS SECTION (80vh)           │  ← 4 stat boxes
│     - Animated counters            │
│     - Icons & labels               │
│                                     │
├─────────────────────────────────────┤
│                                     │
│     CONTACT SECTION (100vh)        │  ← Form with validation
│     - Form inputs                  │
│     - Submission feedback          │
│                                     │
├─────────────────────────────────────┤
│          FOOTER                    │  ← Social links, copyright
└─────────────────────────────────────┘

+ Scroll Progress Bar (top)
+ Particle Background (behind everything)
```

---

## 🎬 Animation Timeline

```
Page Load (Sequential):
├─ Hero Title          → slideInDown (0.8s)
├─ Hero Subtitle       → slideInUp (0.8s, delay 0.2s)
├─ Description        → fadeIn (1s, delay 0.4s)
├─ Role Badges        → fadeIn (1s, delay 0.6s)
└─ CTA Buttons        → fadeIn (1s, delay 0.8s)

On Scroll:
├─ Skills Progress Bars    → fillBar (2s) [when visible]
├─ Stats Counters          → countUp (2s) [when visible]
└─ Particles               → continuous float movement

On Hover:
├─ Nav Links               → underline slideIn (0.3s)
├─ Buttons                 → translate + glow (0.3s)
├─ Cards                   → translateY + shadow (0.3s)
├─ Skill Icons             → pulse (0.6s)
└─ Images                  → slight scale (0.3s)

Continuous:
├─ Float animations        → 3-4s loops (images, logo)
├─ Particles               → movement + trails
└─ Particle connections    → fade in/out based on distance
```

---

## 🎨 Hover Effects Map

```
Navigation Links:
┌─────────────────┐
│ ABOUT   SKILLS  │
│ ━━━━    ━━━━    │  ← Underline animates in
└─────────────────┘

Buttons:
Before Hover:  Button text
After Hover:   Button text → lifted + glowing

Skill Cards:
Before:  ┌──────────┐     After:  ┌──────────┐
         │ Skill    │            │ Skill    │
         │ Text     │  →         │ Text     │
         │ Progress │            │ Progress │
         └──────────┘            └──────────┘
                                 (Lifted, glowing border)

Project Cards:
Before:  ┌────────────┐   After:  ┌────────────┐
         │ Icon       │          │ Icon       │
         │ Title      │  →       │ Title      │
         │ Content    │          │ Content    │
         └────────────┘          └────────────┘
                                 (Lifted, cyan glow)

Stat Items:
Before:  Box          After:   Box (lifted + purple glow)
```

---

## 📱 Responsive Breakpoints

```
Desktop (>768px):
┌────────────────────────────────────┐
│ About Section: 2 Columns          │
│ Skills Grid: 3 Columns            │
│ Projects Grid: 3 Columns          │
│ Stats Grid: 4 Columns             │
│ Nav Links: Visible                │
└────────────────────────────────────┘

Tablet (768px):
┌────────────────────────┐
│ About: 1 Column       │
│ Skills: 1 Column      │
│ Projects: 1 Column    │
│ Stats: 2 Columns      │
│ Nav: Hidden           │
└────────────────────────┘

Mobile (<480px):
┌──────────────────┐
│ Full Width      │
│ 1 Column        │
│ Nav: Hidden     │
│ Smaller Text    │
│ Touch Friendly  │
└──────────────────┘
```

---

## 🎯 Component Hierarchy

```
App (Main)
├── ParticleBackground
├── Scroll Progress Bar
├── Navigation
│   ├── Brand Logo
│   └── Nav Links
│       ├── Home
│       ├── About
│       ├── Skills
│       ├── Projects
│       ├── Stats
│       └── Contact
│
├── Hero Section
│   ├── Title (animated)
│   ├── Subtitle (typing effect)
│   ├── Description
│   ├── Role Badges
│   └── CTA Buttons
│
├── About Section
│   ├── Content
│   │   ├── Title
│   │   ├── Bio Text
│   │   └── Highlights
│   └── Image (gradient placeholder)
│
├── Skills Section
│   ├── Title
│   └── Skill Cards (6x)
│       ├── Icon
│       ├── Title
│       ├── Description
│       └── Progress Bar
│
├── Projects Section
│   ├── Title
│   └── Project Cards (6x)
│       ├── Image
│       ├── Title
│       ├── Description
│       ├── Tech Tags
│       └── Links
│
├── Stats Section
│   ├── Title
│   └── Stat Items (4x)
│       ├── Icon
│       ├── Number (animated)
│       └── Label
│
├── Contact Section
│   ├── Header
│   ├── Form
│   │   ├── Name Input
│   │   ├── Email Input
│   │   ├── Subject Input
│   │   ├── Message Textarea
│   │   └── Submit Button
│   └── Success Message
│
└── Footer
    ├── Copyright Text
    └── Social Links
```

---

## 🎨 CSS Class Structure

```
Typography Classes:
.hero-title        → 4rem, gradient text, animated
.hero-subtitle     → 1.5rem, purple, typed effect
.section-title     → 3rem, gradient, centered

Container Classes:
.hero              → Full viewport section
.about             → Full viewport section
.skills            → Full viewport section
.projects          → Full viewport section
.stats             → 80vh section
.contact           → Full viewport section

Grid Classes:
.about-container       → 2-column grid
.skills-container      → 3-column auto-fit grid
.projects-container    → 3-column auto-fit grid
.stats-container       → 4-column auto-fit grid

Card Classes:
.skill-card      → Hover: lift + glow
.project-card    → Hover: lift + glow
.stat-item       → Hover: lift + glow

Button Classes:
.btn-primary     → Cyan-green gradient
.btn-secondary   → Purple border, hollow

Input Classes:
.form-input
.form-textarea
.form-label
.form-submit

Animation Classes:
.typing-effect   → Typing + cursor blinking
.role-badge      → Gradient background
.progress-bar    → Animated fill on scroll
.progress-fill   → Gradient fill
```

---

## 🎬 Animation Durations

```
Fast Animations:     0.3s
├─ Hover effects
├─ Link underlines
└─ Border changes

Medium Animations:   0.8s - 1s
├─ Page load effects
├─ Fade in/out
└─ Slide in/up

Slow Animations:     2s - 3s
├─ Progress bars
├─ Number counters
├─ Typing effect
└─ Float effects (infinite)

Very Slow:           4s - 5s
└─ Particle movement (infinite)
```

---

## 🌈 Gradient Usage

```
Text Gradients:
├─ Title: Cyan → Green
├─ Subtitle: Purple
├─ Stats Numbers: Cyan → Green
└─ Section Titles: Purple → Cyan

Background Gradients:
├─ Hero: Cyan fade + Purple fade (corners)
├─ About: Dark → Dark-secondary
├─ Skills: Dark-secondary → Dark
├─ Projects: Dark → Dark-secondary
├─ Contact: Dark → Dark-secondary
└─ Cards: Dark-tertiary + Cyan fade

Button Gradients:
├─ Primary: Cyan → Green
├─ Secondary: Transparent (border only)
└─ Submit: Purple → Cyan

Special Gradients:
├─ Project Card Shimmer: 45° shimmer effect
├─ Particle Trails: Opacity gradient
└─ Skill Card Shine: Rotation gradient
```

---

## 🔧 Customization Points

```
Easy Changes (Colors):
colors.css:root        → Update CSS variables
├─ --neon-cyan
├─ --neon-purple
├─ --neon-green
├─ --dark-bg
└─ etc.

Easy Changes (Content):
Component Files        → Update arrays and text
├─ Hero.jsx: roles array
├─ Skills.jsx: skills array
├─ Projects.jsx: projects array
├─ Stats.jsx: stats array
└─ Contact.jsx: form handling

Medium Changes (Layout):
App.css               → Update CSS properties
├─ Grid templates
├─ Flex properties
└─ Spacing

Hard Changes (Structure):
Component Files       → Create/modify components
├─ Add new sections
├─ Change layout
└─ Restructure DOM
```

---

## 📊 Font Stack

```
Primary Font:
"Fira Code"          ← Google Font, monospace
Fallback:
"Courier New"        ← System monospace
Final Fallback:
monospace            ← Browser default

Font Weights:
400 (Regular)  → Body text
500 (Medium)   → Secondary text
600 (SemiBold) → Subheadings
700 (Bold)     → Headings, buttons
```

---

## ✨ Special Effects

```
Text Shadows:
color: variable
text-shadow: 0 0 10px color_with_opacity
└─ Creates glow effect

Box Shadows:
0 0 20px rgba(color, opacity)
└─ Creates aura/glow around elements

Filters:
backdrop-filter: blur(10px)
└─ Blur background (nav bar)

Transforms:
translateY(-Xpx)     → Lift on hover
scale(1.1)           → Enlarge on hover
rotate(Xdeg)         → Rotation
└─ All 0.3s transition

Opacity Changes:
0.05 - 0.3           → Very subtle (backgrounds)
0.5 - 0.8            → Visible (text, elements)
1                    → Fully opaque
```

---

## 🎯 Typography Sizes

```
Headings:
h1 (Hero Title):     4rem     (Desktop) → 1.8rem (Mobile)
h2 (Section Title):  3rem     (Desktop) → 1.5rem (Mobile)
h3 (Card Title):     1.5rem   (Desktop) → 1.2rem (Mobile)

Body Text:
Regular:             1.05rem  → 0.95rem
Muted:               0.95rem  → 0.9rem
Small:               0.9rem   → 0.85rem

Badges/Tags:
Badge:               12px
Tech Tag:            0.8rem   (10px)
Label:               0.9rem   (14px)
```

---

## 📐 Spacing System

```
Section Padding:
Top/Bottom:          100px    (Desktop) → 50px (Mobile)
Left/Right:          40px     (Desktop) → 20px (Mobile)

Component Gaps:
Large:               40px
Medium:              30px
Small:               15px
Tiny:                10px

Element Padding:
Cards:               40px     (Desktop) → 20px (Mobile)
Form:                15px
Buttons:             15px 40px

Margins:
Section Spacing:     100px
Element Spacing:     20px - 30px
```

---

## This reference covers all major visual elements of your portfolio!

Use this guide to understand how everything fits together and where to make visual customizations.
