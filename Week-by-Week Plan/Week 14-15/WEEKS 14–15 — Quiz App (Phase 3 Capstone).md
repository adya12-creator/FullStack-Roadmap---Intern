### WEEKS 14–15 — Quiz App (Phase 3 Capstone)

#### TASK 10 — Quiz App: Phase Capstone (Days 23–27)

**✅ Days 23–27 Task — Quiz App**
```
Build: quiz.html + quiz.css + questions.js + quiz.js + ui.js

Core features:
✅ 15 questions (mix of JS, HTML, CSS topics)
✅ Each question: { id, question, options: [4], correctIndex, explanation }
✅ Show question text and 4 option buttons
✅ Progress: "Question 4 of 15" + a progress bar
✅ On answer: highlight correct (green) + wrong choice (red)
✅ Show explanation text after answering

Timer:
✅ 30-second countdown per question displayed as a shrinking bar
✅ Bar changes colour: green → yellow → red as time runs out
✅ Auto-advance when timer hits 0

Score screen:
✅ Final score: "10 / 15 — 67%"
✅ Feedback based on score band
✅ Show correct answer for every wrong question
✅ High score saved to localStorage

Code structure (clean separation of concerns):
✅ questions.js: data only
✅ quiz.js: state logic only — no DOM manipulation
✅ ui.js: DOM updates only — reads from quiz.js
✅ Deploy to GitHub Pages
```

---

## ✅ Phase 3 Completion Checklist

- [ ] Can explain closures in your own words without referring to any source
- [ ] Can explain the event loop and why async/await exists
- [ ] All 3 tasks complete: Todo App, Weather App, Quiz App — all deployed
- [ ] Solved at least 30 Easy problems on LeetCode using JavaScript
- [ ] Comfortable using Chrome DevTools: console, network tab, sources tab
- [ ] Can write fetch + async/await + try/catch from memory
- [ ] No `var` anywhere in any code file

---
---

# ╔══════════════════════════════════════╗
# ║  PHASE 4 — React.js                 ║
# ║  Modern Frontend Development        ║
# ╚══════════════════════════════════════╝

> **Duration:** 5 Weeks · 25 Days · Weeks 16–20
> **Difficulty:** ⭐⭐⭐ Intermediate
> **Prerequisite:** SOLID JavaScript — especially closures, array methods, and async/await

---

## 🧠 What Is React — Really?

React is a JavaScript library for building user interfaces. Instead of manually updating the DOM whenever data changes (what you did in Phase 3), React automatically updates the UI when your data changes.

Think of it this way: in vanilla JS you said "find this element and change its text." In React, you say "this component should display this data" — and React handles all the DOM updates for you.

---

## 🚫 What to STRICTLY AVOID in Phase 4

```
❌ DO NOT use class components — functional components + hooks only
❌ DO NOT mutate state directly: never do count = count + 1
❌ DO NOT forget the key prop on list items — causes subtle bugs
❌ DO NOT fetch data without handling loading and error states
❌ DO NOT use useEffect without understanding the dependency array
❌ DO NOT skip learning React Router — single-page navigation is non-negotiable
❌ DO NOT put API keys in React source code — they are visible to everyone
```

---