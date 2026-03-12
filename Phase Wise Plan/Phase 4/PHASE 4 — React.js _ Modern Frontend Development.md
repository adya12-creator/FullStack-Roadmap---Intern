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

## 📅 Week-by-Week Plan

---

### ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
### WEEK 16 — JSX, Props, and State
### ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

| Day | Topics | Deliverable |
|-----|--------|-------------|
| **Day 1** | Set up Vite React app · JSX syntax · Build a WelcomeCard component with props | — |
| **Day 2** | useState · Build a counter and a controlled text input with live word count | — |
| **Day 3** | Conditional rendering · list rendering with .map() + key | — |
| **Day 4** | Props drilling · lifting state up · parent-child communication | — |
| **Day 5** | TASK 11: Component library — Button (3 variants), Badge, Card, Alert, Modal | **Task 11** |

---

#### WEEK 16 Core Concepts

```jsx
// ── JSX: JavaScript + HTML syntax ──
// JSX is NOT HTML. It compiles to React.createElement() calls.

// Component: a function that returns JSX
function WelcomeCard({ name, role, avatar }) {
  // props are passed from parent as attributes
  return (
    <div className="card">  {/* className not class — JS reserved word */}
      <img src={avatar} alt={`${name}'s profile`} />
      <h2>{name}</h2>         {/* {} runs any JavaScript expression */}
      <p className={`badge ${role}`}>{role}</p>
      {role === "admin" && <button>Manage Users</button>}
      {/* && renders only if condition is true */}
    </div>
  );
}

// Using the component:
<WelcomeCard name="Rahul" role="student" avatar="/pic.jpg" />


// ── STATE with useState ──
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  // count = current value
  // setCount = function to update it
  // 0 = initial value

  function increment() {
    setCount(count + 1);  // NEVER do: count = count + 1 — that mutates state!
    // React re-renders the component automatically when setCount is called
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

// ── RENDERING LISTS ──
function SkillList({ skills }) {
  return (
    <ul>
      {skills.map(skill => (
        <li key={skill.id}>  {/* key is REQUIRED — must be unique and stable */}
          {skill.name}
        </li>
      ))}
    </ul>
  );
  // key tells React which item is which when the list changes
  // Without key, React cannot efficiently update the list
}
```

---

### ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
### WEEK 17 — useEffect + API Integration
### ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

| Day | Topics | Deliverable |
|-----|--------|-------------|
| **Day 6** | useEffect: what it is, when it runs, the 3 forms of dependency array | — |
| **Day 7** | Fetch data in useEffect · Display a list of posts from JSONPlaceholder API | — |
| **Day 8** | Build proper loading, error, and empty states for async data | — |
| **Day 9** | useRef: access DOM elements, persist values without re-render | — |
| **Day 10** | TASK 12: GitHub Profile Viewer — search any username, display repos, loading + error states | **Task 12** |

---

#### WEEK 17 Core Concepts

```jsx
import { useState, useEffect } from "react";

function PostList() {
  const [posts, setPosts]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    // useEffect runs AFTER the component renders
    // The dependency array [] means: run ONCE after the first render only

    async function fetchPosts() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []); // [] = run once on mount

  // ── THE 3 STATES YOU MUST ALWAYS HANDLE ──
  if (loading) return <p>Loading posts...</p>;
  if (error)   return <p>Error: {error}</p>;
  if (posts.length === 0) return <p>No posts found.</p>;

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

// ── THE 3 FORMS OF useEffect DEPENDENCY ARRAY ──
useEffect(() => { /* runs after EVERY render */ });               // no array
useEffect(() => { /* runs only ONCE on mount */ }, []);           // empty array
useEffect(() => { /* runs when userId changes */ }, [userId]);   // specific dependency
```

---

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