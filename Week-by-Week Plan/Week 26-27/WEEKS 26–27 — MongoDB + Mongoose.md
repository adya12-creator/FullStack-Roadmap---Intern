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