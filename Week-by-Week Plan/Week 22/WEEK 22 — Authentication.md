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