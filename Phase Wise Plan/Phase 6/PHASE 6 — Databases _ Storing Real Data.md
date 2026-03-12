# ╔══════════════════════════════════════╗
# ║  PHASE 6 — Databases                 ║
# ║  Storing Real Data                   ║
# ╚══════════════════════════════════════╝

> **Duration:** 4 Weeks · 20 Days · Weeks 26–29
> **Difficulty:** ⭐⭐⭐ Intermediate

---

## 🧠 MongoDB vs PostgreSQL — When to Use Which

| | **MongoDB** | **PostgreSQL** |
|--|-------------|---------------|
| **Type** | NoSQL (documents) | SQL (tables with rows) |
| **Data format** | JSON-like documents | Rows and columns |
| **Schema** | Flexible — schema changes easily | Strict — schema must be defined |
| **Best for** | User content, logs, real-time data | Financial records, inventory, anything relational |
| **Query** | `db.users.find({ age: { $gte: 18 } })` | `SELECT * FROM users WHERE age >= 18` |

---

## 🚫 What to STRICTLY AVOID in Phase 6

```
❌ DO NOT store the MongoDB URI with credentials in your code — use .env
❌ DO NOT use findOne without checking if the result is null first
❌ DO NOT skip schema validation — define required fields and types
❌ DO NOT use SELECT * in SQL when you only need specific columns
❌ DO NOT store sensitive data (passwords, card numbers) without encryption
```

---

## 📅 Week-by-Week Plan

---

### WEEKS 26–27 — MongoDB + Mongoose

| Day | Topics | Deliverable |
|-----|--------|-------------|
| **Day 1** | MongoDB Atlas setup, free cluster, connect with mongoose.connect | — |
| **Day 2** | Schema definition: types, required, default, minlength, enum | — |
| **Day 3** | Model and CRUD: .create(), .find(), .findById(), .findByIdAndUpdate(), .findByIdAndDelete() | — |
| **Day 4** | Relationships: ObjectId references, .populate() to join collections | — |
| **Day 5** | TASK 18: Upgrade Blog API — replace in-memory arrays with MongoDB | **Task 18** |
| **Day 6–8** | Queries: filtering, sorting, pagination (.skip().limit()), text search | — |
| **Day 9** | Indexes, compound indexes, when to index (and when not to) | — |
| **Day 10** | TASK 19: Add pagination to Blog API — /api/posts?page=2&limit=10 | **Task 19** |

---

#### Core MongoDB/Mongoose Concepts

```js
const mongoose = require("mongoose");

// ── SCHEMA: defines the shape and rules of your data ──
const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    minlength: [5, "Title must be at least 5 characters"],
    maxlength: 100,
    trim: true,         // removes whitespace automatically
  },
  content: { type: String, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",        // references the User model
    required: true,
  },
  status: {
    type: String,
    enum: ["draft", "published", "archived"],
    default: "draft",
  },
  tags: [String],       // array of strings
}, {
  timestamps: true,     // adds createdAt and updatedAt automatically
});

const Post = mongoose.model("Post", PostSchema);

// ── CRUD OPERATIONS ──
// Create
const post = await Post.create({ title, content, author: userId });

// Read all
const posts = await Post.find({ status: "published" })
  .sort({ createdAt: -1 })   // newest first
  .limit(10)
  .skip((page - 1) * 10)     // pagination: skip previous pages
  .populate("author", "name email");  // replace ObjectId with actual user data

// Read one
const post = await Post.findById(id);
if (!post) return res.status(404).json({ error: "Post not found" });

// Update
const updated = await Post.findByIdAndUpdate(
  id,
  { $set: { title: newTitle } },  // $set updates only specified fields
  { new: true, runValidators: true }
);

// Delete
await Post.findByIdAndDelete(id);
```

---

### WEEKS 28–29 — SQL + PostgreSQL

| Day | Topics | Deliverable |
|-----|--------|-------------|
| **Day 11** | SQL fundamentals: SELECT, WHERE, ORDER BY, LIMIT, INSERT, UPDATE, DELETE | — |
| **Day 12** | JOINs: INNER JOIN, LEFT JOIN, RIGHT JOIN with examples | — |
| **Day 13** | Aggregation: COUNT, SUM, AVG, GROUP BY, HAVING | — |
| **Day 14** | Prisma ORM: schema.prisma, npx prisma migrate, prisma.user.findMany() | — |
| **Day 15–18** | Build the Blog API again using PostgreSQL + Prisma | — |
| **Day 19** | Transactions: when and why | — |
| **Day 20** | TASK 20: Compare — same API, two backends. When is Mongo better? When is Postgres? | **Task 20** |

---

## ✅ Phase 6 Completion Checklist

- [ ] Understand the difference between SQL and NoSQL and when to use each
- [ ] Blog API upgraded to use MongoDB with proper schemas and validation
- [ ] Can write JOINs, GROUP BY, and aggregation queries in SQL
- [ ] Comfortable with Prisma ORM for type-safe database access

---