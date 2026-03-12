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