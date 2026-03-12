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