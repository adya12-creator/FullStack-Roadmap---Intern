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