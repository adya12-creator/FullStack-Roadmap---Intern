### WEEK 6–7 — Tasks 5 & 6 + Phase Review

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
---

# ╔══════════════════════════════════════╗
# ║  PHASE 3 — JAVASCRIPT               ║
# ║  The Brain of the Web               ║
# ╚══════════════════════════════════════╝

> **Duration:** 8 Weeks · 40 Working Days · Weeks 8–15
> **Difficulty:** ⭐⭐⭐ Intermediate
> **Goal:** Write real programs, control the DOM, handle events, make API calls, and deeply understand async JavaScript.

> ⚠️ **This is the most critical phase. Every framework you learn later — React, Node — is just JavaScript with a structure on top. If your JavaScript is weak, everything after is shaky. Take the full 8 weeks.**

---

## 🧠 What Is JavaScript — Really?

JavaScript is the only programming language that runs natively in browsers. It has two environments:
- **Browser** (Phase 3): manipulates the DOM, handles events, fetches APIs
- **Node.js** (Phase 5): runs on the server, no DOM, but has the file system and networking

The same language, two different environments — that is the full-stack power.

---

## 🚫 What to STRICTLY AVOID in Phase 3

```
❌ DO NOT use var — ever. Only let and const.
❌ DO NOT modify the DOM in a for loop — batch updates, or use DocumentFragment
❌ DO NOT use innerHTML with user-provided content — security vulnerability (XSS)
❌ DO NOT write async code without try/catch — silent failures are the worst bugs
❌ DO NOT use == for comparisons — always use ===
❌ DO NOT add event listeners inside a loop — each iteration adds another listener
❌ DO NOT move to React without understanding closures, async/await, and array methods
❌ DO NOT skip the async/await week — everything after uses it constantly
```

---
