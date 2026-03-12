### WEEKS 18–19 — React Router, Context, and Custom Hooks

| Day | Topics | Deliverable |
|-----|--------|-------------|
| **Day 11** | React Router · Define Routes, use Link, navigate between 3 pages | — |
| **Day 12** | useParams, useNavigate, nested routes, 404 page | — |
| **Day 13** | useContext: create a Context, Provider, Consumer · Build a theme toggle | — |
| **Day 14** | Combine Router + Context: cart state shared across pages | — |
| **Day 15** | TASK 13: Multi-page SPA — Home + Search + Favourites + Detail pages | **Task 13** |
| **Day 16** | Custom hooks: useFetch, useLocalStorage, useDebounce | — |
| **Day 17** | useMemo and useCallback — what they do and when NOT to use them | — |
| **Day 18** | Forms in React: controlled components, validation | — |
| **Day 19** | React ecosystem: Axios vs fetch, Tailwind CSS in React | — |
| **Day 20** | TASK 14: Movie Search App — React Router + Context + OMDB API · Deployed to Vercel | **Task 14** |

---

## ✅ Phase 4 Completion Checklist

- [ ] Understand the component lifecycle and when useEffect runs
- [ ] Can build a complete multi-page SPA with React Router
- [ ] Comfortable lifting state and using Context for shared state
- [ ] Can write custom hooks and explain why they are useful
- [ ] All 4 tasks deployed to Vercel with live URLs on GitHub README

---
---

# ╔══════════════════════════════════════╗
# ║  PHASE 5 — Node.js + Express        ║
# ║  The Backend                         ║
# ╚══════════════════════════════════════╝

> **Duration:** 5 Weeks · 25 Days · Weeks 21–25
> **Difficulty:** ⭐⭐⭐⭐ Advanced

---

## 🧠 What Is Node.js — Really?

Node.js takes JavaScript out of the browser and puts it on the server. Express is a minimal framework that makes building HTTP APIs with Node.js fast and structured.

The key insight: the same language (JavaScript), two environments. After Phase 5, you write the server that your React app talks to.

---

## 🚫 What to STRICTLY AVOID in Phase 5

```
❌ DO NOT store plain text passwords — always hash with bcrypt
❌ DO NOT put JWT_SECRET or DB credentials in your code — use .env
❌ DO NOT return stack traces to the client — log server-side only
❌ DO NOT skip input validation — never trust what the client sends
❌ DO NOT commit your .env file to GitHub — add it to .gitignore immediately
❌ DO NOT use synchronous fs methods in a server — they block all requests
❌ DO NOT forget res.status() — always send the correct HTTP status code
```

---