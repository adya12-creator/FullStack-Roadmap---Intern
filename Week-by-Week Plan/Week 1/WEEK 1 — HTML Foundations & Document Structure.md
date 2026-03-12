# ╔══════════════════════════════════════╗
# ║  PHASE 1 — HTML                      ║
# ║  The Skeleton of Every Website       ║
# ╚══════════════════════════════════════╝

> **Duration:** 3 Weeks · 15 Working Days · Weeks 1–3
> **Difficulty:** ⭐ Beginner
> **Goal:** Understand how every webpage is structured. Build a complete multi-page static site using only HTML.

---

## 🧠 What Is HTML — Really?

HTML is a **markup language**, not a programming language. It has no logic, no conditions, no loops. It only answers one question: **"What type of content is this?"**

When you write `<h1>Hello</h1>`, you are telling the browser: "This text is the most important heading on this page." The browser then decides what that looks like by default. You are describing **meaning**, not appearance.

Every webpage ever built — Google, YouTube, your bank — has HTML as its foundation.

---

## 🚫 What to STRICTLY AVOID in Phase 1

```
❌ DO NOT add any CSS at all — not even style="" attributes
❌ DO NOT use <div> for everything — learn the right semantic tag first
❌ DO NOT skip the <label> tag on forms — it is not optional
❌ DO NOT use <br> tags to add spacing — that is CSS's job
❌ DO NOT use inline styles like <h1 style="color:red"> — wrong habit
❌ DO NOT copy-paste code without typing it yourself first
❌ DO NOT move to Phase 2 until all 3 tasks are complete and on GitHub
```

---

### ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
### WEEK 1 — HTML Foundations & Document Structure
### ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

| Day | Topics to Learn | Task / Deliverable |
|-----|----------------|-------------------|
| **Day 1** | HTML skeleton: DOCTYPE, html, head, body · Meta tags: charset, viewport, title · Setup VS Code + Live Server | — |
| **Day 2** | Headings h1–h6, paragraphs · Semantic meaning: strong vs b, em vs i · HTML comments | — |
| **Day 3** | Links: anchor tag, href, target="_blank" · Images: img, src, alt, width/height · Absolute vs relative paths | — |
| **Day 4** | Lists: ul, ol, li, dl, dt, dd · Nesting lists · When to use ordered vs unordered | — |
| **Day 5** | Tables: table, thead, tbody, tr, th, td · colspan and rowspan | **Task 1: Portfolio Page** |

---

#### DAY 1 — The Skeleton: How Every Page Is Built

**📖 What You Learn Today**
The mandatory structure every HTML file must have. Every single webpage on the internet uses this exact skeleton.

```html
<!DOCTYPE html>
<!-- This first line tells the browser: "This is a modern HTML5 document."
     Without it, the browser enters "quirks mode" and renders things oddly. -->

<html lang="en">
<!-- The root element. Everything lives inside this.
     lang="en" helps screen readers and search engines. -->

  <head>
    <!-- INVISIBLE section. The browser reads this but does NOT display it.
         It contains instructions and metadata ABOUT the page. -->

    <meta charset="UTF-8">
    <!-- Allows the page to display all characters: ₹ © é ñ emoji etc.
         Without this, special characters appear as broken symbols. -->

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Makes the page work on mobile screens.
         Without this, your page looks zoomed-out on phones. -->

    <title>My First Page</title>
    <!-- Text shown in the browser tab and in Google search results. -->

  </head>

  <body>
    <!-- VISIBLE section. Everything the user actually sees goes here. -->

    <h1>Hello, World!</h1>
    <p>This is my first webpage.</p>

  </body>

</html>
```

> 💡 **Key insight:** `<head>` = instructions for the browser. `<body>` = content for the user.

**✅ Day 1 Task**
```
1. Install VS Code if you haven't already
2. Install the "Live Server" extension in VS Code
3. Create a folder called: learning-html
4. Inside it, create: index.html
5. Type the full skeleton above BY HAND — do not copy-paste
6. Add your name in the <title> tag
7. Add one <h1> with your name and one <p> with your college name
8. Right-click → Open with Live Server and see it in the browser
9. Change the <title> and watch the browser tab update live

⚠️ AVOID: Do not add style="" anywhere. Do not use <br> for spacing.
```

---

#### DAY 2 — Text Elements: Headings, Paragraphs, Formatting

**📖 What You Learn Today**
How to structure text content properly. The heading hierarchy is not about font size — it is about document meaning.

```html
<!-- HEADINGS: h1 through h6 -->
<!-- Think of it like a book: h1 = book title, h2 = chapter, h3 = section -->
<!-- Rule: ONLY ONE h1 per page. Always. -->

<h1>The Complete Guide to Cooking</h1>      <!-- book title — only one! -->
  <h2>Chapter 1: Breakfast Recipes</h2>     <!-- chapter -->
    <h3>1.1 How to Make Perfect Eggs</h3>   <!-- section -->
      <h4>Soft Boiled Method</h4>           <!-- sub-section -->

<!-- WHY does this matter? Google reads headings to understand your page.
     Screen readers use headings to let blind users navigate the page.
     If you skip levels (h1 → h4), the structure is broken. -->

<!-- PARAGRAPHS -->
<p>
  A paragraph in HTML does not care about how you press Enter in your code.
  All this text appears on one line to the user.
</p>
<p>Each <p> tag creates a new paragraph with automatic spacing above it.</p>

<!-- TEXT FORMATTING — use for MEANING, not just looks -->
<strong>This is bold — use for important content</strong>
<em>This is italic — use for emphasis or titles</em>
<mark>This is highlighted</mark>
<del>This text is struck through — like deleted content</del>
<small>Fine print or secondary info goes here</small>

<!-- INLINE vs BLOCK — critical concept -->
<!-- Block elements start on a new line: <h1> <p> <div> -->
<!-- Inline elements flow within a line: <strong> <em> <span> <a> -->
```

**✅ Day 2 Task**
```
Open your index.html from Day 1 and add:
1. A proper heading hierarchy: h1 (your name), h2 (About Me),
   h2 (My Skills), h2 (Education)
2. Under each h2, add at least one <p> with real content
3. Use <strong> to highlight one key word in each paragraph
4. Use <em> for your college name
5. Add a <small> tag with "Last updated: today's date"

Test yourself: Can you explain WHY you used h2 and not h3 for your sections?
⚠️ AVOID: Never use headings just to make text bigger. Never have two <h1> tags.
```

---

#### DAY 3 — Links and Images: Connecting and Showing

**📖 What You Learn Today**
How web pages connect to each other and how to display images correctly.

```html
<!-- ── LINKS ── -->

<!-- Internal link: goes to another page IN your site -->
<a href="about.html">About Me</a>

<!-- External link: goes to another website -->
<a href="https://developer.mozilla.org" target="_blank" rel="noopener">
  MDN Docs
</a>
<!-- target="_blank" opens a new tab -->
<!-- rel="noopener" is a SECURITY requirement for external links — always add it -->

<!-- Anchor link: jumps to a section on the SAME page -->
<a href="#skills">Jump to My Skills</a>
<!-- The destination must have a matching id: -->
<section id="skills">
  <h2>My Skills</h2>
</section>

<!-- Email link -->
<a href="mailto:you@example.com">Send me an email</a>


<!-- ── IMAGES ── -->

<!-- Basic image -->
<img src="photo.jpg" alt="My profile photo, smiling in a blue shirt">

<!-- alt text is NOT optional. It is required for:
     1. Screen readers (visually impaired users hear this text)
     2. When the image fails to load (network error, wrong path)
     3. Google Image Search ranking
     Bad alt: alt="image" or alt="photo"
     Good alt: alt="Screenshot of the app dashboard showing 3 open tasks" -->

<!-- Image with size control -->
<img src="logo.png" alt="Company logo" width="200">
<!-- Only set width — height adjusts automatically to avoid distortion -->

<!-- Image inside a figure with caption -->
<figure>
  <img src="architecture.png" alt="System architecture diagram">
  <figcaption>
    Fig 1: How the frontend connects to the backend
  </figcaption>
</figure>
```

**✅ Day 3 Task**
```
Add to your index.html:
1. A navigation with 3 links: Home (href="#"), About (#about), Skills (#skills)
2. An <img> tag — use any image (your photo or a placeholder from
   https://picsum.photos/200/200) — give it a DESCRIPTIVE alt text
3. Wrap the image in a <figure> with a <figcaption>
4. An external link to your college website with target="_blank" rel="noopener"
5. An anchor link that jumps to your skills section

Test: Right-click your image → Open in new tab. Then break the src path
      on purpose. What does the browser show? That is why alt text matters.
⚠️ AVOID: Never write alt="image" or alt="photo" — it is useless.
```

---

#### DAY 4 — Lists: Ordered, Unordered, and Nested

**📖 What You Learn Today**
Lists are everywhere on the web. Navigation menus are lists. Steps are lists. Ingredients are lists. Know when to use which type.

```html
<!-- UNORDERED LIST: when ORDER does not matter -->
<!-- Use for: ingredients, features, skills, navigation links -->
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<!-- ORDERED LIST: when ORDER matters (steps, rankings, instructions) -->
<ol>
  <li>Open your terminal</li>
  <li>Run: npm install</li>
  <li>Run: npm start</li>
  <li>Open http://localhost:3000 in your browser</li>
</ol>

<!-- NESTED LIST: lists inside lists -->
<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </li>
  <li>Backend
    <ul>
      <li>Node.js</li>
      <li>Express.js</li>
    </ul>
  </li>
</ul>

<!-- DESCRIPTION LIST: term + its definition or description -->
<!-- Use for: glossaries, key-value pairs like a resume sidebar -->
<dl>
  <dt>HTML</dt>
  <dd>Defines the structure and content of a webpage</dd>

  <dt>CSS</dt>
  <dd>Controls the visual presentation of HTML elements</dd>
</dl>
```

> 💡 **The rule you will use for the rest of your career:** Navigation menus are always built as `<ul>` containing `<li>` elements containing `<a>` links. Always.

**✅ Day 4 Task**
```
Add to your index.html:
1. A <ul> listing your technical skills (at least 6 items)
2. An <ol> listing the steps of how you set up a coding project
3. A nested <ul> grouping your skills into Frontend and Backend
4. A <dl> with at least 3 terms: each being a tech you know, with a
   one-sentence description
```

---

#### DAY 5 — Tables + TASK 1: Personal Portfolio Page

**📖 What You Learn Today**
HTML tables are for **tabular data** — rows and columns that logically belong together. Never use tables for layout.

```html
<!-- COMPLETE TABLE STRUCTURE -->
<table>
  <caption>My Academic Record</caption>
  <!-- caption describes the table — good for accessibility and SEO -->

  <thead>
    <!-- Header rows: defines column labels -->
    <tr>
      <th scope="col">Semester</th>
      <th scope="col">CGPA</th>
      <th scope="col">Status</th>
    </tr>
  </thead>

  <tbody>
    <!-- Data rows -->
    <tr>
      <td>Semester 1</td>
      <td>8.2</td>
      <td>Pass</td>
    </tr>
    <tr>
      <td>Semester 2</td>
      <td>8.7</td>
      <td>Pass</td>
    </tr>
  </tbody>

  <tfoot>
    <!-- Footer row: totals, averages -->
    <tr>
      <td>Overall</td>
      <td>8.45</td>
      <td>Merit</td>
    </tr>
  </tfoot>
</table>

<!-- SPANNING MULTIPLE COLUMNS or ROWS -->
<table>
  <tr>
    <th colspan="3">Full Stack Skills</th>
    <!-- this header spans 3 columns -->
  </tr>
  <tr>
    <td rowspan="2">Frontend</td>  <!-- this cell spans 2 rows -->
    <td>HTML</td>
    <td>CSS</td>
  </tr>
  <tr>
    <!-- Frontend cell is already here from rowspan -->
    <td>JavaScript</td>
    <td>React</td>
  </tr>
</table>
```

**✅ Day 5 Task — TASK 1: Personal Portfolio Page**
```
Build: index.html — a single-page personal portfolio

Required sections:
1. <header> with your name as <h1> and a short tagline as <p>
2. <nav> with links to: #about, #skills, #education, #contact
3. <section id="about"> — 2 paragraphs about yourself
4. <section id="skills"> — a skills <table> with:
   - Columns: Skill | Level | Experience
   - Rows: at least 5 skills you know or are learning
   - Use colspan for a "Frontend" + "Backend" header row
5. <section id="education"> — your education details
6. <section id="contact"> — your email as an <a href="mailto:"> link
7. <footer> — "Built while learning Full Stack Development"

Rules:
✅ No CSS allowed at all — pure HTML only
✅ Every image must have descriptive alt text
✅ Validate at https://validator.w3.org — zero errors
✅ Push to GitHub with commit message: "feat: HTML portfolio page"
```

---