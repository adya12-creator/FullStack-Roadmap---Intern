### ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
### WEEKS 12–13 — Async JavaScript and APIs
### ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

| Day | Topics to Learn | Task / Deliverable |
|-----|----------------|-------------------|
| **Day 16** | The Event Loop · Why async exists · Callback hell | — |
| **Day 17** | Promises: .then(), .catch(), .finally() · Promise.all | — |
| **Day 18** | Async/Await · try/catch · Sequential vs Parallel fetching | — |
| **Day 19** | fetch API · Reading responses · Error handling pattern | — |
| **Day 20** | TASK 9: Weather App using real API | **Task 9: Weather App** |

---

#### DAYS 16–17 — The Event Loop and Promises

```js
// ── THE PROBLEM: JavaScript is single-threaded ──
// It can only do ONE thing at a time.
// If a network request took 3 seconds synchronously, the browser would FREEZE.

// ── PROOF: observe the event loop ──
console.log("1. script starts");

setTimeout(() => {
  console.log("3. setTimeout callback");
}, 0);

Promise.resolve().then(() => {
  console.log("2.5 microtask — runs before setTimeout!");
  // Promises → MICROTASK queue — higher priority than setTimeout
});

console.log("2. script ends");

// Output: 1 → 2 → 2.5 → 3
// The synchronous code runs first. Then microtasks (Promises). Then macrotasks (setTimeout).

// ── PROMISES ──
const fetchUser = (id) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (id > 0) {
      resolve({ id, name: "Rahul", role: "student" });
    } else {
      reject(new Error("User ID must be positive"));
    }
  }, 1000);
});

// Consuming a Promise
fetchUser(1)
  .then(user => {
    console.log("Got user:", user.name);
    return user.role;  // return passes value to next .then
  })
  .then(role => console.log("Role:", role))
  .catch(error => console.error("Error:", error.message))
  .finally(() => console.log("Done — runs either way"));

// Running multiple promises in PARALLEL
const [user, posts, settings] = await Promise.all([
  fetchUser(1),
  fetchPosts(1),
  fetchSettings(1)
]);
// All three run simultaneously — MUCH faster than sequential awaits
```

---

#### DAY 18 — Async/Await: The Modern Pattern

```js
// ── THE COMPLETE API CALL PATTERN ──
// This is the pattern you will write hundreds of times in React and Node

async function getProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      // CRITICAL: fetch does NOT throw on 404/500 — check .ok manually
      throw new Error(`HTTP error: ${response.status}`);
    }

    const products = await response.json(); // also async!
    return products;

  } catch (error) {
    if (error.name === "TypeError") {
      // TypeError from fetch = network error (no internet, CORS blocked)
      console.error("Network error — are you connected?");
    } else {
      console.error("API error:", error.message);
    }
    return [];  // always return a safe fallback
  }
}

// ── PARALLEL vs SEQUENTIAL — the critical difference ──

// ❌ Sequential (slow): each awaits the previous — total time = sum of all
async function slowLoad() {
  const user    = await fetchUser(1);    // waits 1s
  const posts   = await fetchPosts(1);  // waits 1s AFTER user
  const friends = await fetchFriends(1); // waits 1s AFTER posts
  // Total: ~3 seconds
}

// ✅ Parallel (fast): all start at the same time — total time = slowest one
async function fastLoad() {
  const [user, posts, friends] = await Promise.all([
    fetchUser(1),
    fetchPosts(1),
    fetchFriends(1),
  ]);
  // Total: ~1 second
}

// Rule: if the second request does NOT depend on the first, run them in parallel
```

---