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

## 📅 Week-by-Week Plan

---

### WEEK 21 — Express Foundations

| Day | Topics | Deliverable |
|-----|--------|-------------|
| **Day 1** | Node.js basics: require, module.exports, fs, path · Create a simple HTTP server | — |
| **Day 2** | Express setup: routes, middleware, req/res objects · Build hello-world API | — |
| **Day 3** | Route parameters, query strings, req.body · Build full CRUD for /api/products | — |
| **Day 4** | Error handling middleware · proper HTTP status codes · input validation | — |
| **Day 5** | TASK 15: Blog REST API — full CRUD, status codes, Postman collection | **Task 15** |

---

#### Core Express Concepts

```js
// ── THE MINIMAL EXPRESS SERVER ──
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // parse JSON request bodies

// ── ROUTES: HTTP method + URL path + handler function ──
// GET /api/products — read all products
app.get("/api/products", (req, res) => {
  res.status(200).json({ products });
  // Always send the correct status code:
  // 200 OK · 201 Created · 400 Bad Request · 401 Unauthorized
  // 404 Not Found · 500 Internal Server Error
});

// GET /api/products/:id — read one product
app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;     // URL parameter: /products/42 → id = "42"
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  res.json(product);
});

// POST /api/products — create a product
app.post("/api/products", (req, res) => {
  const { name, price } = req.body;  // from JSON request body

  if (!name || !price) {
    return res.status(400).json({ error: "name and price are required" });
  }

  const newProduct = { id: Date.now(), name, price };
  products.push(newProduct);
  res.status(201).json(newProduct);  // 201 Created
});

// DELETE /api/products/:id
app.delete("/api/products/:id", (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Not found" });
  products.splice(index, 1);
  res.status(204).send(); // 204 No Content
});

// ── ERROR HANDLING MIDDLEWARE ──
app.use((err, req, res, next) => {
  console.error(err.stack);  // log full error on SERVER
  res.status(500).json({ error: "Something went wrong" }); // vague to CLIENT
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

---

### WEEK 22 — Authentication

| Day | Topics | Deliverable |
|-----|--------|-------------|
| **Day 6** | Passwords with bcrypt: what hashing is, why MD5/SHA1 are wrong | — |
| **Day 7** | JWT: what a token is, jwt.sign, jwt.verify, token expiry | — |
| **Day 8** | Register and login endpoints · Store users in array (temporary) | — |
| **Day 9** | Auth middleware: requireAuth, attaching user to req.user | — |
| **Day 10** | TASK 16: Add auth to Blog API · Protected routes · Postman auth testing | **Task 16** |

---

#### Authentication Concepts

```js
const bcrypt = require("bcrypt");
const jwt    = require("jsonwebtoken");
require("dotenv").config();  // loads .env file

// ── PASSWORDS: HASHING with bcrypt ──
// NEVER store plain text passwords. If your DB leaks, hashed passwords are useless to attackers.
const SALT_ROUNDS = 10; // work factor — higher is slower but more secure

// Registration
const hashedPassword = await bcrypt.hash(plainPassword, SALT_ROUNDS);
// Store hashedPassword in DB, never store plainPassword

// Login: compare what user typed with stored hash
const isMatch = await bcrypt.compare(typedPassword, storedHash);
// returns true if they match

// ── JWT: JSON Web Tokens ──
// A JWT has 3 parts separated by dots:
// HEADER.PAYLOAD.SIGNATURE
// The payload is base64 encoded (NOT encrypted) — never put passwords in it

// When user logs in successfully, create a token:
const token = jwt.sign(
  { userId: user.id, email: user.email }, // payload
  process.env.JWT_SECRET,                  // secret — stored in .env, NEVER in code
  { expiresIn: "7d" }                      // expires in 7 days
);

// ── AUTH MIDDLEWARE ──
function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "No token provided" });
  }

  const token = authHeader.split(" ")[1]; // "Bearer TOKEN" → "TOKEN"

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;  // attach user data to request for next handler
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid or expired token" });
  }
}

// Using the middleware on a protected route:
app.get("/api/profile", requireAuth, (req, res) => {
  res.json({ message: `Hello, ${req.user.email}` });
});
```

---

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