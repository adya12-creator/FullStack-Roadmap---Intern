# 📐 Coding Standards & Best Practices
**For:** Full Stack Development · React · Node.js · JavaScript · MongoDB
**Purpose:** Write code that is readable, maintainable, secure, and consistent across every project

---

## 🧭 The Core Philosophy

Before any rule, understand the principle behind it.

```
Code is written once.
It is READ hundreds of times — by you, your team, and your future self.

The goal is not to make the computer understand your code.
The computer understands anything.

The goal is to make HUMANS understand your code
in the shortest possible time.
```

```
GOOD CODE IS:

Readable    → Another developer understands it without asking you
Predictable → It does exactly what its name says, nothing more
Testable    → You can verify it works in isolation
Consistent  → Same problems solved the same way everywhere
Secure      → It does not create vulnerabilities by accident
```

---

## 📋 Table of Contents

1. [Naming Conventions](#1-naming-conventions)
2. [File and Folder Structure](#2-file-and-folder-structure)
3. [JavaScript Standards](#3-javascript-standards)
4. [React Standards](#4-react-standards)
5. [Node.js and Express Standards](#5-nodejs-and-express-standards)
6. [MongoDB and Database Standards](#6-mongodb-and-database-standards)
7. [API Design Standards](#7-api-design-standards)
8. [Error Handling Standards](#8-error-handling-standards)
9. [Security Standards](#9-security-standards)
10. [Git and Version Control Standards](#10-git-and-version-control-standards)
11. [CSS and Styling Standards](#11-css-and-styling-standards)
12. [Performance Standards](#12-performance-standards)
13. [Code Review Checklist](#13-code-review-checklist)

---

---

# 1. Naming Conventions

> **The rule:** A name should tell you WHAT something is, WHAT it does, and WHY it exists — without needing a comment to explain it.

---

## Variables and Constants

```js
// ── VARIABLES: camelCase ──

// ✅ Good — tells you what it holds
const userProfile = await getUser(id);
const isLoggedIn = true;
const hasPermission = checkPermission(user, "edit");
const cartItemCount = cart.items.length;
const maxRetryAttempts = 3;

// ❌ Bad — tells you nothing
const data = await getUser(id);
const flag = true;
const x = checkPermission(user, "edit");
const n = cart.items.length;
const m = 3;


// ── BOOLEANS: always start with is, has, can, should, was ──
const isActive = true;
const hasUnreadMessages = notifications.length > 0;
const canEditPost = user.id === post.authorId;
const shouldRedirect = !isLoggedIn;
const wasSuccessful = response.status === 200;

// ❌ Bad boolean names
const active = true;       // is it a boolean or a status string?
const unread = true;       // noun or adjective?
const edit = false;        // verb? boolean? function?


// ── CONSTANTS: SCREAMING_SNAKE_CASE for true constants ──
// Use for: config values, magic numbers, fixed strings
const MAX_FILE_SIZE_MB = 10;
const API_BASE_URL = "https://api.example.com";
const JWT_EXPIRY = "15m";
const SUPPORTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];
const BCRYPT_ROUNDS = 12;

// ❌ Magic numbers — never do this
if (file.size > 10485760) { ... }    // what is 10485760?
// ✅ Named constant — always do this
const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024;
if (file.size > MAX_FILE_SIZE_BYTES) { ... }
```

---

## Functions and Methods

```js
// ── FUNCTIONS: camelCase, start with a VERB ──
// The verb describes the ACTION, the noun describes the SUBJECT

// ✅ Clear verb + noun pattern
function getUser(id) {}
function createPost(data) {}
function updateProfile(userId, changes) {}
function deleteComment(commentId) {}
function validateEmail(email) {}
function formatCurrency(amount, currency) {}
function calculateDiscount(price, percentage) {}
function sendPasswordResetEmail(email) {}
function toggleDarkMode() {}
function fetchProductsByCategory(category) {}

// ❌ Vague or noun-only names
function user(id) {}          // get it? create it? delete it?
function data() {}            // what data?
function process() {}         // process what? how?
function handle() {}          // handle what?
function doStuff() {}         // never acceptable


// ── FUNCTION NAME PREFIXES — use consistently ──
// get    → returns a value synchronously
// fetch  → returns a value asynchronously (usually API)
// create → creates and returns a new thing
// update → modifies an existing thing
// delete → removes a thing
// validate → checks and returns boolean or throws
// format → transforms data for display
// parse  → converts raw data to a usable structure
// send   → dispatches something (email, notification, event)
// handle → responds to an event or action (e.g. handleSubmit)
// is/has/can → returns a boolean

// ── ASYNC FUNCTIONS: naming does not change ──
async function fetchUser(id) {}          // still camelCase, verb + noun
async function createCheckIn(data) {}
async function sendWelcomeEmail(user) {}
```

---

## React Components, Hooks, and Files

```jsx
// ── COMPONENTS: PascalCase — always ──
function UserProfileCard() {}
function NavigationMenu() {}
function CheckInFeedItem() {}
function LoadingSpinner() {}
function ConfirmDeleteModal() {}

// ❌ Wrong casing for components
function userProfileCard() {}    // looks like a function, not a component
function navigation_menu() {}    // snake_case is never correct for JS


// ── CUSTOM HOOKS: always start with "use" ──
function useFetchUser(id) {}
function useLocalStorage(key, initialValue) {}
function useDebounce(value, delay) {}
function useInfiniteScroll(callback) {}
function useFormValidation(schema) {}

// ❌ Bad hook names
function fetchUser() {}          // not recognisable as a hook
function userData() {}           // no "use" prefix — React won't enforce rules of hooks


// ── COMPONENT FILES: same name as the component ──
// UserProfileCard.jsx  → exports function UserProfileCard
// NavigationMenu.jsx   → exports function NavigationMenu
// useFetchUser.js      → exports function useFetchUser

// ── FOLDERS: lowercase with hyphens ──
// components/user-profile/
// components/navigation/
// hooks/
// utils/
// services/
```

---

## CSS Classes

```css
/* ── CSS CLASSES: kebab-case ──  */

/* ✅ Correct */
.user-profile-card {}
.navigation-menu {}
.btn-primary {}
.form-input-error {}
.loading-spinner {}

/* ❌ Wrong */
.userProfileCard {}     /* camelCase is for JavaScript, not CSS */
.UserProfile {}         /* PascalCase is for React components, not CSS */
.user_profile {}        /* snake_case is for Python, not CSS */


/* ── BEM (Block Element Modifier) — for complex components ──  */
/* Block: the component */
.card {}

/* Element: a part OF the block, separated by __ */
.card__title {}
.card__image {}
.card__footer {}

/* Modifier: a variation of the block or element, separated by -- */
.card--featured {}
.card--disabled {}
.card__title--large {}
```

---

## MongoDB Collections and Fields

```js
// ── COLLECTIONS: camelCase, plural nouns ──
// users, posts, checkIns, formCritiques, diaryLogs, groundingSessions

// ── SCHEMA FIELDS: camelCase ──
{
  userId:        ObjectId,
  firstName:     String,
  lastName:      String,
  emailAddress:  String,
  isVerified:    Boolean,
  createdAt:     Date,
  lastLoginAt:   Date,
  profileImageUrl: String,
}

// ❌ Inconsistent field naming
{
  user_id:     ObjectId,    // snake_case mixed with camelCase
  FirstName:   String,      // PascalCase in a schema
  email:       String,      // ok, but emailAddress is more explicit
  created:     Date,        // created what? when? use createdAt
  img:         String,      // abbreviation — profileImageUrl is clear
}
```

---

---

# 2. File and Folder Structure

> **The rule:** A new developer should be able to find any file in under 30 seconds by reading the folder names alone.

---

## React Frontend

```
client/src/
│
├── components/              ← Reusable UI components (used in 2+ places)
│   ├── common/              ← Button, Modal, Spinner, Avatar, Badge
│   ├── forms/               ← FormInput, FormSelect, FormError
│   └── layout/              ← Navbar, Footer, Sidebar, PageWrapper
│
├── pages/                   ← One file per route. Imports components.
│   ├── HomePage.jsx
│   ├── LoginPage.jsx
│   ├── ProfilePage.jsx
│   └── NotFoundPage.jsx
│
├── features/                ← Self-contained feature modules
│   ├── auth/
│   │   ├── components/      ← LoginForm, RegisterForm (only used in auth)
│   │   ├── hooks/           ← useAuth, useLogin
│   │   └── authSlice.js     ← if using Redux Toolkit
│   ├── posts/
│   │   ├── components/      ← PostCard, PostFeed, CreatePostModal
│   │   └── hooks/           ← usePosts, useCreatePost
│   └── profile/
│
├── hooks/                   ← Custom hooks used across multiple features
│   ├── useFetch.js
│   ├── useDebounce.js
│   └── useLocalStorage.js
│
├── context/                 ← React Context providers
│   ├── AuthContext.jsx
│   └── ThemeContext.jsx
│
├── services/                ← All API call functions (NO fetch calls in components)
│   ├── api.js               ← Axios instance with base URL + interceptors
│   ├── auth.service.js      ← login(), register(), logout(), refreshToken()
│   ├── posts.service.js     ← getPosts(), createPost(), deletePost()
│   └── users.service.js
│
├── utils/                   ← Pure utility functions
│   ├── formatDate.js
│   ├── validateEmail.js
│   └── truncateText.js
│
├── constants/               ← App-wide constants
│   └── index.js             ← ROUTES, API_URL, ROLES, etc.
│
└── assets/                  ← Static files
    ├── images/
    └── fonts/
```

---

## Node.js Backend

```
server/
│
├── config/                  ← Configuration setup (called once on startup)
│   ├── db.js                ← mongoose.connect()
│   ├── cloudinary.js        ← cloudinary.config()
│   └── env.js               ← validates all required env variables on startup
│
├── middleware/              ← Express middleware (runs between request and route)
│   ├── auth.js              ← verifyJWT — attaches req.user
│   ├── upload.js            ← Multer config for file uploads
│   ├── rateLimiter.js       ← express-rate-limit config
│   ├── validate.js          ← express-validator error checker
│   └── errorHandler.js      ← global error handler (last middleware)
│
├── models/                  ← Mongoose schemas and models
│   ├── User.js
│   ├── Post.js
│   └── Comment.js
│
├── routes/                  ← Route definitions ONLY (no business logic here)
│   ├── auth.routes.js
│   ├── post.routes.js
│   └── user.routes.js
│
├── controllers/             ← Business logic for each route
│   ├── auth.controller.js
│   ├── post.controller.js
│   └── user.controller.js
│
├── services/                ← External API calls and complex logic
│   ├── email.service.js     ← nodemailer/resend logic
│   ├── openai.service.js    ← all OpenAI API calls
│   └── cloudinary.service.js← upload/delete helpers
│
├── jobs/                    ← Cron jobs
│   └── streak.cron.js
│
├── utils/                   ← Pure helper functions
│   ├── ApiError.js          ← Custom error class
│   ├── ApiResponse.js       ← Standardised response wrapper
│   └── generateToken.js
│
└── app.js                   ← Express app setup (middleware, routes)
    index.js                 ← server.listen() — only this file starts the server
```

---

---

# 3. JavaScript Standards

---

## Variables

```js
// ── ALWAYS use const by default. Use let only when you must reassign. ──
// NEVER use var.

const userId = req.params.id;          // will not change — const
const user = await User.findById(userId); // will not change — const

let retries = 0;                        // will be incremented — let
while (retries < 3) { retries++; }

// ❌ var — NEVER
var name = "Rahul";   // function-scoped, hoisted — causes bugs


// ── DESTRUCTURE instead of repetitive property access ──

// ❌ Repetitive
const name = user.name;
const email = user.email;
const role = user.role;

// ✅ Destructure
const { name, email, role } = user;

// ✅ Destructure with rename
const { name: userName, id: userId } = user;

// ✅ Destructure in function parameters
function sendEmail({ to, subject, body }) {
  // cleaner than sendEmail(to, subject, body) when params grow
}

// ✅ Destructure arrays
const [first, second, ...rest] = items;
const [error, data] = await safeAsync(fetchUser(id));
```

---

## Functions

```js
// ── Keep functions SMALL and FOCUSED ──
// A function should do ONE thing.
// If you need "and" to describe what it does, split it.

// ❌ Too many responsibilities
async function registerUser(req, res) {
  // validate input
  // check if email exists
  // hash password
  // create user in DB
  // send welcome email
  // generate JWT
  // set cookie
  // return response
}

// ✅ Each concern is its own function
async function register(req, res) {
  const { name, email, password } = req.body;

  const exists = await User.findOne({ email });
  if (exists) throw new ApiError(400, "Email already registered");

  const hashed = await hashPassword(password);
  const user = await User.create({ name, email, password: hashed });

  await sendWelcomeEmail(user.email, user.name);

  const token = generateAccessToken(user._id);
  setRefreshTokenCookie(res, generateRefreshToken(user._id));

  res.status(201).json(ApiResponse.success({ token, user: sanitiseUser(user) }));
}


// ── PURE FUNCTIONS: same input always gives same output ──
// Prefer pure functions for utilities and transformations

// ✅ Pure — no side effects, no external state
function formatCurrency(amount, currency = "INR") {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
  }).format(amount);
}

function calculateDiscount(price, discountPercent) {
  if (discountPercent < 0 || discountPercent > 100) {
    throw new Error("Discount must be between 0 and 100");
  }
  return price * (1 - discountPercent / 100);
}

// ❌ Impure — depends on external state, harder to test
function getDiscountedPrice(productId) {
  const price = productCache[productId];     // external dependency
  const discount = globalDiscount;           // external state
  return price * (1 - discount / 100);
}


// ── EARLY RETURNS: reduce nesting ──

// ❌ Deeply nested
function processOrder(order) {
  if (order) {
    if (order.items.length > 0) {
      if (order.isPaid) {
        return fulfillOrder(order);
      } else {
        return "Payment required";
      }
    } else {
      return "Cart is empty";
    }
  } else {
    return "No order found";
  }
}

// ✅ Early returns — flat and readable
function processOrder(order) {
  if (!order)                    return "No order found";
  if (order.items.length === 0)  return "Cart is empty";
  if (!order.isPaid)             return "Payment required";
  return fulfillOrder(order);
}
```

---

## Arrays and Objects

```js
// ── Never mutate arrays passed as arguments ──

// ❌ Mutates the original array
function addItem(cart, item) {
  cart.push(item);    // modifies the original — unexpected side effect
  return cart;
}

// ✅ Returns a new array — original is unchanged
function addItem(cart, item) {
  return [...cart, item];
}

// ── Never mutate objects passed as arguments ──

// ❌ Mutates the original object
function setAdmin(user) {
  user.role = "admin";    // the caller's user object is now changed
  return user;
}

// ✅ Returns a new object
function setAdmin(user) {
  return { ...user, role: "admin" };
}


// ── Use the right array method for the job ──

const products = [
  { id: 1, name: "Laptop",  price: 45000, inStock: true },
  { id: 2, name: "Phone",   price: 15000, inStock: false },
  { id: 3, name: "Tablet",  price: 25000, inStock: true },
];

// Transform every item → map
const names = products.map(p => p.name);

// Keep items matching a condition → filter
const available = products.filter(p => p.inStock);

// Find the first match → find
const laptop = products.find(p => p.name === "Laptop");

// Check if ANY match → some
const hasOutOfStock = products.some(p => !p.inStock);

// Check if ALL match → every
const allAvailable = products.every(p => p.inStock);

// Compute a single value from all items → reduce
const total = products.reduce((sum, p) => sum + p.price, 0);

// ❌ Using the wrong method for the job
const names = [];
products.forEach(p => names.push(p.name));   // forEach for transformation = wrong
// Use map instead
```

---

## Async Code

```js
// ── ALWAYS use async/await over .then().catch() chains ──

// ❌ Promise chains — harder to read, error handling is easy to miss
function getUser(id) {
  return fetch(`/api/users/${id}`)
    .then(res => res.json())
    .then(data => data.user)
    .catch(err => console.error(err));
}

// ✅ async/await — reads like synchronous code
async function getUser(id) {
  try {
    const response = await fetch(`/api/users/${id}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    return data.user;
  } catch (error) {
    console.error("getUser failed:", error.message);
    return null;
  }
}


// ── Run independent async calls in PARALLEL ──

// ❌ Sequential — waits for each before starting the next (slow)
async function loadDashboard(userId) {
  const user    = await fetchUser(userId);       // 300ms
  const posts   = await fetchPosts(userId);      // 300ms
  const friends = await fetchFriends(userId);    // 300ms
  // Total: ~900ms
}

// ✅ Parallel — all start at the same time (fast)
async function loadDashboard(userId) {
  const [user, posts, friends] = await Promise.all([
    fetchUser(userId),
    fetchPosts(userId),
    fetchFriends(userId),
  ]);
  // Total: ~300ms (slowest one)
}

// Rule: if Request B does not need the result of Request A, run them in parallel.


// ── Handle errors at the RIGHT level ──

// ❌ Catching and swallowing errors silently
async function savePost(data) {
  try {
    await Post.create(data);
  } catch (err) {
    console.log(err);   // logged but not re-thrown — caller thinks it succeeded
  }
}

// ✅ Re-throw or return a meaningful result
async function savePost(data) {
  try {
    const post = await Post.create(data);
    return post;
  } catch (err) {
    if (err.code === 11000) {
      throw new ApiError(400, "A post with this title already exists");
    }
    throw err;   // re-throw unexpected errors — don't swallow them
  }
}
```

---

---

# 4. React Standards

---

## Component Rules

```jsx
// ── One component per file ──
// ── File name = Component name ──
// UserCard.jsx exports function UserCard

// ── Keep components SMALL ──
// If a component is longer than 150 lines, split it

// ── Separate UI from logic with custom hooks ──

// ❌ All logic inside the component
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then(r => r.json())
      .then(data => { setUser(data); setLoading(false); })
      .catch(err => { setError(err.message); setLoading(false); });
  }, [userId]);

  if (loading) return <Spinner />;
  if (error)   return <ErrorMessage message={error} />;
  return <div>{user.name}</div>;
}

// ✅ Logic extracted to a custom hook — component is pure UI
function UserProfile({ userId }) {
  const { user, loading, error } = useUser(userId);   // custom hook

  if (loading) return <Spinner />;
  if (error)   return <ErrorMessage message={error} />;
  return <div>{user.name}</div>;
}

// hooks/useUser.js
function useUser(userId) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;   // prevents state update after unmount
    setLoading(true);

    fetchUser(userId)
      .then(data => { if (!cancelled) setUser(data); })
      .catch(err  => { if (!cancelled) setError(err.message); })
      .finally(()  => { if (!cancelled) setLoading(false); });

    return () => { cancelled = true; };   // cleanup
  }, [userId]);

  return { user, loading, error };
}
```

---

## State Management Rules

```jsx
// ── Do not over-use state ──
// If a value can be computed from existing state or props, compute it.
// Do not store it in useState.

// ❌ Redundant state
const [items, setItems] = useState([...]);
const [itemCount, setItemCount] = useState(0);   // derived from items

useEffect(() => {
  setItemCount(items.length);   // now you must keep two things in sync
}, [items]);

// ✅ Derive the value
const [items, setItems] = useState([...]);
const itemCount = items.length;   // computed — always in sync, no extra state


// ── Update state correctly — immutably ──

// ❌ Mutating state directly — React will NOT re-render
const [todos, setTodos] = useState([]);
todos.push(newTodo);   // mutates — React does not detect this change

// ✅ Return a new array
setTodos([...todos, newTodo]);
setTodos(prev => [...prev, newTodo]);   // functional update — safer


// ── Use functional updates when new state depends on old state ──

// ❌ Stale closure issue — 'count' might be stale in async context
setCount(count + 1);

// ✅ Functional update — always uses latest state
setCount(prev => prev + 1);


// ── Do not put everything in Context ──
// Context re-renders ALL consumers on every change
// Use Context for: auth user, theme, language preference
// Use local state for: form values, UI toggles, temporary data
// Use a state manager (Redux Toolkit, Zustand) for: complex shared state
```

---

## useEffect Rules

```jsx
// ── The dependency array is not optional ──

// ❌ No dependency array — runs after EVERY render
useEffect(() => {
  fetchUser(userId);
});

// ❌ Empty array but uses userId — stale closure
useEffect(() => {
  fetchUser(userId);
}, []);   // userId changes — fetch never re-runs

// ✅ Correct dependency
useEffect(() => {
  fetchUser(userId);
}, [userId]);   // re-runs whenever userId changes


// ── Always clean up async effects ──
useEffect(() => {
  let cancelled = false;

  async function load() {
    const data = await fetchUser(userId);
    if (!cancelled) setUser(data);   // don't update state if unmounted
  }

  load();
  return () => { cancelled = true; };   // cleanup
}, [userId]);


// ── Do not fetch data inside useEffect in React 18+ production apps ──
// Use React Query or SWR for server state — they handle caching, refetching,
// loading states, and stale data better than manual useEffect fetching.
// For learning projects: useEffect is fine.
// For internship/production: ask about React Query or SWR.
```

---

## Props Rules

```jsx
// ── Destructure props at the top of the function ──
// ❌
function Card(props) {
  return <div>{props.title} — {props.author}</div>;
}

// ✅
function Card({ title, author, createdAt, onDelete }) {
  return <div>{title} — {author}</div>;
}


// ── Always provide defaultProps or default values ──
function Avatar({ src, alt = "User avatar", size = "md" }) {
  const sizeMap = { sm: 32, md: 48, lg: 64 };
  return <img src={src} alt={alt} width={sizeMap[size]} height={sizeMap[size]} />;
}


// ── Do not pass booleans as strings ──
// ❌
<Button disabled="true" />

// ✅
<Button disabled={true} />
<Button disabled />           // shorthand — same as disabled={true}


// ── Do not spread all props blindly into DOM elements ──
// ❌ Unknown props can reach the DOM and cause warnings
function Button({ label, isLoading, ...rest }) {
  return <button {...rest}>{label}</button>;   // isLoading might reach <button>
}

// ✅ Explicitly pass only valid HTML attributes
function Button({ label, isLoading, onClick, disabled, className }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`btn ${className ?? ""}`}
    >
      {isLoading ? <Spinner /> : label}
    </button>
  );
}
```

---

---

# 5. Node.js and Express Standards

---

## Route Structure

```js
// ── Routes are THIN — they only define paths and middleware ──
// ALL logic lives in controllers

// ❌ Logic inside the route
router.post("/posts", auth, async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: "Title and content required" });
    }
    const post = await Post.create({ ...req.body, userId: req.user.id });
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Route delegates to controller
router.post("/posts", auth, validate(createPostSchema), postController.create);

// controllers/post.controller.js
async function create(req, res, next) {
  try {
    const post = await postService.createPost(req.body, req.user.id);
    res.status(201).json(ApiResponse.success(post, "Post created"));
  } catch (err) {
    next(err);   // pass to error handler middleware
  }
}
```

---

## Middleware Standards

```js
// ── Middleware order matters — follow this sequence ──

// app.js
app.use(helmet());               // 1. Security headers — always first
app.use(cors(corsOptions));      // 2. CORS
app.use(express.json());         // 3. Body parsing
app.use(morgan("dev"));          // 4. Logging
app.use(rateLimiter);            // 5. Rate limiting

app.use("/api/auth",  authRoutes);    // 6. Routes
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);

app.use(notFoundHandler);        // 7. 404 handler
app.use(errorHandler);           // 8. Error handler — ALWAYS last


// ── Middleware function signature ──
// (req, res, next) for regular middleware
// (err, req, res, next) for error middleware — 4 params required

function auth(req, res, next) {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) throw new ApiError(401, "Authentication required");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();   // always call next() or send a response — never both, never neither
  } catch (err) {
    next(err);   // pass to error handler
  }
}


// ── Always validate environment variables on startup ──

// config/env.js
const REQUIRED_ENV_VARS = [
  "MONGODB_URI",
  "JWT_SECRET",
  "JWT_REFRESH_SECRET",
  "CLOUDINARY_CLOUD_NAME",
  "CLOUDINARY_API_KEY",
  "CLOUDINARY_API_SECRET",
];

function validateEnv() {
  const missing = REQUIRED_ENV_VARS.filter(key => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
  }
}
// Call validateEnv() at the top of index.js before anything else
```

---

---

# 6. MongoDB and Database Standards

---

## Schema Design

```js
// ── Always define explicit schemas — never store arbitrary data ──

// ❌ No schema validation
const postSchema = new mongoose.Schema({}, { strict: false });
// This accepts anything — you lose all data integrity guarantees

// ✅ Explicit schema with validation
const postSchema = new mongoose.Schema({
  title: {
    type:      String,
    required:  [true, "Title is required"],
    trim:      true,
    minlength: [3, "Title must be at least 3 characters"],
    maxlength: [100, "Title cannot exceed 100 characters"],
  },
  content: {
    type:     String,
    required: [true, "Content is required"],
    trim:     true,
  },
  author: {
    type:     mongoose.Schema.Types.ObjectId,
    ref:      "User",
    required: true,
  },
  status: {
    type:    String,
    enum:    ["draft", "published", "archived"],
    default: "draft",
  },
  tags: {
    type:     [String],
    validate: {
      validator: arr => arr.length <= 10,
      message:   "Maximum 10 tags allowed",
    },
  },
  viewCount: { type: Number, default: 0, min: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});


// ── Add indexes for fields you query on ──
postSchema.index({ author: 1, createdAt: -1 });   // compound index
postSchema.index({ status: 1 });
postSchema.index({ tags: 1 });
postSchema.index({ title: "text", content: "text" }); // text search index


// ── Never return passwords or sensitive fields ──

// Option 1: exclude in the schema
postSchema.methods.toJSON = function() {
  const user = this.toObject();
  delete user.password;
  delete user.refreshToken;
  return user;
};

// Option 2: exclude on query
const user = await User.findById(id).select("-password -refreshToken");
```

---

## Query Best Practices

```js
// ── Always use lean() for read-only queries ──
// lean() returns plain JS objects instead of Mongoose documents
// 3–5x faster for large result sets

// ✅ lean() for data you only read and return
const posts = await Post.find({ status: "published" }).lean();

// Use regular query (without lean) when you need Mongoose methods
const post = await Post.findById(id);
post.viewCount++;
await post.save();   // needs Mongoose document methods


// ── Cursor-based pagination — always prefer over skip/limit for feeds ──

// ❌ skip/limit — slow at high offsets, breaks under inserts
const posts = await Post.find()
  .skip((page - 1) * 20)
  .limit(20);

// ✅ Cursor-based — consistent, fast at any scale
const posts = await Post.find({
  _id: { $lt: lastSeenId },   // "give me items before this ID"
  status: "published"
})
.sort({ _id: -1 })
.limit(20)
.lean();


// ── Use projection to only fetch needed fields ──
// ❌ Fetches entire document including large fields
const users = await User.find({ isActive: true });

// ✅ Only fetches what you need
const users = await User.find({ isActive: true })
  .select("name email avatar")
  .lean();


// ── Avoid N+1 queries — use populate or aggregate ──

// ❌ N+1: 1 query for posts + N queries for each author
const posts = await Post.find();
for (const post of posts) {
  post.author = await User.findById(post.authorId);   // N extra queries!
}

// ✅ populate: 2 queries total
const posts = await Post.find()
  .populate("author", "name avatar")
  .lean();
```

---

---

# 7. API Design Standards

---

## URL Structure

```
USE NOUNS for resources — not verbs

❌ Verb-based (wrong)
GET  /getUsers
POST /createPost
PUT  /updateUser/123
GET  /deleteComment/456

✅ Noun-based + HTTP method as the verb
GET    /api/users              ← get all users
POST   /api/users              ← create a user
GET    /api/users/:id          ← get one user
PUT    /api/users/:id          ← replace a user
PATCH  /api/users/:id          ← update specific fields
DELETE /api/users/:id          ← delete a user

NESTED resources — show the relationship
GET    /api/posts/:postId/comments          ← all comments on a post
POST   /api/posts/:postId/comments          ← add a comment
DELETE /api/posts/:postId/comments/:id      ← delete a comment

ACTIONS that are not CRUD — use a verb sub-resource
POST   /api/posts/:id/publish
POST   /api/posts/:id/like
POST   /api/users/:id/follow
POST   /api/auth/logout
```

---

## HTTP Status Codes

```
200 OK              → GET, PUT, PATCH succeeded. Response includes data.
201 Created         → POST succeeded. A new resource was created.
204 No Content      → DELETE succeeded. No body in response.
400 Bad Request     → Client sent invalid data (missing fields, wrong format)
401 Unauthorized    → Not logged in, or token expired
403 Forbidden       → Logged in, but does not have permission
404 Not Found       → Resource does not exist
409 Conflict        → Duplicate (e.g., email already registered)
422 Unprocessable   → Data format is correct but fails validation rules
429 Too Many Requests → Rate limit exceeded
500 Internal Server → Unexpected server error (never expose details to client)
```

---

## Response Format

```js
// ── Use a CONSISTENT response shape — always ──
// Every API response should have the same structure.
// Clients should never guess "is the data in data.user or just data?"

// utils/ApiResponse.js
class ApiResponse {
  static success(data = null, message = "Success") {
    return { success: true, message, data };
  }

  static error(message = "Something went wrong", errors = null) {
    return { success: false, message, errors };
  }

  static paginated(data, total, page, limit) {
    return {
      success: true,
      data,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
        hasNextPage: page * limit < total,
      },
    };
  }
}

// In controllers:
res.status(200).json(ApiResponse.success(posts, "Posts retrieved"));
res.status(201).json(ApiResponse.success(newPost, "Post created"));
res.status(400).json(ApiResponse.error("Email already registered"));

// What the client always receives:
// { success: true,  message: "Posts retrieved", data: [...] }
// { success: false, message: "Email already registered", errors: null }
```

---

---

# 8. Error Handling Standards

---

## Custom Error Class

```js
// utils/ApiError.js
class ApiError extends Error {
  constructor(statusCode, message, errors = []) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
    this.isOperational = true;   // distinguishes known errors from bugs
    Error.captureStackTrace(this, this.constructor);
  }
}

// Usage in controllers and services
throw new ApiError(404, "Post not found");
throw new ApiError(400, "Validation failed", validationErrors);
throw new ApiError(401, "Authentication required");
throw new ApiError(403, "You do not have permission to delete this post");
```

---

## Global Error Handler

```js
// middleware/errorHandler.js
function errorHandler(err, req, res, next) {
  // Log every error on the server — include stack trace
  console.error({
    message: err.message,
    stack:   err.stack,
    path:    req.path,
    method:  req.method,
    userId:  req.user?.id ?? "unauthenticated",
  });

  // Known, operational error — safe to send details to client
  if (err.isOperational) {
    return res.status(err.statusCode).json(
      ApiResponse.error(err.message, err.errors)
    );
  }

  // Mongoose validation error
  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map(e => e.message);
    return res.status(422).json(
      ApiResponse.error("Validation failed", errors)
    );
  }

  // MongoDB duplicate key error
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    return res.status(409).json(
      ApiResponse.error(`${field} is already taken`)
    );
  }

  // JWT errors
  if (err.name === "JsonWebTokenError") {
    return res.status(401).json(ApiResponse.error("Invalid token"));
  }
  if (err.name === "TokenExpiredError") {
    return res.status(401).json(ApiResponse.error("Token expired"));
  }

  // Unknown error — DO NOT expose details to client
  res.status(500).json(
    ApiResponse.error("Something went wrong. Please try again.")
  );
  // Stack trace is logged above — not sent to client
}
```

---

## Frontend Error Handling

```jsx
// ── Every async call needs a try/catch ──
// ── Every UI must have a loading state AND an error state ──

function PostFeed() {
  const [posts, setPosts]   = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]   = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await postsService.getPosts();
        if (!cancelled) setPosts(data);
      } catch (err) {
        if (!cancelled) setError(err.message || "Failed to load posts");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => { cancelled = true; };
  }, []);

  if (loading) return <LoadingSkeletons count={3} />;

  if (error) return (
    <ErrorMessage
      message={error}
      onRetry={() => setError(null)}   // let the user retry
    />
  );

  if (posts.length === 0) return (
    <EmptyState message="No posts yet. Be the first to post!" />
  );

  return posts.map(post => <PostCard key={post._id} post={post} />);
}

// ── Three states are ALWAYS required ──
// 1. Loading state — never show stale or empty content while fetching
// 2. Error state   — never show a blank screen or crash on failure
// 3. Empty state   — "No results" is different from "an error occurred"
```

---

---

# 9. Security Standards

---

## Authentication and Tokens

```js
// ── Never store secrets in code ──
// ❌
const secret = "my-super-secret-key";

// ✅
const secret = process.env.JWT_SECRET;
// Stored in .env (never committed to Git)


// ── Token expiry is mandatory ──
jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "15m" });
// Access token: 15 minutes
// Refresh token: 7 days (stored in httpOnly cookie)


// ── Password hashing — bcrypt rounds ──
const BCRYPT_ROUNDS = 12;    // minimum 12 for production
const hashed = await bcrypt.hash(plainPassword, BCRYPT_ROUNDS);

// ❌ Never use MD5, SHA1, SHA256 for passwords
// These are fast hashing algorithms — designed for speed, not security
// bcrypt is deliberately slow — that is the point
```

---

## Input Validation and Sanitisation

```js
// ── Validate on the server — always. Client validation is just UX. ──
// A user can send any request directly using Postman or curl.
// Client-side validation is bypassed in seconds.

// Using express-validator
const { body, validationResult } = require("express-validator");

const createPostRules = [
  body("title")
    .trim()
    .notEmpty().withMessage("Title is required")
    .isLength({ min: 3, max: 100 }).withMessage("Title must be 3–100 characters"),
  body("content")
    .trim()
    .notEmpty().withMessage("Content is required"),
  body("tags")
    .optional()
    .isArray({ max: 10 }).withMessage("Maximum 10 tags"),
];

// Middleware to check for validation errors
function validate(rules) {
  return async (req, res, next) => {
    await Promise.all(rules.map(rule => rule.run(req)));
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json(
        ApiResponse.error("Validation failed", errors.array())
      );
    }
    next();
  };
}


// ── Never use eval() or execute user-supplied strings ──
// ❌ Code injection vulnerability
eval(req.body.formula);
new Function(req.body.code)();

// ── Sanitise HTML content to prevent XSS ──
// If you store and display user-generated HTML:
const sanitizeHtml = require("sanitize-html");
const cleanContent = sanitizeHtml(req.body.content, {
  allowedTags: ["b", "i", "em", "strong", "p", "br"],
  allowedAttributes: {},
});
```

---

## Environment Variables

```bash
# .env — NEVER commit this file
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/dbname
JWT_SECRET=a-long-random-string-minimum-32-characters
JWT_REFRESH_SECRET=another-different-long-random-string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
OPENAI_API_KEY=sk-...
PORT=5000
NODE_ENV=development

# .env.example — DO commit this (no real values)
MONGODB_URI=
JWT_SECRET=
JWT_REFRESH_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
OPENAI_API_KEY=
PORT=5000
NODE_ENV=development
```

```gitignore
# .gitignore — add these on Day 1 of every project
.env
.env.local
.env.production
node_modules/
dist/
build/
.DS_Store
*.log
```

---

---

# 10. Git and Version Control Standards

---

## Commit Messages

```bash
# ── Format: type(scope): short description ──
# All lowercase, present tense, under 72 characters

# Types:
# feat     — a new feature
# fix      — a bug fix
# docs     — documentation changes
# style    — formatting, missing semicolons (no logic change)
# refactor — code change that is neither a fix nor a feature
# test     — adding or updating tests
# chore    — build process, dependency updates

# ✅ Good commit messages
git commit -m "feat(auth): add JWT refresh token rotation"
git commit -m "fix(upload): validate file mime type before Cloudinary upload"
git commit -m "refactor(posts): extract feed logic into usePosts hook"
git commit -m "docs: add API endpoint documentation to README"
git commit -m "chore: update express to 4.18.2"
git commit -m "style(button): apply consistent border-radius from CSS variables"

# ❌ Bad commit messages
git commit -m "fix"
git commit -m "update"
git commit -m "changes"
git commit -m "wip"
git commit -m "asdfgh"
git commit -m "final version"
git commit -m "final version 2"
git commit -m "actually final"
```

---

## Branching Strategy

```bash
# ── Branch naming: type/short-description-in-kebab-case ──

# Feature branches
git checkout -b feat/user-authentication
git checkout -b feat/post-feed-pagination
git checkout -b feat/cloudinary-image-upload

# Bug fix branches
git checkout -b fix/mobile-nav-overflow
git checkout -b fix/jwt-expiry-not-handled

# Refactor branches
git checkout -b refactor/extract-api-service-layer

# ── Workflow ──
# 1. Always branch from main
# 2. Make small, focused commits
# 3. Open a PR when done — review before merging
# 4. Delete the branch after merging

# ❌ Committing directly to main
git checkout main
git commit -m "quick fix"   # wrong — always use a branch


# ── Before pushing — always pull and rebase ──
git fetch origin
git rebase origin/main   # keeps history clean, no unnecessary merge commits
```

---

---

# 11. CSS and Styling Standards

---

## Structure and Organisation

```css
/* ── Order of properties in a rule (SMACSS-inspired) ──  */
.card {
  /* 1. Positioning */
  position: relative;
  top: 0;
  z-index: 1;

  /* 2. Display and Box Model */
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  padding: var(--space-lg);
  margin: var(--space-md) 0;
  border: 1px solid var(--colour-border);
  border-radius: var(--radius-md);

  /* 3. Background and colour */
  background-color: var(--colour-surface);
  color: var(--colour-text);
  box-shadow: var(--shadow-sm);

  /* 4. Typography */
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: 1.5;

  /* 5. Transitions and animations */
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}


/* ── No magic numbers — every value should have a name ──  */

/* ❌ Magic numbers */
.card { border-radius: 8px; padding: 24px; color: #1f2937; }

/* ✅ CSS variables */
.card {
  border-radius: var(--radius-md);
  padding: var(--space-lg);
  color: var(--colour-text);
}


/* ── No !important ──  */
/* If you need !important, your specificity structure is broken. Fix it. */
/* Exception: utility override classes used intentionally */
.sr-only {
  position: absolute !important;   /* acceptable — override anything for a11y */
  width: 1px !important;
}
```

---

## Responsive Design Rules

```css
/* ── Mobile-first — always ──  */
/* Write for mobile. Override for larger screens. */

/* ── Standard breakpoints (define as variables or in media queries) ──  */
/* sm:  640px  — large mobile                  */
/* md:  768px  — tablet                        */
/* lg:  1024px — laptop                        */
/* xl:  1280px — desktop                       */
/* 2xl: 1536px — large desktop                 */

/* ── Never animate width or height ──  */
/* They cause expensive layout recalculations (browser repaints everything) */

/* ❌ Slow */
.panel { transition: height 0.3s; }
.panel:hover { height: 300px; }

/* ✅ Fast — GPU-accelerated, no layout recalculation */
.panel { transition: transform 0.3s, opacity 0.3s; }
.panel.hidden { transform: scaleY(0); opacity: 0; }


/* ── Use transform and opacity for all animations ──  */
/* These are the only two CSS properties that do not trigger layout or paint */
```

---

---

# 12. Performance Standards

---

## Frontend

```jsx
// ── Lazy load pages ──
import { lazy, Suspense } from "react";

const ProfilePage  = lazy(() => import("./pages/ProfilePage"));
const SettingsPage = lazy(() => import("./pages/SettingsPage"));

function App() {
  return (
    <Suspense fallback={<PageLoadingSpinner />}>
      <Routes>
        <Route path="/profile"  element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Suspense>
  );
}
// Each page loads only when navigated to — not all on first load


// ── Debounce search inputs ──
// Without debounce: API call on every keystroke (e.g. "React" = 5 calls)
// With debounce: API call only after user stops typing for 400ms

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim()) onSearch(query);
    }, 400);
    return () => clearTimeout(timer);   // cancel if user keeps typing
  }, [query]);

  return <input value={query} onChange={e => setQuery(e.target.value)} />;
}


// ── Memoize expensive computations ──
// useMemo: cache a computed value
// useCallback: cache a function reference

// Only use when:
// 1. The computation is genuinely expensive (>1ms consistently)
// 2. The result is passed to a memoized child component
// Do NOT memoize everything — it adds overhead and complexity

const sortedPosts = useMemo(
  () => [...posts].sort((a, b) => b.likes - a.likes),
  [posts]   // only re-sorts when posts array changes
);
```

---

## Backend

```js
// ── Use lean() on read-only MongoDB queries ──
const posts = await Post.find({ status: "published" }).lean();
// Returns plain objects — 3–5x faster than full Mongoose documents


// ── Add indexes to fields you query on ──
// Without index: MongoDB scans every document (O(n))
// With index: direct lookup (O(log n))

// Add indexes for: fields in .find() queries, sort fields, unique fields
postSchema.index({ author: 1, createdAt: -1 });
postSchema.index({ status: 1 });
userSchema.index({ email: 1 }, { unique: true });


// ── Compress API responses ──
const compression = require("compression");
app.use(compression());
// Reduces JSON response size by 60–80% — large for text-heavy APIs


// ── Cache expensive reads with a TTL ──
// Simple in-memory cache for non-sensitive, rarely-changing data
const cache = new Map();

async function getCategories() {
  const CACHE_KEY = "categories";
  const CACHE_TTL = 5 * 60 * 1000;   // 5 minutes

  if (cache.has(CACHE_KEY)) {
    const { data, expiresAt } = cache.get(CACHE_KEY);
    if (Date.now() < expiresAt) return data;
  }

  const categories = await Category.find().lean();
  cache.set(CACHE_KEY, { data: categories, expiresAt: Date.now() + CACHE_TTL });
  return categories;
}
```

---

---

# 13. Code Review Checklist

Use this before every commit and before marking any PR as ready for review.

---

## Functionality
```
□ Does the code do what the task/ticket describes?
□ Are edge cases handled? (empty array, null value, 0, negative numbers)
□ Are all async functions wrapped in try/catch?
□ Does every API route return a response in all code paths?
□ Is error handling meaningful — not just console.log and silent failure?
```

## Security
```
□ Are there any hardcoded secrets, passwords, or API keys?
□ Is user input validated on the server before use?
□ Are protected routes actually protected with auth middleware?
□ Are passwords hashed — never stored in plain text?
□ Is .env added to .gitignore?
□ Are any user-supplied values passed to eval(), exec(), or innerHTML?
```

## Code Quality
```
□ Does every variable, function, and component have a meaningful name?
□ Are there any magic numbers? Replace with named constants.
□ Is any function longer than 40 lines? If so, can it be split?
□ Is any logic duplicated that could be extracted into a shared function?
□ Are all console.log() statements that were for debugging removed?
□ Are there commented-out blocks of old code? Delete them — Git has history.
```

## React Specific
```
□ Does every list item have a unique, stable key prop?
□ Are there any state variables that can be derived instead?
□ Are there any useEffect calls missing dependencies?
□ Does the component handle loading, error, and empty states?
□ Are API calls in a service layer — not directly inside components?
```

## Database
```
□ Are queries using .lean() where documents are only read?
□ Are indexes defined for fields that are queried or sorted?
□ Are passwords excluded from query results using .select("-password")?
□ Are there any N+1 queries? Replace with .populate() or aggregation.
```

## Git
```
□ Is the commit message following the correct format?
□ Does the commit contain ONLY changes related to its message?
□ Are there any merge conflicts markers (<<<<<<) left in the code?
□ Is the PR description clear about what changed and why?
```

---

## 🚫 The Global Never-Do List

```
❌ NEVER use var
❌ NEVER use == (always ===)
❌ NEVER store secrets in code
❌ NEVER commit .env files
❌ NEVER store passwords in plain text
❌ NEVER use innerHTML with user-supplied content
❌ NEVER swallow errors silently with empty catch blocks
❌ NEVER return stack traces to API clients
❌ NEVER store uploaded files on the server filesystem
❌ NEVER skip server-side validation because the client validates
❌ NEVER name a variable "data", "temp", "info", "stuff", or "x"
❌ NEVER leave console.log() calls in production code
❌ NEVER leave commented-out dead code in the codebase
❌ NEVER commit directly to the main branch
❌ NEVER write a commit message that says "fix", "update", or "changes"
❌ NEVER use !important in CSS unless it is a documented exception
❌ NEVER hardcode colours, spacing, or font sizes outside CSS variables
❌ NEVER run cron jobs on every instance in a multi-server deployment
❌ NEVER access deeply nested object properties without optional chaining
❌ NEVER use forEach when you need a result — use map/filter/reduce
```

---

*Coding Standards · Full Stack Development · React · Node.js · MongoDB · 2025*
