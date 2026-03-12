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