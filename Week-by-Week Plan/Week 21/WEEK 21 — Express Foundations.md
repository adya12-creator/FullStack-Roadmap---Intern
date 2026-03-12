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