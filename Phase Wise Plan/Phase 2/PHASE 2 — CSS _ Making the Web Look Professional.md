# ╔══════════════════════════════════════╗
# ║  PHASE 2 — CSS                       ║
# ║  Making the Web Look Professional    ║
# ╚══════════════════════════════════════╝

> **Duration:** 4 Weeks · 20 Working Days · Weeks 4–7
> **Difficulty:** ⭐⭐ Beginner+
> **Goal:** Style any webpage from scratch, build responsive layouts, and make your Phase 1 portfolio look professional on all screen sizes.

---

## 🧠 What Is CSS — Really?

CSS tells the browser **how elements look**. You describe rules: "select this element, apply this property with this value."

The word **Cascading** means three things happen simultaneously:
1. Styles flow downward from parent to child (inheritance)
2. Later rules override earlier rules (cascade order)
3. More specific rules beat less specific rules (specificity)

Understanding all three is what separates developers who fight CSS from developers who control it.

---

## 🚫 What to STRICTLY AVOID in Phase 2

```
❌ DO NOT use Bootstrap or any CSS framework — learn pure CSS first
❌ DO NOT use px for font sizes on body text — use rem
❌ DO NOT hardcode colours everywhere — use CSS variables from Day 1
❌ DO NOT use float for layout — it is a 2005 technique, use Flexbox/Grid
❌ DO NOT use !important — it means your specificity logic is broken
❌ DO NOT write styles inline on HTML elements — CSS belongs in .css files
❌ DO NOT use fixed pixel widths for layout containers
❌ DO NOT skip the box-sizing: border-box reset — always add it first
❌ DO NOT ignore mobile — test on real phone or DevTools every day
```

---

## 📅 Week-by-Week Plan

---

### ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
### WEEK 4 — CSS Foundations: Selectors, Box Model, Typography
### ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

| Day | Topics to Learn | Task / Deliverable |
|-----|----------------|-------------------|
| **Day 1** | CSS selectors · The cascade and specificity · Connecting CSS to HTML | — |
| **Day 2** | Box model: margin, padding, border, box-sizing · Block vs inline · Width and height | — |
| **Day 3** | Colors, Typography, CSS Custom Properties (variables) | — |
| **Day 4** | Flexbox: one-dimensional layout · justify-content, align-items, flex-wrap | — |
| **Day 5** | CSS Grid: two-dimensional layout · grid-template-columns, auto-fit, minmax | **Task 4: Bio Page styled** |

---

#### DAY 1 — CSS Syntax, Selectors, and the Cascade

```css
/* ── HOW TO CONNECT CSS TO HTML ── */
/* In your HTML <head>: */
/* <link rel="stylesheet" href="styles.css"> */
/* This is the only correct way. Never use <style> tags or inline styles. */


/* ── ANATOMY OF A CSS RULE ── */
selector {          /* WHO to target */
  property: value;  /* WHAT to change */
}


/* ── SELECTORS ── */
h1 { color: navy; }         /* Element: targets ALL h1 tags */
.card { background: white; } /* Class: targets class="card" */
#hero { min-height: 100vh; } /* ID: targets id="hero" — use sparingly */
.card p { color: gray; }    /* Descendant: p inside .card */
ul > li { list-style: none; } /* Direct child */
h1, h2, h3 { font-family: Georgia; } /* Multiple targets */

/* Pseudo-classes: special states */
a:hover  { color: blue; }
a:focus  { outline: 2px solid blue; } /* keyboard navigation — never remove this */
li:first-child { font-weight: bold; }
li:nth-child(odd) { background: #f5f5f5; } /* alternating rows */

/* Pseudo-elements: virtual parts */
h2::before { content: "▶ "; color: blue; } /* adds content before h2 */


/* ── THE CASCADE: which rule wins? ── */

/* Rule 1: Later rules override earlier rules (same specificity) */
p { color: red; }
p { color: blue; }   /* blue wins — written later */

/* Rule 2: More specific selectors beat less specific ones */
p          { color: red; }    /* specificity: 0,0,1 */
.text      { color: blue; }   /* specificity: 0,1,0 — wins */
#main-text { color: green; }  /* specificity: 1,0,0 — wins over both */

/* Specificity score (roughly):
   #id           = 0,1,0,0  (highest among selectors)
   .class        = 0,0,1,0
   element (p)   = 0,0,0,1  (lowest)
   !important    = overrides all — NEVER use it                     */
```

**✅ Day 1 Task**
```
1. Create styles.css and link it to all 3 HTML pages
2. At the VERY TOP of styles.css, add this reset (type it, understand each line):
   *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
3. Write rules for: body, h1, h2, h3, p, a, a:hover, ul, li
4. Create a .container class: max-width: 1100px; margin: 0 auto;
   Wrap your page content in <div class="container"> in the HTML
5. Make every other row of your skills table have a light grey background
   using nth-child(even)

⚠️ AVOID: Never use !important. If you feel the urge, a more specific selector exists.
```

---

#### DAY 2 — The Box Model: How Elements Take Up Space

```css
/* Every HTML element is a rectangular box with 4 layers: */
/*
  ┌─────────────────────────────────────┐
  │               MARGIN                │  ← space OUTSIDE the element
  │   ┌─────────────────────────────┐   │
  │   │           BORDER            │   │  ← the visible edge
  │   │   ┌─────────────────────┐   │   │
  │   │   │       PADDING       │   │   │  ← space INSIDE, around content
  │   │   │   ┌─────────────┐   │   │   │
  │   │   │   │   CONTENT   │   │   │   │  ← the actual text/image
  │   │   │   └─────────────┘   │   │   │
  │   │   └─────────────────────┘   │   │
  │   └─────────────────────────────┘   │
  └─────────────────────────────────────┘
*/

/* THE MOST IMPORTANT RESET — add this to every project */
*, *::before, *::after {
  box-sizing: border-box;
  /* Without this: width: 200px + padding: 20px = 240px total (surprising!)
     With this:    width: 200px + padding: 20px = 200px total (expected) */
}

/* Box model properties */
.card {
  width: 300px;
  padding: 20px;           /* all 4 sides */
  padding: 16px 24px;      /* top/bottom  left/right */
  padding: 8px 12px 16px 24px; /* top right bottom left (clockwise) */

  margin: 0 auto;          /* 0 top/bottom, auto left/right = centred horizontally */
  margin-bottom: 24px;     /* space below this element */

  border: 1px solid #e5e7eb;
  border-radius: 8px;      /* rounded corners */
  box-shadow: 0 4px 12px rgba(0,0,0,0.1); /* x y blur colour */
}

/* Units you will use most */
/*
  px    — exact pixels. Use for: borders, shadows, small fixed sizes
  rem   — relative to root (html) font size. Use for: fonts, spacing (1rem = 16px)
  %     — percentage of parent. Use for: widths inside containers
  vh/vw — percentage of viewport. Use for: full-screen sections
  ch    — width of "0" character. Use for: max-width on text (65ch is ideal reading width)
*/
body    { font-size: 1rem; }    /* 16px */
h1      { font-size: 2.5rem; }  /* 40px — scales with browser font settings */
article { max-width: 65ch; }    /* ideal reading line length */
```

---

#### DAY 3 — CSS Variables and Typography

```css
/* ── CSS CUSTOM PROPERTIES (Variables) ── */
/* Define once in :root. Use everywhere. Change once, updates everywhere. */

:root {
  /* Colour palette */
  --colour-primary:    #2563eb;
  --colour-text:       #1f2937;
  --colour-muted:      #6b7280;
  --colour-bg:         #f9fafb;
  --colour-surface:    #ffffff;
  --colour-border:     #e5e7eb;

  /* Spacing scale */
  --space-xs:   4px;
  --space-sm:   8px;
  --space-md:  16px;
  --space-lg:  24px;
  --space-xl:  48px;

  /* Typography */
  --font-body:    'Inter', system-ui, sans-serif;
  --font-heading: 'Sora', Georgia, serif;

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.1);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.1);
}

/* Using variables */
.btn-primary {
  background-color: var(--colour-primary);
  color: white;
  padding: var(--space-sm) var(--space-lg);
}

/* ── TYPOGRAPHY ── */
/* Import Google Fonts — add at the VERY TOP of your CSS */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Sora:wght@700;800&display=swap');

body {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.6;    /* unitless — 1.6x the font size, best for readability */
  color: var(--colour-text);
}

h1, h2, h3 {
  font-family: var(--font-heading);
  line-height: 1.2;    /* tighter for headings */
}

p { max-width: 65ch; } /* 65ch = ideal line length for comfortable reading */
```

**✅ Day 3 Task**
```
1. Add the full :root block to your styles.css
2. Import 2 Google Fonts: one for headings (Sora), one for body (Inter)
3. Replace every hardcoded colour in your CSS with a variable
4. After step 3: change --colour-primary to a different colour in :root
   Watch EVERY element update instantly. That is the power of variables.
⚠️ AVOID: Never hardcode the same colour twice in CSS.
⚠️ AVOID: Never use more than 2 font families on one page.
```

---

#### DAY 4 — Flexbox: One-Dimensional Layout

```css
/*
  Flexbox has two actors:
  1. The CONTAINER (parent) — gets display: flex
  2. The ITEMS (children) — controlled by container properties
*/

.navbar {
  display: flex;
  flex-direction: row;          /* row (default) | column */
  justify-content: space-between; /* aligns along the MAIN axis */
  /* flex-start | flex-end | center | space-between | space-around */
  align-items: center;          /* aligns along the CROSS axis */
  /* stretch | flex-start | flex-end | center | baseline */
  gap: 16px;                    /* space between items */
  flex-wrap: wrap;              /* allow wrapping to next line */
}

/* ── THE MOST USEFUL TRICK: PERFECT CENTRING ── */
.full-page-centre {
  display: flex;
  justify-content: center;   /* centre horizontally */
  align-items: center;       /* centre vertically */
  min-height: 100vh;         /* full screen */
}

/* ── REAL-WORLD PATTERNS ── */

/* Pattern 1: Navbar with logo left, links right */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--space-xl);
  height: 64px;
}
.nav-logo { margin-right: auto; } /* pushes everything after it to the right */

/* Pattern 2: Card row that wraps on mobile */
.card-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-lg);
}
.card {
  flex: 1;               /* grow to fill available space */
  min-width: 250px;      /* but never smaller than this */
}
```

> 💡 **Play Flexbox Froggy at flexboxfroggy.com — complete all 24 levels. It teaches you more effectively than reading.**

---

#### DAY 5 — CSS Grid: Two-Dimensional Layout + Tasks 4–6

```css
/*
  Grid = two-dimensional layout (rows AND columns simultaneously).
  Use Grid for: page layouts, image galleries, dashboard panels.
  Use Flexbox for: navbars, button groups, card rows, any 1D alignment.
*/

/* ── GRID BASICS ── */
.layout {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;  /* 3 equal columns */
  grid-template-columns: 250px 1fr;    /* sidebar + content */
  grid-template-columns: repeat(3, 1fr); /* same as 1fr 1fr 1fr */
  grid-template-rows: auto 1fr auto;   /* header, content, footer */
  gap: 24px;                           /* space between all cells */
}

/* ── AUTO-FIT with MINMAX — the magic pattern for responsive grids ── */
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-lg);
  /* This creates as many columns as fit, each minimum 280px wide.
     On a desktop: shows 3 cards per row.
     On a tablet:  shows 2 cards per row.
     On a phone:   shows 1 card per row.
     NO MEDIA QUERIES NEEDED for this responsive behavior. */
}

/* ── PLACING ITEMS IN THE GRID ── */
.hero {
  grid-column: 1 / -1; /* spans from first line to last line = full width */
}
.sidebar {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
}

/* ── NAMED AREAS — the most readable way ── */
.page {
  display: grid;
  grid-template-areas:
    "header  header"
    "sidebar content"
    "footer  footer";
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
.site-header  { grid-area: header; }
.site-sidebar { grid-area: sidebar; }
.site-content { grid-area: content; }
.site-footer  { grid-area: footer; }
```

> 💡 **Play CSS Grid Garden at cssgridgarden.com — complete all 28 levels.**

---

### ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
### WEEK 5 — Responsive Design & Media Queries
### ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

| Day | Topics to Learn | Task / Deliverable |
|-----|----------------|-------------------|
| **Day 1** | Media queries · Mobile-first approach · Responsive units | — |
| **Day 2** | Responsive images · Fluid typography with clamp() | — |
| **Day 3** | Positioning: static, relative, absolute, fixed, sticky | — |
| **Day 4** | Transitions and animations · Hover effects · @keyframes | — |
| **Day 5** | TASK 5: Responsive Landing Page | **Task 5: Landing Page** |

---

#### DAY 6 — Media Queries: Mobile-First Design

```css
/* ── MOBILE-FIRST: start with mobile styles, add desktop exceptions ── */
/* This is the professional approach — most users are on phones */

/* Mobile styles (no query needed — these are the defaults) */
.nav-links { display: none; }          /* hide desktop nav on mobile */
.hero { flex-direction: column; }      /* stack vertically on mobile */
h1 { font-size: 1.75rem; }

/* Tablet: screens 768px and wider */
@media (min-width: 768px) {
  .hero { flex-direction: row; }       /* side by side on tablet */
  h1 { font-size: 2rem; }
}

/* Desktop: screens 1024px and wider */
@media (min-width: 1024px) {
  .nav-links { display: flex; }        /* show desktop nav */
  h1 { font-size: 2.5rem; }
  .sidebar { display: block; }
}

/* ── STANDARD BREAKPOINTS ── */
/* 375px  — small phones (iPhone SE) */
/* 768px  — tablets (iPad) */
/* 1024px — small laptops */
/* 1280px — standard desktop */

/* ── FLUID TYPOGRAPHY with clamp() ── */
/* clamp(minimum, preferred, maximum) */
h1 { font-size: clamp(1.5rem, 5vw, 3rem); }
/* On 375px screen: ~1.5rem    (minimum)
   On 768px screen: ~2.5rem   (fluid, scaling with viewport)
   On 1440px screen: 3rem     (capped at maximum)
   NO MEDIA QUERIES NEEDED — scales automatically */
```

---

#### DAY 7 — Transitions, Animations, and Hover Effects

```css
/* ── TRANSITIONS — smooth state changes ── */
.btn {
  background-color: var(--colour-primary);
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
  /* "ease" = slow start, fast middle, slow end (most natural) */
}
.btn:hover {
  background-color: #1d4ed8;   /* darker shade */
  transform: translateY(-2px); /* lift 2px up */
}
.btn:active {
  transform: translateY(0);    /* press back down on click */
}


/* ── ANIMATIONS with @keyframes ── */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.hero-text {
  animation: fadeInUp 0.6s ease forwards;
  /* forwards: element keeps the "to" state after animation ends */
}

/* ── SLIDING UNDERLINE TRICK (classic professional nav effect) ── */
.nav-link {
  position: relative;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--colour-primary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s ease;
}
.nav-link:hover::after {
  transform: scaleX(1);
}
```

**✅ Key Animation Rules**
```
⚠️ AVOID: Never animate width or height — they force layout recalculation.
   Animate transform and opacity instead — they are GPU-accelerated and smooth.
⚠️ AVOID: Never use position: absolute for layout you can achieve with Flexbox/Grid.
```

---

### WEEKS 6–7 — Tasks 5 & 6 + Phase Review

#### TASK 5 — Responsive Landing Page (Days 11–13)

**✅ Days 11–13 Task**
```
Build: landing.html + landing.css — a product landing page from scratch

Day 11 — HTML structure only (no CSS):
✅ Sticky navbar: logo + links + CTA button
✅ Hero: headline, subheadline, 2 CTA buttons, image placeholder
✅ Features: section title + 3 feature cards (icon, title, description)
✅ Testimonials: 3 quote cards
✅ Pricing: 3 plan cards (Basic, Pro, Enterprise)
✅ Footer: 4 columns of links + copyright

Day 12 — CSS layout:
✅ Navbar with Flexbox
✅ Hero with Grid (text left, image right) — 1 column on mobile
✅ Features with CSS Grid: auto-fit minmax(240px, 1fr)
✅ Pricing: 3-column Grid, middle card visually highlighted

Day 13 — Polish:
✅ All CSS variables — no hardcoded values
✅ Hover effects on all cards and buttons
✅ Responsive at 375px, 768px, 1280px
✅ Smooth scroll: html { scroll-behavior: smooth; }
✅ Deploy to GitHub Pages
```

#### TASK 6 — Styled Registration Form + Phase Review (Days 14–15)

**✅ Days 14–15 Task**
```
Day 14 — Style register.html:
✅ Inputs: consistent padding, border, border-radius
✅ Inputs on :focus: border-color changes to primary, subtle box-shadow
✅ Labels: displayed as block above inputs, font-weight: 600
✅ Error state: .input-error class with red border
✅ Buttons styled with hover + active states
✅ Responsive: single column on mobile, two columns on desktop

Day 15 — Phase Review:
✅ Open all pages on your phone — do they look correct?
✅ Run Lighthouse audit (DevTools → Lighthouse) — aim for 90+ performance
✅ Write your personal CSS cheatsheet:
   - What does box-sizing: border-box do?
   - When do you use Flexbox vs Grid?
   - What is the cascade?
   - How do CSS variables work?
```

---

## ✅ Phase 2 Completion Checklist

- [ ] Flexbox Froggy: all 24 levels complete
- [ ] Grid Garden: all 28 levels complete
- [ ] All 3 tasks complete and on GitHub
- [ ] Portfolio site is responsive at 375px, 768px, and 1280px
- [ ] All colours come from CSS variables — nothing hardcoded
- [ ] Lighthouse accessibility score is above 85
- [ ] Can explain the cascade, specificity, and box model without Googling

---