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