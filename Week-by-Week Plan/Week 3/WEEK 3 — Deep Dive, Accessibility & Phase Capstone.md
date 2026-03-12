### ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
### WEEK 3 — Deep Dive, Accessibility & Phase Capstone
### ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

| Day | Topics to Learn | Task / Deliverable |
|-----|----------------|-------------------|
| **Day 1** | Accessibility: ARIA roles, aria-label, aria-describedby · Tab order and keyboard navigation · Screen reader considerations | — |
| **Day 2** | Meta SEO tags: description, og:title, og:image · Favicon setup · Linking CSS and JS files (preview only) | — |
| **Day 3** | HTML entities: &amp;, &lt;, &gt;, &copy;, &nbsp; · HTML validation using validator.w3.org | — |
| **Day 4** | Review: rebuild Day 1 page from memory · Peer review: swap HTML files with another student | — |
| **Day 5** | Phase Capstone: Restaurant website | **Task 3: Restaurant Site** |

---

#### TASK 3 — Phase Capstone: Restaurant Website

**✅ Day 15 Task — TASK 3 (Phase Capstone)**
```
Build a 3-page restaurant website:
  index.html   → Home: hero section, about, featured dishes
  menu.html    → Full menu as a properly structured HTML table
  contact.html → Contact form + embedded Google Maps iframe + address

Requirements:
✅ Semantic HTML throughout — no div-soup
✅ At least one <figure> with <figcaption> on every page
✅ The menu page uses <table> with <thead>, <tbody>, <tfoot>
✅ The contact page uses a full <form> with all input types from Week 2
✅ All images have descriptive alt text
✅ All pages pass W3C validation with zero errors
✅ Push to GitHub, enable GitHub Pages, demo the live URL

Commit message: "feat: restaurant site — Phase 1 capstone"
```

---

## ✅ Phase 1 Completion Checklist

- [ ] All 3 tasks completed and committed to GitHub
- [ ] Portfolio site is live on GitHub Pages with a public URL
- [ ] Every page passes W3C validation with zero errors
- [ ] Can write the full HTML skeleton from memory in 2 minutes
- [ ] Understands block vs inline elements without Googling
- [ ] Can explain what semantic HTML is and why it matters
- [ ] No inline `style=""` attributes anywhere in any file

---
---

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