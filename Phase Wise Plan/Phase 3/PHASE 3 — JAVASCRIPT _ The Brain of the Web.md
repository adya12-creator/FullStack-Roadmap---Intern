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

## 📅 Week-by-Week Plan

---

### ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
### WEEKS 8–9 — JavaScript Foundations
### ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

| Day | Topics to Learn | Task / Deliverable |
|-----|----------------|-------------------|
| **Day 1** | Variables: let, const · Data types · The console · === vs == | — |
| **Day 2** | Operators · Conditionals: if/else, switch, ternary · String methods | — |
| **Day 3** | Functions: declarations, expressions, arrow functions · Default params | — |
| **Day 4** | Arrays: map, filter, find, reduce, forEach · Method chaining | — |
| **Day 5** | Objects: creation, destructuring, spread, Object methods | — |
| **Day 6** | Scope and Closures · Private state with closures · ES6 Modules | — |
| **Day 7** | Error handling: try/catch/finally · Custom errors | **Task 7: Calculator** |
| **Day 8** | Prototype and classes · Class syntax · Inheritance | — |
| **Day 9** | Higher-order functions · Composition · Currying | — |
| **Day 10** | Review + solve 10 LeetCode Easy problems | — |

---

#### DAY 1 — Variables, Data Types, and the Console

```js
// ── CONNECTING JS TO HTML ──
// In HTML <body> at the BOTTOM — before </body>:
// <script src="app.js"></script>

// ── VARIABLES ──
const name = "Rahul";      // CONST: value cannot be reassigned. Use by default.
let   age  = 21;           // LET: can be reassigned. Use only when value will change.
// var is NEVER used in modern JavaScript — it has confusing scoping behaviour.

// Primitive types — stored by value
const str  = "Hello";      // string — template: `Hello ${name}`
const num  = 42;           // number (no separate int/float in JS)
const bool = true;         // boolean: true or false
const nothing = null;      // intentionally empty — you set this
let   undef;               // undefined — variable declared but not assigned yet

// Reference types — stored by reference
const skills = ["HTML", "CSS"]; // Array
const student = { name: "Rahul" }; // Object

// ── TYPE CHECKING ──
typeof "hello"        // "string"
typeof 42             // "number"
typeof true           // "boolean"
typeof null           // "object"  ← JavaScript design bug from 1995. Accept it.
typeof undefined      // "undefined"
typeof []             // "object"  ← arrays are objects! Use Array.isArray() instead
Array.isArray([])     // true

// ── THE CONSOLE ──
console.log("Hello");               // print any value
console.log(name, age);             // print multiple values
console.table([{ name: "A", age: 20 }, { name: "B", age: 21 }]); // as a table
console.time("operation");
// ... code ...
console.timeEnd("operation");       // prints time taken in ms

// ── STRICT EQUALITY ──
5 == "5"   // true  ← loose: converts types before comparing. NEVER use.
5 === "5"  // false ← strict: different types = never equal. ALWAYS use ===.
```

---

#### DAY 2 — Operators, Conditionals, and String Methods

```js
// ── OPERATORS ──
10 % 3   // 1 — remainder/modulus — used constantly: is it even? n % 2 === 0
10 ** 3  // 1000 — exponentiation

// Nullish coalescing — returns right side if left is null or undefined
const username = null;
const display = username ?? "Guest";  // "Guest"
// Different from ||: "" ?? "default" returns "" (empty string is not null)

// Optional chaining — access deeply nested values safely
const user = { profile: { avatar: "pic.jpg" } };
const phone  = user?.contact?.phone;  // undefined — NO ERROR
const city   = user?.address?.city ?? "Unknown";  // "Unknown"

// ── CONDITIONALS ──
const score = 85;

if (score >= 90) {
  console.log("A grade");
} else if (score >= 75) {
  console.log("B grade");    // this runs
} else {
  console.log("Below B");
}

// Ternary — one-line if/else for simple cases
const grade = score >= 75 ? "Pass" : "Fail";  // "Pass"

// ── STRING METHODS (most useful ones) ──
const str = "  Hello, World!  ";

str.trim()                     // "Hello, World!" — removes whitespace
str.toLowerCase()              // "  hello, world!  "
str.includes("World")         // true
str.replace("World", "India") // "  Hello, India!  "
str.split(", ")               // ["  Hello", "World!  "]
"   ".trim().length === 0     // true — useful for form validation!

// Template literals — the modern way to build strings
const greeting = `Hello ${name}, you are in semester ${semester}.`;
```

---

#### DAY 3 — Functions: Declarations, Expressions, Arrow Functions

```js
// ── THREE WAYS TO DEFINE A FUNCTION ──

// 1. Function Declaration — HOISTED (can call before definition)
function greet(name) {
  return `Hello, ${name}!`;
}

// 2. Function Expression — NOT hoisted
const add = function(a, b) {
  return a + b;
};

// 3. Arrow Function — modern, concise (use this most of the time)
const multiply = (a, b) => {
  const result = a * b;
  return result;
};

const square = n => n * n;     // single param: no parentheses needed
const double = n => n * 2;    // single expression: implicit return

// ── PARAMETERS ──
function createProfile(name, age, role = "Student") {
  // role has a DEFAULT value — if caller omits it, "Student" is used
  return { name, age, role };  // shorthand: name: name is just name
}
createProfile("Rahul", 21)           // { name: "Rahul", age: 21, role: "Student" }
createProfile("Priya", 22, "Intern") // { name: "Priya", age: 22, role: "Intern" }

// REST PARAMETERS — collect all extra arguments into an array
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
sum(1, 2, 3)       // 6
sum(1, 2, 3, 4, 5) // 15

// Passing a function as an argument (callback):
const nums = [3, 1, 4, 1, 5, 9];
nums.sort((a, b) => a - b); // sort ascending — (a, b) => a - b IS the callback
```

---

#### DAY 4 — Arrays: The 5 Methods You Will Use Every Day

```js
const students = [
  { name: "Rahul",  cgpa: 8.5, city: "Delhi",     skills: ["JS", "Python"] },
  { name: "Priya",  cgpa: 9.2, city: "Bangalore",  skills: ["React", "JS"] },
  { name: "Arjun",  cgpa: 7.1, city: "Delhi",     skills: ["Java", "SQL"] },
  { name: "Meera",  cgpa: 8.9, city: "Mumbai",    skills: ["Python", "ML"] },
  { name: "Vikram", cgpa: 6.8, city: "Bangalore",  skills: ["C++", "DSA"] },
];

// ── map: TRANSFORM each item. Returns a NEW array of the same length. ──
const names = students.map(student => student.name);
// ["Rahul", "Priya", "Arjun", "Meera", "Vikram"]

const withStatus = students.map(s => ({
  ...s,
  status: s.cgpa >= 8 ? "Merit" : "Pass"  // adds a new property
}));

// ── filter: KEEP items that pass a test. Returns a NEW array. ──
const delhiStudents = students.filter(s => s.city === "Delhi");
const topStudents   = students.filter(s => s.cgpa >= 8.5);

// ── find: Returns the FIRST match. Returns the item or undefined. ──
const priya     = students.find(s => s.name === "Priya");
const notFound  = students.find(s => s.name === "Nobody");  // undefined

// ── reduce: ACCUMULATE a single value from all items. Most powerful. ──
const totalCGPA = students.reduce((total, s) => total + s.cgpa, 0);
const average   = totalCGPA / students.length;

// Group by city using reduce:
const byCity = students.reduce((groups, s) => {
  if (!groups[s.city]) groups[s.city] = [];
  groups[s.city].push(s);
  return groups;
}, {});
// { "Delhi": [...], "Bangalore": [...], "Mumbai": [...] }

// ── forEach: ITERATE without returning anything. Use for side effects. ──
students.forEach((s, index) => {
  console.log(`${index + 1}. ${s.name}: ${s.cgpa}`);
});

// ── CHAINING — the real power ──
const topDelhiNames = students
  .filter(s => s.city === "Delhi")
  .filter(s => s.cgpa >= 8)
  .map(s => s.name)
  .sort();
```

---

#### DAY 5 — Objects: Destructuring, Spread, Methods

```js
const student = {
  name: "Arjun",
  age: 21,
  semester: 5,
  skills: ["HTML", "CSS", "JS"],
  address: { city: "Bangalore", state: "Karnataka" },
  greet() {
    return `Hi, I'm ${this.name} in semester ${this.semester}`;
    // 'this' refers to the object when called as student.greet()
  }
};

// ── DESTRUCTURING — extract properties into named variables ──
const { name, age } = student;
const { address: { city, state } } = student;  // nested destructuring
const { phone = "Not provided" } = student;    // default value

// In function parameters — clean API pattern
function displayStudent({ name, semester, skills }) {
  return `${name} is in semester ${semester}. Skills: ${skills.join(", ")}`;
}
displayStudent(student);

// ── SPREAD OPERATOR — copy and extend objects ──
const updatedStudent = { ...student, semester: 6, cgpa: 8.9 };
// All original properties + semester replaced + cgpa added

// Merge two objects (right side wins on conflicts)
const defaults = { theme: "light", lang: "en" };
const userPrefs = { theme: "dark", fontSize: 16 };
const settings = { ...defaults, ...userPrefs };
// { theme: "dark", lang: "en", fontSize: 16 }

// ── OBJECT METHODS ──
Object.keys(student)    // ["name", "age", "semester", ...]
Object.values(student)  // ["Arjun", 21, 5, ...]
Object.entries(student) // [["name","Arjun"], ["age",21], ...]

Object.entries(student).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
```

---

#### DAY 6 — Closures: The Most Important JavaScript Concept

```js
// ── SCOPE: where a variable can be accessed ──

let globalVar = "I am everywhere";

function outer() {
  let outerVar = "I am in outer";

  function inner() {
    let innerVar = "I am in inner";
    console.log(globalVar);  // ✅ — can access outer scope
    console.log(outerVar);   // ✅ — this is CLOSURE
    console.log(innerVar);   // ✅
  }

  inner();
  console.log(innerVar); // ❌ ReferenceError
}

// ── CLOSURE: a function that remembers its lexical environment ──
// "Lexical" = where the function was DEFINED, not where it was CALLED

function createCounter(startValue = 0) {
  let count = startValue;  // PRIVATE — nothing outside can access it directly

  return {
    increment() { return ++count; },
    decrement() { return --count; },
    reset()     { count = startValue; return count; },
    value()     { return count; }
  };
}

const counter = createCounter(10);
counter.increment(); // 11
counter.increment(); // 12
counter.value();     // 12
// counter.count is undefined — count is PRIVATE inside the closure

// ── WHY CLOSURES MATTER: Factory functions ──
function createMultiplier(multiplier) {
  return (n) => n * multiplier;  // closes over 'multiplier'
}
const double   = createMultiplier(2);
const triple   = createMultiplier(3);
double(5);  // 10
triple(5);  // 15

// ── THE CLASSIC CLOSURE MISTAKE ──
// WRONG: all callbacks share the same 'i'
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000); // prints 4, 4, 4 (not 1, 2, 3!)
}

// CORRECT: use let (block-scoped — new 'i' each iteration)
for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000); // prints 1, 2, 3 ✅
}
// This is why we never use var.
```

---

### ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
### WEEKS 10–11 — DOM Manipulation and Events
### ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

| Day | Topics to Learn | Task / Deliverable |
|-----|----------------|-------------------|
| **Day 11** | DOM: selecting, reading, changing elements · createElement, appendChild | — |
| **Day 12** | Events: addEventListener, event types, event.target | — |
| **Day 13** | Event delegation · form submit · preventDefault | — |
| **Day 14** | localStorage and JSON · persist data across page refreshes | — |
| **Day 15** | TASK 8: Build the complete Todo App | **Task 8: Todo App** |

---

#### DAY 11 — DOM: Selecting and Manipulating the Page

```js
// ── SELECTING ELEMENTS ──
const byId     = document.getElementById("hero");
const first    = document.querySelector(".card");      // FIRST match
const allCards = document.querySelectorAll(".card");   // ALL matches → NodeList

// Convert NodeList to Array for array methods:
const cardsArray = Array.from(allCards);
// or: [...allCards].map(...)

// ── READING AND CHANGING CONTENT ──
const title = document.querySelector("h1");

title.textContent             // returns just the text — safe for reading
title.textContent = "New Title"; // changes the text — SAFE

// ⚠️ NEVER use innerHTML with user-supplied content — XSS attack vulnerability
title.innerHTML = "<em>Styled</em> Title"; // OK only for YOUR content

// ── CHANGING CLASSES ──
const card = document.querySelector(".card");
card.classList.add("highlighted");
card.classList.remove("hidden");
card.classList.toggle("active");      // adds if absent, removes if present
card.classList.contains("active");    // true or false

// ── CREATING AND INSERTING ELEMENTS ──
function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("card");

  const title = document.createElement("h3");
  title.textContent = product.name;  // textContent is safe for user data

  const price = document.createElement("p");
  price.textContent = `₹${product.price.toLocaleString()}`;

  card.appendChild(title);
  card.appendChild(price);
  return card;
}

const grid = document.querySelector(".product-grid");
grid.appendChild(createProductCard({ name: "Laptop", price: 45000 }));

// ── REMOVING ELEMENTS ──
const old = document.querySelector(".old-card");
old.remove(); // removes itself
```

---

#### DAY 12 — Events: Responding to User Actions

```js
// ── FORM SUBMIT — the most important pattern ──
const form = document.querySelector("#register-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();  // CRITICAL: stops page reload

  const name  = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();

  if (!name || !email) {
    showError("Name and email are required");
    return;
  }

  console.log({ name, email });
  form.reset();
});

// ── EVENT DELEGATION — the performance technique ──
// Instead of adding listeners to each child, add ONE listener to the parent

// BAD: adds 100 listeners for 100 items
document.querySelectorAll(".todo-item").forEach(item => {
  item.addEventListener("click", handler);
});

// GOOD: one listener — works even for items added LATER
const todoList = document.querySelector("#todo-list");
todoList.addEventListener("click", function(event) {
  const item = event.target.closest(".todo-item");
  if (!item) return;  // clicked something that is not a todo-item

  const id = item.dataset.id;  // <li data-id="3"> → "3"
  toggleTodo(id);
});
// closest() walks UP the DOM tree to find the nearest matching ancestor

// ── KEYBOARD EVENTS ──
document.addEventListener("keydown", function(event) {
  console.log(event.key);  // "Enter", "Escape", "a", "ArrowUp"
  if (event.key === "Escape") closeModal();
  if (event.key === "Enter" && event.ctrlKey) submitForm(); // Ctrl+Enter
});
```

---

#### TASK 8 — Complete Todo App (Days 13–17)

**✅ Days 13–17 Task — Complete Todo App**
```
Build from scratch: todo.html + todo.css + todo.js

Day 13 — Core features:
✅ Add todo by typing + pressing Enter OR clicking Add button
✅ Render todos from array using createElement (NOT innerHTML for text)
✅ Mark complete with click (toggle done property)
✅ Delete with a button
✅ Counter: "3 tasks remaining" (not counting completed)

Day 14 — Filters and localStorage:
✅ Three filter buttons: All | Active | Completed
✅ Current filter highlighted
✅ All data saved to localStorage on every change

Day 15 — Edit and sort:
✅ Double-click a todo text to edit it inline
✅ Press Enter to save, Escape to cancel

Day 16 — UI polish:
✅ Smooth strikethrough animation on complete (CSS transition)
✅ Empty state message when no todos match the filter

Day 17 — Code quality:
✅ Split into 3 files: todos.js (data), render.js (DOM), events.js (listeners)
✅ Push to GitHub: "feat: complete todo app with localStorage"
```

---

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