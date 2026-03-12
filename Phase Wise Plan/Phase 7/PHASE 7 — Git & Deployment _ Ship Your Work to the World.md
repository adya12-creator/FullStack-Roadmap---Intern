# ╔══════════════════════════════════════╗
# ║  PHASE 7 — Git & Deployment          ║
# ║  Ship Your Work to the World         ║
# ╚══════════════════════════════════════╝

> **Duration:** 2 Weeks · 10 Days · Weeks 30–31
> **Difficulty:** ⭐⭐⭐ Intermediate

---

## 🚫 What to STRICTLY AVOID in Phase 7

```
❌ DO NOT commit directly to main — always use feature branches
❌ DO NOT commit .env files — add to .gitignore before first commit
❌ DO NOT use vague commit messages like "fix", "update", or "changes"
❌ DO NOT force-push to main if others might be working on the same branch
❌ DO NOT deploy without testing locally first
```

---

## 📅 Week-by-Week Plan

---

### WEEK 30 — Git Professionally

| Day | Topics | Deliverable |
|-----|--------|-------------|
| **Day 1** | Git init, add, commit, push · The working tree, staging area, repository | — |
| **Day 2** | Branching: git branch, checkout -b, merge · fast-forward vs merge commit | — |
| **Day 3** | Deliberately create a merge conflict · Resolve it · Push the resolution | — |
| **Day 4** | GitHub: pull requests, code review comments, issues, .gitignore | — |
| **Day 5** | TASK 21: Write a commit message guide for yourself · Create a .gitignore template | **Task 21** |

---

#### Core Git Concepts

```bash
# ── DAILY GIT WORKFLOW ──
git status                          # always start here
git add .                           # stage all changed files
git add src/components/Header.jsx   # stage specific file
git commit -m "feat: add sticky navbar with mobile hamburger menu"
git push origin main

# ── BRANCHING: never work directly on main ──
git checkout -b feature/user-authentication  # create and switch to new branch
# ... make changes ...
git add .
git commit -m "feat: add JWT authentication middleware"
git push origin feature/user-authentication

# On GitHub: create a Pull Request to merge into main
# After merge: delete the feature branch

# ── MERGE CONFLICTS ──
# When Git cannot auto-merge:
# <<<<<<< HEAD
# your version of the code
# =======
# their version of the code
# >>>>>>> feature/login
# Delete the conflict markers, keep the correct code, save, then:
git add .
git commit -m "fix: resolve merge conflict in auth middleware"

# ── GOOD COMMIT MESSAGES: Conventional Commits format ──
# feat: new feature
# fix: bug fix
# docs: documentation
# style: formatting, no logic change
# refactor: code restructure, no behaviour change
# test: adding tests
# chore: build process, dependencies
#
# Examples:
# feat: add password reset email flow
# fix: prevent duplicate todo items on rapid clicks
# refactor: extract useAuth into custom hook
```

---

### WEEK 31 — Deployment

| Day | Topics | Deliverable |
|-----|--------|-------------|
| **Day 6** | Deploy React to Vercel: connect GitHub, auto-deploy on push, env variables | — |
| **Day 7** | Deploy Express to Render.com: create web service, set env vars, verify logs | — |
| **Day 8** | MongoDB Atlas: whitelist Render IP (0.0.0.0/0), test full stack connection | — |
| **Day 9** | Custom domain: point a free domain to Vercel | — |
| **Day 10** | TASK 22: Full Stack Blog App — all three deployed, tested end-to-end on mobile | **Task 22** |

---

## ✅ Phase 7 Completion Checklist

- [ ] Understand the difference between local, staging, and production environments
- [ ] Can work with branches, pull requests, and resolve merge conflicts
- [ ] React app deployed to Vercel with auto-deploy on push
- [ ] Express API deployed to Render with correct environment variables
- [ ] Full stack app tested end-to-end on a real mobile device

---