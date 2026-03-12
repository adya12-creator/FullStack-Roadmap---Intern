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