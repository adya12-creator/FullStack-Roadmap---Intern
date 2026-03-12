### WEEKS 23–25 — Full Stack Integration and Deployment

| Day | Topics | Deliverable |
|-----|--------|-------------|
| **Day 11** | CORS setup · Fetch from Express in React · Handle CORS errors | — |
| **Day 12** | Store JWT in React (localStorage) · send in Authorization header | — |
| **Day 13** | Protected frontend pages: redirect to /login if no token | — |
| **Day 14** | Deploy backend to Render.com · Set environment variables in dashboard | — |
| **Day 15** | TASK 17: Full Stack Blog — React + Express + JWT — both deployed | **Task 17** |

---

## ✅ Phase 5 Completion Checklist

- [ ] Can build a complete REST API from scratch with Express
- [ ] Understands password hashing and why plain text storage is dangerous
- [ ] Can implement JWT authentication end-to-end
- [ ] React frontend talks to your own Express backend — all deployed

---
---

# ╔══════════════════════════════════════╗
# ║  PHASE 6 — Databases                 ║
# ║  Storing Real Data                   ║
# ╚══════════════════════════════════════╝

> **Duration:** 4 Weeks · 20 Days · Weeks 26–29
> **Difficulty:** ⭐⭐⭐ Intermediate

---

## 🧠 MongoDB vs PostgreSQL — When to Use Which

| | **MongoDB** | **PostgreSQL** |
|--|-------------|---------------|
| **Type** | NoSQL (documents) | SQL (tables with rows) |
| **Data format** | JSON-like documents | Rows and columns |
| **Schema** | Flexible — schema changes easily | Strict — schema must be defined |
| **Best for** | User content, logs, real-time data | Financial records, inventory, anything relational |
| **Query** | `db.users.find({ age: { $gte: 18 } })` | `SELECT * FROM users WHERE age >= 18` |

---

## 🚫 What to STRICTLY AVOID in Phase 6

```
❌ DO NOT store the MongoDB URI with credentials in your code — use .env
❌ DO NOT use findOne without checking if the result is null first
❌ DO NOT skip schema validation — define required fields and types
❌ DO NOT use SELECT * in SQL when you only need specific columns
❌ DO NOT store sensitive data (passwords, card numbers) without encryption
```

---