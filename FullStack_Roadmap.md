# 🚀 Full Stack Developer Learning Roadmap
**For:** BTech CSE · Internship Track
 · **Daily Commitment:** 2–3 Hours/Day · **Working Days:** Mon–Fri Only (Day 1–5 per week)

---

## 🗺️ Big Picture — What Is Full Stack?

Before writing a single line of code, understand what you are building toward.

```
╔══════════════════════════════════════════════════════════╗
║                   USER'S BROWSER                         ║
║                                                          ║
║   HTML ──────────► "What content is on the page?"       ║
║   CSS  ──────────► "How does that content look?"        ║
║   JavaScript ────► "What happens when I click?"         ║
║   React ─────────► "How are parts organised?"           ║
╚══════════════════════════════════════════════════════════╝
                         │
              HTTP Request (fetch, axios)
                         │
╔══════════════════════════════════════════════════════════╗
║                NODE.JS + EXPRESS SERVER                  ║
║                                                          ║
║   "Is this user logged in?"                              ║
║   "Is this data valid?"                                  ║
║   "What should I send back?"                             ║
╚══════════════════════════════════════════════════════════╝
                         │
                    DB Query
                         │
╔══════════════════════════════════════════════════════════╗
║                    DATABASE                              ║
║          MongoDB (NoSQL) / PostgreSQL (SQL)              ║
║                                                          ║
║   "Store this user permanently"                          ║
║   "Fetch all posts from last week"                       ║
╚══════════════════════════════════════════════════════════╝
```

> 💡 **Restaurant Analogy — Use This Mental Model Always**
> - **HTML** = the printed menu (structure and content)
> - **CSS** = the restaurant's interior design (how it looks)
> - **JavaScript** = the waiter (makes things happen, reacts to you)
> - **React** = the kitchen management system (organised, efficient)
> - **Node + Express** = the kitchen (processes your order)
> - **Database** = the pantry (stores everything permanently)

---

## 📍 Full Learning Path — 8 Phases · 36 Weeks · 180 Working Days

```
                     ┌─────────────┐
                     │   START     │
                     └──────┬──────┘
                            │
                 ┌──────────▼──────────┐
                 │   PHASE 1: HTML     │
                 │  "Build Structure"  │
                 │  3 Weeks · 15 Days  │  Week 1–3
                 └──────────┬──────────┘
                            │ ✅ Can build any static page from scratch
                 ┌──────────▼──────────┐
                 │   PHASE 2: CSS      │
                 │  "Make It Look      │
                 │   Professional"     │
                 │  4 Weeks · 20 Days  │  Week 4–7
                 └──────────┬──────────┘
                            │ ✅ Responsive on mobile + desktop
                 ┌──────────▼──────────┐
                 │  PHASE 3:           │
                 │  JAVASCRIPT         │◄── ⚠️ MOST CRITICAL PHASE
                 │  "Make It Alive"    │    Spend full time here
                 │  8 Weeks · 40 Days  │  Week 8–15
                 └──────────┬──────────┘
                            │ ✅ DOM, Async, Fetch APIs mastered
                ┌───────────┴───────────┐
                │                       │
     ┌──────────▼──────────┐ ┌──────────▼──────────┐
     │  PHASE 4: React.js  │ │  PHASE 5: Node.js   │
     │  "Modern Frontend"  │ │  "Build Backend"     │
     │  5 Weeks · 25 Days  │ │  5 Weeks · 25 Days   │
     │  Week 16–20         │ │  Week 21–25          │
     └──────────┬──────────┘ └──────────┬──────────┘
                │                       │
                └───────────┬───────────┘
                            │ ✅ Frontend calls your own API
                 ┌──────────▼──────────┐
                 │  PHASE 6: DATABASE  │
                 │  "Store Real Data"  │
                 │  4 Weeks · 20 Days  │  Week 26–29
                 └──────────┬──────────┘
                            │ ✅ Data persists after server restart
                 ┌──────────▼──────────┐
                 │  PHASE 7: Git &     │
                 │  Deployment         │
                 │  2 Weeks · 10 Days  │  Week 30–31
                 └──────────┬──────────┘
                            │ ✅ App is live on the internet
                 ┌──────────▼──────────┐
                 │  PHASE 8: CAPSTONE  │
                 │  "Ship Something    │
                 │   Real"             │
                 │  5 Weeks · 25 Days  │  Week 32–36
                 └──────────┬──────────┘
                            │
                     ┌──────▼──────┐
                     │  YOU ARE A  │
                     │ FULL STACK  │
                     │ DEVELOPER   │
                     └─────────────┘
```

### Phase Overview Table

| Phase | Topic | Duration | Difficulty | Weeks |
|-------|-------|----------|------------|-------|
| **Phase 1** | HTML | 3 Weeks · 15 Days | ⭐ | Week 1–3 |
| **Phase 2** | CSS | 4 Weeks · 20 Days | ⭐⭐ | Week 4–7 |
| **Phase 3** | JavaScript | 8 Weeks · 40 Days | ⭐⭐⭐ | Week 8–15 |
| **Phase 4** | React.js | 5 Weeks · 25 Days | ⭐⭐⭐ | Week 16–20 |
| **Phase 5** | Node.js + Express | 5 Weeks · 25 Days | ⭐⭐⭐⭐ | Week 21–25 |
| **Phase 6** | Databases | 4 Weeks · 20 Days | ⭐⭐⭐ | Week 26–29 |
| **Phase 7** | Git & Deployment | 2 Weeks · 10 Days | ⭐⭐⭐ | Week 30–31 |
| **Phase 8** | Capstone Projects | 5 Weeks · 25 Days | ⭐⭐⭐⭐ | Week 32–36 |

---

---

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

## 📅 Week-by-Week Plan

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

### ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
### WEEK 2 — Forms, Semantic HTML & Multi-Page Sites
### ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

| Day | Topics to Learn | Task / Deliverable |
|-----|----------------|-------------------|
| **Day 1** | Forms: form, input, label, textarea, select · Input types: text, email, password, number, date, radio, checkbox · Required, placeholder, name attributes | — |
| **Day 2** | Semantic layout tags: header, nav, main, section, article, aside, footer · Why semantics matter for SEO and accessibility | — |
| **Day 3** | Audio and video tags: controls, src, autoplay · iframes: embedding YouTube, Google Maps · figure and figcaption | — |
| **Day 4** | Multi-page site: creating multiple HTML files · Navigation between pages using relative links · Site map planning on paper | — |
| **Day 5** | Review all Week 1–2 concepts | **Task 2: Multi-page Site** |

---

#### DAY 6 — Forms: Collecting User Input

**📖 What You Learn Today**
Forms are how users send data to your server. Getting them right — with proper labels, input types, and validation — is a professional requirement.

```html
<form action="/submit" method="POST">
  <!-- action: where to send the data  |  method: GET (visible in URL) or POST (hidden) -->

  <!-- ── TEXT INPUTS ── -->
  <label for="fullname">Full Name</label>
  <input type="text" id="fullname" name="fullname" required placeholder="Rahul Sharma">
  <!-- for="X" on label MUST match id="X" on input — this connects them -->
  <!-- required: browser blocks submit if empty -->

  <label for="email">Email Address</label>
  <input type="email" id="email" name="email" required>
  <!-- type="email" validates the @ format automatically -->

  <label for="phone">Phone Number</label>
  <input type="tel" id="phone" name="phone" pattern="[0-9]{10}">
  <!-- pattern uses regex: exactly 10 digits -->

  <label for="dob">Date of Birth</label>
  <input type="date" id="dob" name="dob">
  <!-- Shows a date picker in supported browsers -->

  <!-- ── DROPDOWN SELECT ── -->
  <label for="department">Department</label>
  <select id="department" name="department" required>
    <option value="">-- Select Department --</option>  <!-- empty default -->
    <option value="cse">Computer Science</option>
    <option value="ece">Electronics</option>
    <option value="mech">Mechanical</option>
  </select>

  <!-- ── RADIO BUTTONS ── -->
  <!-- Radio = pick EXACTLY ONE from a group (like a multiple choice exam) -->
  <!-- All options in a group MUST share the same name attribute -->
  <fieldset>
    <legend>Current Semester</legend>
    <input type="radio" id="sem5" name="semester" value="5" checked>
    <label for="sem5">5th Semester</label>

    <input type="radio" id="sem6" name="semester" value="6">
    <label for="sem6">6th Semester</label>
  </fieldset>

  <!-- ── CHECKBOXES ── -->
  <!-- Checkbox = pick ZERO or MORE options -->
  <fieldset>
    <legend>Known Programming Languages</legend>
    <input type="checkbox" id="lang-c" name="languages" value="c">
    <label for="lang-c">C</label>

    <input type="checkbox" id="lang-python" name="languages" value="python">
    <label for="lang-python">Python</label>

    <input type="checkbox" id="lang-js" name="languages" value="javascript">
    <label for="lang-js">JavaScript</label>
  </fieldset>

  <!-- ── TEXTAREA ── -->
  <label for="message">Tell us about yourself</label>
  <textarea id="message" name="message" rows="4" cols="50"
    placeholder="I am a 5th semester CSE student..."></textarea>

  <!-- ── BUTTONS ── -->
  <button type="submit">Submit Registration</button>
  <button type="reset">Clear All Fields</button>
  <button type="button" onclick="preview()">Preview</button>
</form>
```

> 🚫 **Critical difference:** Radio = pick only one (like a multiple choice exam). Checkbox = pick many (like a shopping wishlist). Using the wrong one breaks your form's logic completely.

**✅ Day 6 Task**
```
Create: register.html — a Student Registration Form

Include all of these, each inside a <fieldset> with a <legend>:
1. Personal Info: Full Name, Email, Phone, Date of Birth
2. Academic Info: Department (select), Semester (radio buttons 1–8), CGPA (number)
3. Skills: Known languages (checkboxes: C, Python, Java, JavaScript)
4. Declaration: a required checkbox "I confirm all information is accurate"
5. Buttons: Submit, Reset, and a type="button" labelled "Preview"

Test: Click Reset — do ALL fields clear?
⚠️ AVOID: Never give radio buttons in the same group different name values.
```

---

#### DAY 7 — Semantic HTML: Write HTML With Meaning

**📖 What You Learn Today**
HTML5 introduced tags that describe the **purpose** of the content, not just its appearance. This is the difference between a professional developer and a beginner.

```html
<!-- ── THE PROBLEM WITH DIV-SOUP (What Beginners Write) ── -->
<div class="header">
  <div class="nav">
    <div class="nav-item"><a href="/">Home</a></div>
  </div>
</div>
<div class="main">...</div>
<div class="footer">...</div>
<!-- Every element is a <div>. Google cannot tell what is the article vs the sidebar.
     A screen reader cannot navigate — blind users are completely lost. -->


<!-- ── THE SEMANTIC SOLUTION ── -->

<header>
  <!-- Site header: logo, site name, main navigation -->
  <a href="/" class="logo">MyPortfolio</a>
  <nav>
    <!-- <nav> marks a MAJOR navigation block — only primary nav, not every link group -->
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
</header>

<main>
  <!-- There must be EXACTLY ONE <main> per page -->
  <!-- It contains the unique content of this page (not header/footer) -->

  <section id="about">
    <!-- <section> groups thematically related content — should always have a heading -->
    <h2>About Me</h2>
    <p>I am a 5th semester CSE student...</p>
  </section>

  <section id="projects">
    <h2>My Projects</h2>

    <article>
      <!-- <article> is self-contained content that makes sense on its own -->
      <!-- Could be copy-pasted to another site and still make sense -->
      <!-- Use for: blog posts, news articles, a single product card -->
      <h3>Weather App</h3>
      <p>A JavaScript app that fetches real-time weather data...</p>
    </article>
  </section>

  <aside>
    <!-- <aside> is content tangentially related to the main content -->
    <!-- Use for: sidebar links, author bio in a blog, related articles -->
    <h2>Quick Links</h2>
    <ul>
      <li><a href="https://github.com/you">GitHub</a></li>
    </ul>
  </aside>
</main>

<footer>
  <p>© 2025 Rahul Sharma. Built while learning full stack.</p>
  <address>
    <!-- <address> is for contact info of the nearest <article> or <body> -->
    Email: <a href="mailto:rahul@email.com">rahul@email.com</a>
  </address>
</footer>
```

**Quick Decision Guide**
```
Content is a major page division?          → <section>
Content is self-contained and portable?    → <article>
Content is site header with nav?           → <header> + <nav>
Content is supplementary / sidebar?        → <aside>
Content is the unique page content?        → <main> (only one per page)
Content is page footer?                    → <footer>
Everything else that needs grouping?       → <div> (last resort only)
```

**✅ Day 7 Task**
```
Rewrite your index.html using proper semantic tags:
1. Wrap the top section in <header> with a <nav>
2. Replace all bare content areas with <main>
3. Each named section (About, Skills, Projects) becomes a <section>
4. Wrap the bottom in <footer> with your name and an <address>
5. If you have project descriptions, each one becomes an <article>
⚠️ AVOID: Never use <section> without a heading inside it.
⚠️ AVOID: Never have more than one <main> on a page.
```

---

#### DAY 8–9 — Meta Tags, SEO, Multimedia

**📖 What You Learn Today**
The invisible but critically important parts of HTML that affect search rankings, social media sharing, and usability.

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- ── SEO META TAGS ── -->
  <title>Rahul Sharma | Full Stack Developer Portfolio</title>
  <!-- Keep under 60 characters. This appears in Google results as the blue link. -->

  <meta name="description"
    content="CSE student building full stack projects with React and Node.js.
             Seeking internship opportunities in web development.">
  <!-- Keep under 160 characters. This is the grey text under the Google link. -->

  <meta name="author" content="Rahul Sharma">

  <!-- ── OPEN GRAPH TAGS (social media preview) ── -->
  <!-- These control how your page looks when shared on WhatsApp, LinkedIn -->
  <meta property="og:title" content="Rahul Sharma | Developer Portfolio">
  <meta property="og:description" content="CSE intern building full stack apps">
  <meta property="og:image" content="https://yoursite.com/preview.png">
  <!-- og:image should be 1200×630 pixels for best results -->
  <meta property="og:url" content="https://yoursite.com">
</head>

<!-- ── MULTIMEDIA ELEMENTS ── -->

<!-- Video with controls -->
<video src="demo.mp4" controls width="640" poster="thumbnail.jpg">
  Your browser does not support video.
</video>

<!-- Audio player -->
<audio src="podcast.mp3" controls>
  Your browser does not support audio.
</audio>

<!-- Embedding YouTube video -->
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="Video description"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media"
  allowfullscreen>
</iframe>
```

---

#### DAYS 10–11 — TASK 2: Multi-Page Portfolio Site

**✅ Days 10–11 Task — TASK 2: Multi-Page Portfolio**
```
Build a 3-page website:
  index.html    → Home page
  about.html    → About Me, education table, learning timeline
  contact.html  → Contact form using everything from Day 6

All 3 pages must share:
  - The SAME navigation structure with links between all pages
  - The SAME footer
  - Proper semantic layout (header, main, footer)

Checklist:
✅ Nav links work correctly between all 3 pages
✅ Contact form has labels for every input
✅ Every image has descriptive alt text
✅ Validate each page at validator.w3.org — zero errors
✅ Push to GitHub Pages with commit: "feat: complete multi-page portfolio"
```

---

### ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
### WEEK 3 — Deep Dive, Accessibility & Phase Capstone
### ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

| Day | Topics to Learn | Task / Deliverable |
|-----|----------------|-------------------|
| **Day 1** | Accessibility: ARIA roles, aria-label, aria-describedby · Tab order and keyboard navigation · Screen reader considerations | — |
| **Day 2** | Meta SEO tags: description, og:title, og:image · Favicon setup · Linking CSS and JS files (preview only) | — |
| **Day 3** | HTML entities: &amp;, &lt;, &gt;, &copy;, &nbsp; · HTML validation using validator.w3.org | — |
| **Day 4** | Review: rebuild Day 1 page from memory · Peer review: swap HTML files with another student | — |
| **Day 5** | Phase Capstone: Restaurant website | **Task 3: Restaurant Site** |

---

#### TASK 3 — Phase Capstone: Restaurant Website

**✅ Day 15 Task — TASK 3 (Phase Capstone)**
```
Build a 3-page restaurant website:
  index.html   → Home: hero section, about, featured dishes
  menu.html    → Full menu as a properly structured HTML table
  contact.html → Contact form + embedded Google Maps iframe + address

Requirements:
✅ Semantic HTML throughout — no div-soup
✅ At least one <figure> with <figcaption> on every page
✅ The menu page uses <table> with <thead>, <tbody>, <tfoot>
✅ The contact page uses a full <form> with all input types from Week 2
✅ All images have descriptive alt text
✅ All pages pass W3C validation with zero errors
✅ Push to GitHub, enable GitHub Pages, demo the live URL

Commit message: "feat: restaurant site — Phase 1 capstone"
```

---

## ✅ Phase 1 Completion Checklist

- [ ] All 3 tasks completed and committed to GitHub
- [ ] Portfolio site is live on GitHub Pages with a public URL
- [ ] Every page passes W3C validation with zero errors
- [ ] Can write the full HTML skeleton from memory in 2 minutes
- [ ] Understands block vs inline elements without Googling
- [ ] Can explain what semantic HTML is and why it matters
- [ ] No inline `style=""` attributes anywhere in any file

---
---

# ╔══════════════════════════════════════╗
# ║  PHASE 2 — CSS                       ║
# ║  Making the Web Look Professional    ║
# ╚══════════════════════════════════════╝

> **Duration:** 4 Weeks · 20 Working Days · Weeks 4–7
> **Difficulty:** ⭐⭐ Beginner+
> **Goal:** Style any webpage from scratch, build responsive layouts, and make your Phase 1 portfolio look professional on all screen sizes.

---

## 🧠 What Is CSS — Really?

CSS tells the browser **how elements look**. You describe rules: "select this element, apply this property with this value."

The word **Cascading** means three things happen simultaneously:
1. Styles flow downward from parent to child (inheritance)
2. Later rules override earlier rules (cascade order)
3. More specific rules beat less specific rules (specificity)

Understanding all three is what separates developers who fight CSS from developers who control it.

---

## 🚫 What to STRICTLY AVOID in Phase 2

```
❌ DO NOT use Bootstrap or any CSS framework — learn pure CSS first
❌ DO NOT use px for font sizes on body text — use rem
❌ DO NOT hardcode colours everywhere — use CSS variables from Day 1
❌ DO NOT use float for layout — it is a 2005 technique, use Flexbox/Grid
❌ DO NOT use !important — it means your specificity logic is broken
❌ DO NOT write styles inline on HTML elements — CSS belongs in .css files
❌ DO NOT use fixed pixel widths for layout containers
❌ DO NOT skip the box-sizing: border-box reset — always add it first
❌ DO NOT ignore mobile — test on real phone or DevTools every day
```

---

## 📅 Week-by-Week Plan

---

### ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
### WEEK 4 — CSS Foundations: Selectors, Box Model, Typography
### ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

| Day | Topics to Learn | Task / Deliverable |
|-----|----------------|-------------------|
| **Day 1** | CSS selectors · The cascade and specificity · Connecting CSS to HTML | — |
| **Day 2** | Box model: margin, padding, border, box-sizing · Block vs inline · Width and height | — |
| **Day 3** | Colors, Typography, CSS Custom Properties (variables) | — |
| **Day 4** | Flexbox: one-dimensional layout · justify-content, align-items, flex-wrap | — |
| **Day 5** | CSS Grid: two-dimensional layout · grid-template-columns, auto-fit, minmax | **Task 4: Bio Page styled** |

---

#### DAY 1 — CSS Syntax, Selectors, and the Cascade

```css
/* ── HOW TO CONNECT CSS TO HTML ── */
/* In your HTML <head>: */
/* <link rel="stylesheet" href="styles.css"> */
/* This is the only correct way. Never use <style> tags or inline styles. */


/* ── ANATOMY OF A CSS RULE ── */
selector {          /* WHO to target */
  property: value;  /* WHAT to change */
}


/* ── SELECTORS ── */
h1 { color: navy; }         /* Element: targets ALL h1 tags */
.card { background: white; } /* Class: targets class="card" */
#hero { min-height: 100vh; } /* ID: targets id="hero" — use sparingly */
.card p { color: gray; }    /* Descendant: p inside .card */
ul > li { list-style: none; } /* Direct child */
h1, h2, h3 { font-family: Georgia; } /* Multiple targets */

/* Pseudo-classes: special states */
a:hover  { color: blue; }
a:focus  { outline: 2px solid blue; } /* keyboard navigation — never remove this */
li:first-child { font-weight: bold; }
li:nth-child(odd) { background: #f5f5f5; } /* alternating rows */

/* Pseudo-elements: virtual parts */
h2::before { content: "▶ "; color: blue; } /* adds content before h2 */


/* ── THE CASCADE: which rule wins? ── */

/* Rule 1: Later rules override earlier rules (same specificity) */
p { color: red; }
p { color: blue; }   /* blue wins — written later */

/* Rule 2: More specific selectors beat less specific ones */
p          { color: red; }    /* specificity: 0,0,1 */
.text      { color: blue; }   /* specificity: 0,1,0 — wins */
#main-text { color: green; }  /* specificity: 1,0,0 — wins over both */

/* Specificity score (roughly):
   #id           = 0,1,0,0  (highest among selectors)
   .class        = 0,0,1,0
   element (p)   = 0,0,0,1  (lowest)
   !important    = overrides all — NEVER use it                     */
```

**✅ Day 1 Task**
```
1. Create styles.css and link it to all 3 HTML pages
2. At the VERY TOP of styles.css, add this reset (type it, understand each line):
   *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
3. Write rules for: body, h1, h2, h3, p, a, a:hover, ul, li
4. Create a .container class: max-width: 1100px; margin: 0 auto;
   Wrap your page content in <div class="container"> in the HTML
5. Make every other row of your skills table have a light grey background
   using nth-child(even)

⚠️ AVOID: Never use !important. If you feel the urge, a more specific selector exists.
```

---

#### DAY 2 — The Box Model: How Elements Take Up Space

```css
/* Every HTML element is a rectangular box with 4 layers: */
/*
  ┌─────────────────────────────────────┐
  │               MARGIN                │  ← space OUTSIDE the element
  │   ┌─────────────────────────────┐   │
  │   │           BORDER            │   │  ← the visible edge
  │   │   ┌─────────────────────┐   │   │
  │   │   │       PADDING       │   │   │  ← space INSIDE, around content
  │   │   │   ┌─────────────┐   │   │   │
  │   │   │   │   CONTENT   │   │   │   │  ← the actual text/image
  │   │   │   └─────────────┘   │   │   │
  │   │   └─────────────────────┘   │   │
  │   └─────────────────────────────┘   │
  └─────────────────────────────────────┘
*/

/* THE MOST IMPORTANT RESET — add this to every project */
*, *::before, *::after {
  box-sizing: border-box;
  /* Without this: width: 200px + padding: 20px = 240px total (surprising!)
     With this:    width: 200px + padding: 20px = 200px total (expected) */
}

/* Box model properties */
.card {
  width: 300px;
  padding: 20px;           /* all 4 sides */
  padding: 16px 24px;      /* top/bottom  left/right */
  padding: 8px 12px 16px 24px; /* top right bottom left (clockwise) */

  margin: 0 auto;          /* 0 top/bottom, auto left/right = centred horizontally */
  margin-bottom: 24px;     /* space below this element */

  border: 1px solid #e5e7eb;
  border-radius: 8px;      /* rounded corners */
  box-shadow: 0 4px 12px rgba(0,0,0,0.1); /* x y blur colour */
}

/* Units you will use most */
/*
  px    — exact pixels. Use for: borders, shadows, small fixed sizes
  rem   — relative to root (html) font size. Use for: fonts, spacing (1rem = 16px)
  %     — percentage of parent. Use for: widths inside containers
  vh/vw — percentage of viewport. Use for: full-screen sections
  ch    — width of "0" character. Use for: max-width on text (65ch is ideal reading width)
*/
body    { font-size: 1rem; }    /* 16px */
h1      { font-size: 2.5rem; }  /* 40px — scales with browser font settings */
article { max-width: 65ch; }    /* ideal reading line length */
```

---

#### DAY 3 — CSS Variables and Typography

```css
/* ── CSS CUSTOM PROPERTIES (Variables) ── */
/* Define once in :root. Use everywhere. Change once, updates everywhere. */

:root {
  /* Colour palette */
  --colour-primary:    #2563eb;
  --colour-text:       #1f2937;
  --colour-muted:      #6b7280;
  --colour-bg:         #f9fafb;
  --colour-surface:    #ffffff;
  --colour-border:     #e5e7eb;

  /* Spacing scale */
  --space-xs:   4px;
  --space-sm:   8px;
  --space-md:  16px;
  --space-lg:  24px;
  --space-xl:  48px;

  /* Typography */
  --font-body:    'Inter', system-ui, sans-serif;
  --font-heading: 'Sora', Georgia, serif;

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.1);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.1);
}

/* Using variables */
.btn-primary {
  background-color: var(--colour-primary);
  color: white;
  padding: var(--space-sm) var(--space-lg);
}

/* ── TYPOGRAPHY ── */
/* Import Google Fonts — add at the VERY TOP of your CSS */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Sora:wght@700;800&display=swap');

body {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.6;    /* unitless — 1.6x the font size, best for readability */
  color: var(--colour-text);
}

h1, h2, h3 {
  font-family: var(--font-heading);
  line-height: 1.2;    /* tighter for headings */
}

p { max-width: 65ch; } /* 65ch = ideal line length for comfortable reading */
```

**✅ Day 3 Task**
```
1. Add the full :root block to your styles.css
2. Import 2 Google Fonts: one for headings (Sora), one for body (Inter)
3. Replace every hardcoded colour in your CSS with a variable
4. After step 3: change --colour-primary to a different colour in :root
   Watch EVERY element update instantly. That is the power of variables.
⚠️ AVOID: Never hardcode the same colour twice in CSS.
⚠️ AVOID: Never use more than 2 font families on one page.
```

---

#### DAY 4 — Flexbox: One-Dimensional Layout

```css
/*
  Flexbox has two actors:
  1. The CONTAINER (parent) — gets display: flex
  2. The ITEMS (children) — controlled by container properties
*/

.navbar {
  display: flex;
  flex-direction: row;          /* row (default) | column */
  justify-content: space-between; /* aligns along the MAIN axis */
  /* flex-start | flex-end | center | space-between | space-around */
  align-items: center;          /* aligns along the CROSS axis */
  /* stretch | flex-start | flex-end | center | baseline */
  gap: 16px;                    /* space between items */
  flex-wrap: wrap;              /* allow wrapping to next line */
}

/* ── THE MOST USEFUL TRICK: PERFECT CENTRING ── */
.full-page-centre {
  display: flex;
  justify-content: center;   /* centre horizontally */
  align-items: center;       /* centre vertically */
  min-height: 100vh;         /* full screen */
}

/* ── REAL-WORLD PATTERNS ── */

/* Pattern 1: Navbar with logo left, links right */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--space-xl);
  height: 64px;
}
.nav-logo { margin-right: auto; } /* pushes everything after it to the right */

/* Pattern 2: Card row that wraps on mobile */
.card-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-lg);
}
.card {
  flex: 1;               /* grow to fill available space */
  min-width: 250px;      /* but never smaller than this */
}
```

> 💡 **Play Flexbox Froggy at flexboxfroggy.com — complete all 24 levels. It teaches you more effectively than reading.**

---

#### DAY 5 — CSS Grid: Two-Dimensional Layout + Tasks 4–6

```css
/*
  Grid = two-dimensional layout (rows AND columns simultaneously).
  Use Grid for: page layouts, image galleries, dashboard panels.
  Use Flexbox for: navbars, button groups, card rows, any 1D alignment.
*/

/* ── GRID BASICS ── */
.layout {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;  /* 3 equal columns */
  grid-template-columns: 250px 1fr;    /* sidebar + content */
  grid-template-columns: repeat(3, 1fr); /* same as 1fr 1fr 1fr */
  grid-template-rows: auto 1fr auto;   /* header, content, footer */
  gap: 24px;                           /* space between all cells */
}

/* ── AUTO-FIT with MINMAX — the magic pattern for responsive grids ── */
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-lg);
  /* This creates as many columns as fit, each minimum 280px wide.
     On a desktop: shows 3 cards per row.
     On a tablet:  shows 2 cards per row.
     On a phone:   shows 1 card per row.
     NO MEDIA QUERIES NEEDED for this responsive behavior. */
}

/* ── PLACING ITEMS IN THE GRID ── */
.hero {
  grid-column: 1 / -1; /* spans from first line to last line = full width */
}
.sidebar {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
}

/* ── NAMED AREAS — the most readable way ── */
.page {
  display: grid;
  grid-template-areas:
    "header  header"
    "sidebar content"
    "footer  footer";
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
.site-header  { grid-area: header; }
.site-sidebar { grid-area: sidebar; }
.site-content { grid-area: content; }
.site-footer  { grid-area: footer; }
```

> 💡 **Play CSS Grid Garden at cssgridgarden.com — complete all 28 levels.**

---

### ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
### WEEK 5 — Responsive Design & Media Queries
### ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

| Day | Topics to Learn | Task / Deliverable |
|-----|----------------|-------------------|
| **Day 1** | Media queries · Mobile-first approach · Responsive units | — |
| **Day 2** | Responsive images · Fluid typography with clamp() | — |
| **Day 3** | Positioning: static, relative, absolute, fixed, sticky | — |
| **Day 4** | Transitions and animations · Hover effects · @keyframes | — |
| **Day 5** | TASK 5: Responsive Landing Page | **Task 5: Landing Page** |

---

#### DAY 6 — Media Queries: Mobile-First Design

```css
/* ── MOBILE-FIRST: start with mobile styles, add desktop exceptions ── */
/* This is the professional approach — most users are on phones */

/* Mobile styles (no query needed — these are the defaults) */
.nav-links { display: none; }          /* hide desktop nav on mobile */
.hero { flex-direction: column; }      /* stack vertically on mobile */
h1 { font-size: 1.75rem; }

/* Tablet: screens 768px and wider */
@media (min-width: 768px) {
  .hero { flex-direction: row; }       /* side by side on tablet */
  h1 { font-size: 2rem; }
}

/* Desktop: screens 1024px and wider */
@media (min-width: 1024px) {
  .nav-links { display: flex; }        /* show desktop nav */
  h1 { font-size: 2.5rem; }
  .sidebar { display: block; }
}

/* ── STANDARD BREAKPOINTS ── */
/* 375px  — small phones (iPhone SE) */
/* 768px  — tablets (iPad) */
/* 1024px — small laptops */
/* 1280px — standard desktop */

/* ── FLUID TYPOGRAPHY with clamp() ── */
/* clamp(minimum, preferred, maximum) */
h1 { font-size: clamp(1.5rem, 5vw, 3rem); }
/* On 375px screen: ~1.5rem    (minimum)
   On 768px screen: ~2.5rem   (fluid, scaling with viewport)
   On 1440px screen: 3rem     (capped at maximum)
   NO MEDIA QUERIES NEEDED — scales automatically */
```

---

#### DAY 7 — Transitions, Animations, and Hover Effects

```css
/* ── TRANSITIONS — smooth state changes ── */
.btn {
  background-color: var(--colour-primary);
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
  /* "ease" = slow start, fast middle, slow end (most natural) */
}
.btn:hover {
  background-color: #1d4ed8;   /* darker shade */
  transform: translateY(-2px); /* lift 2px up */
}
.btn:active {
  transform: translateY(0);    /* press back down on click */
}


/* ── ANIMATIONS with @keyframes ── */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.hero-text {
  animation: fadeInUp 0.6s ease forwards;
  /* forwards: element keeps the "to" state after animation ends */
}

/* ── SLIDING UNDERLINE TRICK (classic professional nav effect) ── */
.nav-link {
  position: relative;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--colour-primary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s ease;
}
.nav-link:hover::after {
  transform: scaleX(1);
}
```

**✅ Key Animation Rules**
```
⚠️ AVOID: Never animate width or height — they force layout recalculation.
   Animate transform and opacity instead — they are GPU-accelerated and smooth.
⚠️ AVOID: Never use position: absolute for layout you can achieve with Flexbox/Grid.
```

---

### WEEKS 6–7 — Tasks 5 & 6 + Phase Review

#### TASK 5 — Responsive Landing Page (Days 11–13)

**✅ Days 11–13 Task**
```
Build: landing.html + landing.css — a product landing page from scratch

Day 11 — HTML structure only (no CSS):
✅ Sticky navbar: logo + links + CTA button
✅ Hero: headline, subheadline, 2 CTA buttons, image placeholder
✅ Features: section title + 3 feature cards (icon, title, description)
✅ Testimonials: 3 quote cards
✅ Pricing: 3 plan cards (Basic, Pro, Enterprise)
✅ Footer: 4 columns of links + copyright

Day 12 — CSS layout:
✅ Navbar with Flexbox
✅ Hero with Grid (text left, image right) — 1 column on mobile
✅ Features with CSS Grid: auto-fit minmax(240px, 1fr)
✅ Pricing: 3-column Grid, middle card visually highlighted

Day 13 — Polish:
✅ All CSS variables — no hardcoded values
✅ Hover effects on all cards and buttons
✅ Responsive at 375px, 768px, 1280px
✅ Smooth scroll: html { scroll-behavior: smooth; }
✅ Deploy to GitHub Pages
```

#### TASK 6 — Styled Registration Form + Phase Review (Days 14–15)

**✅ Days 14–15 Task**
```
Day 14 — Style register.html:
✅ Inputs: consistent padding, border, border-radius
✅ Inputs on :focus: border-color changes to primary, subtle box-shadow
✅ Labels: displayed as block above inputs, font-weight: 600
✅ Error state: .input-error class with red border
✅ Buttons styled with hover + active states
✅ Responsive: single column on mobile, two columns on desktop

Day 15 — Phase Review:
✅ Open all pages on your phone — do they look correct?
✅ Run Lighthouse audit (DevTools → Lighthouse) — aim for 90+ performance
✅ Write your personal CSS cheatsheet:
   - What does box-sizing: border-box do?
   - When do you use Flexbox vs Grid?
   - What is the cascade?
   - How do CSS variables work?
```

---

## ✅ Phase 2 Completion Checklist

- [ ] Flexbox Froggy: all 24 levels complete
- [ ] Grid Garden: all 28 levels complete
- [ ] All 3 tasks complete and on GitHub
- [ ] Portfolio site is responsive at 375px, 768px, and 1280px
- [ ] All colours come from CSS variables — nothing hardcoded
- [ ] Lighthouse accessibility score is above 85
- [ ] Can explain the cascade, specificity, and box model without Googling

---
---

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
---

# ╔══════════════════════════════════════╗
# ║  PHASE 4 — React.js                 ║
# ║  Modern Frontend Development        ║
# ╚══════════════════════════════════════╝

> **Duration:** 5 Weeks · 25 Days · Weeks 16–20
> **Difficulty:** ⭐⭐⭐ Intermediate
> **Prerequisite:** SOLID JavaScript — especially closures, array methods, and async/await

---

## 🧠 What Is React — Really?

React is a JavaScript library for building user interfaces. Instead of manually updating the DOM whenever data changes (what you did in Phase 3), React automatically updates the UI when your data changes.

Think of it this way: in vanilla JS you said "find this element and change its text." In React, you say "this component should display this data" — and React handles all the DOM updates for you.

---

## 🚫 What to STRICTLY AVOID in Phase 4

```
❌ DO NOT use class components — functional components + hooks only
❌ DO NOT mutate state directly: never do count = count + 1
❌ DO NOT forget the key prop on list items — causes subtle bugs
❌ DO NOT fetch data without handling loading and error states
❌ DO NOT use useEffect without understanding the dependency array
❌ DO NOT skip learning React Router — single-page navigation is non-negotiable
❌ DO NOT put API keys in React source code — they are visible to everyone
```

---

## 📅 Week-by-Week Plan

---

### ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
### WEEK 16 — JSX, Props, and State
### ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

| Day | Topics | Deliverable |
|-----|--------|-------------|
| **Day 1** | Set up Vite React app · JSX syntax · Build a WelcomeCard component with props | — |
| **Day 2** | useState · Build a counter and a controlled text input with live word count | — |
| **Day 3** | Conditional rendering · list rendering with .map() + key | — |
| **Day 4** | Props drilling · lifting state up · parent-child communication | — |
| **Day 5** | TASK 11: Component library — Button (3 variants), Badge, Card, Alert, Modal | **Task 11** |

---

#### WEEK 16 Core Concepts

```jsx
// ── JSX: JavaScript + HTML syntax ──
// JSX is NOT HTML. It compiles to React.createElement() calls.

// Component: a function that returns JSX
function WelcomeCard({ name, role, avatar }) {
  // props are passed from parent as attributes
  return (
    <div className="card">  {/* className not class — JS reserved word */}
      <img src={avatar} alt={`${name}'s profile`} />
      <h2>{name}</h2>         {/* {} runs any JavaScript expression */}
      <p className={`badge ${role}`}>{role}</p>
      {role === "admin" && <button>Manage Users</button>}
      {/* && renders only if condition is true */}
    </div>
  );
}

// Using the component:
<WelcomeCard name="Rahul" role="student" avatar="/pic.jpg" />


// ── STATE with useState ──
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  // count = current value
  // setCount = function to update it
  // 0 = initial value

  function increment() {
    setCount(count + 1);  // NEVER do: count = count + 1 — that mutates state!
    // React re-renders the component automatically when setCount is called
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

// ── RENDERING LISTS ──
function SkillList({ skills }) {
  return (
    <ul>
      {skills.map(skill => (
        <li key={skill.id}>  {/* key is REQUIRED — must be unique and stable */}
          {skill.name}
        </li>
      ))}
    </ul>
  );
  // key tells React which item is which when the list changes
  // Without key, React cannot efficiently update the list
}
```

---

### ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
### WEEK 17 — useEffect + API Integration
### ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

| Day | Topics | Deliverable |
|-----|--------|-------------|
| **Day 6** | useEffect: what it is, when it runs, the 3 forms of dependency array | — |
| **Day 7** | Fetch data in useEffect · Display a list of posts from JSONPlaceholder API | — |
| **Day 8** | Build proper loading, error, and empty states for async data | — |
| **Day 9** | useRef: access DOM elements, persist values without re-render | — |
| **Day 10** | TASK 12: GitHub Profile Viewer — search any username, display repos, loading + error states | **Task 12** |

---

#### WEEK 17 Core Concepts

```jsx
import { useState, useEffect } from "react";

function PostList() {
  const [posts, setPosts]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    // useEffect runs AFTER the component renders
    // The dependency array [] means: run ONCE after the first render only

    async function fetchPosts() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []); // [] = run once on mount

  // ── THE 3 STATES YOU MUST ALWAYS HANDLE ──
  if (loading) return <p>Loading posts...</p>;
  if (error)   return <p>Error: {error}</p>;
  if (posts.length === 0) return <p>No posts found.</p>;

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

// ── THE 3 FORMS OF useEffect DEPENDENCY ARRAY ──
useEffect(() => { /* runs after EVERY render */ });               // no array
useEffect(() => { /* runs only ONCE on mount */ }, []);           // empty array
useEffect(() => { /* runs when userId changes */ }, [userId]);   // specific dependency
```

---

### WEEKS 18–19 — React Router, Context, and Custom Hooks

| Day | Topics | Deliverable |
|-----|--------|-------------|
| **Day 11** | React Router · Define Routes, use Link, navigate between 3 pages | — |
| **Day 12** | useParams, useNavigate, nested routes, 404 page | — |
| **Day 13** | useContext: create a Context, Provider, Consumer · Build a theme toggle | — |
| **Day 14** | Combine Router + Context: cart state shared across pages | — |
| **Day 15** | TASK 13: Multi-page SPA — Home + Search + Favourites + Detail pages | **Task 13** |
| **Day 16** | Custom hooks: useFetch, useLocalStorage, useDebounce | — |
| **Day 17** | useMemo and useCallback — what they do and when NOT to use them | — |
| **Day 18** | Forms in React: controlled components, validation | — |
| **Day 19** | React ecosystem: Axios vs fetch, Tailwind CSS in React | — |
| **Day 20** | TASK 14: Movie Search App — React Router + Context + OMDB API · Deployed to Vercel | **Task 14** |

---

## ✅ Phase 4 Completion Checklist

- [ ] Understand the component lifecycle and when useEffect runs
- [ ] Can build a complete multi-page SPA with React Router
- [ ] Comfortable lifting state and using Context for shared state
- [ ] Can write custom hooks and explain why they are useful
- [ ] All 4 tasks deployed to Vercel with live URLs on GitHub README

---
---

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
---

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
---

# ╔══════════════════════════════════════╗
# ║  PHASE 7 — Git & Deployment          ║
# ║  Ship Your Work to the World         ║
# ╚══════════════════════════════════════╝

> **Duration:** 2 Weeks · 10 Days · Weeks 30–31
> **Difficulty:** ⭐⭐⭐ Intermediate

---

## 🚫 What to STRICTLY AVOID in Phase 7

```
❌ DO NOT commit directly to main — always use feature branches
❌ DO NOT commit .env files — add to .gitignore before first commit
❌ DO NOT use vague commit messages like "fix", "update", or "changes"
❌ DO NOT force-push to main if others might be working on the same branch
❌ DO NOT deploy without testing locally first
```

---

## 📅 Week-by-Week Plan

---

### WEEK 30 — Git Professionally

| Day | Topics | Deliverable |
|-----|--------|-------------|
| **Day 1** | Git init, add, commit, push · The working tree, staging area, repository | — |
| **Day 2** | Branching: git branch, checkout -b, merge · fast-forward vs merge commit | — |
| **Day 3** | Deliberately create a merge conflict · Resolve it · Push the resolution | — |
| **Day 4** | GitHub: pull requests, code review comments, issues, .gitignore | — |
| **Day 5** | TASK 21: Write a commit message guide for yourself · Create a .gitignore template | **Task 21** |

---

#### Core Git Concepts

```bash
# ── DAILY GIT WORKFLOW ──
git status                          # always start here
git add .                           # stage all changed files
git add src/components/Header.jsx   # stage specific file
git commit -m "feat: add sticky navbar with mobile hamburger menu"
git push origin main

# ── BRANCHING: never work directly on main ──
git checkout -b feature/user-authentication  # create and switch to new branch
# ... make changes ...
git add .
git commit -m "feat: add JWT authentication middleware"
git push origin feature/user-authentication

# On GitHub: create a Pull Request to merge into main
# After merge: delete the feature branch

# ── MERGE CONFLICTS ──
# When Git cannot auto-merge:
# <<<<<<< HEAD
# your version of the code
# =======
# their version of the code
# >>>>>>> feature/login
# Delete the conflict markers, keep the correct code, save, then:
git add .
git commit -m "fix: resolve merge conflict in auth middleware"

# ── GOOD COMMIT MESSAGES: Conventional Commits format ──
# feat: new feature
# fix: bug fix
# docs: documentation
# style: formatting, no logic change
# refactor: code restructure, no behaviour change
# test: adding tests
# chore: build process, dependencies
#
# Examples:
# feat: add password reset email flow
# fix: prevent duplicate todo items on rapid clicks
# refactor: extract useAuth into custom hook
```

---

### WEEK 31 — Deployment

| Day | Topics | Deliverable |
|-----|--------|-------------|
| **Day 6** | Deploy React to Vercel: connect GitHub, auto-deploy on push, env variables | — |
| **Day 7** | Deploy Express to Render.com: create web service, set env vars, verify logs | — |
| **Day 8** | MongoDB Atlas: whitelist Render IP (0.0.0.0/0), test full stack connection | — |
| **Day 9** | Custom domain: point a free domain to Vercel | — |
| **Day 10** | TASK 22: Full Stack Blog App — all three deployed, tested end-to-end on mobile | **Task 22** |

---

## ✅ Phase 7 Completion Checklist

- [ ] Understand the difference between local, staging, and production environments
- [ ] Can work with branches, pull requests, and resolve merge conflicts
- [ ] React app deployed to Vercel with auto-deploy on push
- [ ] Express API deployed to Render with correct environment variables
- [ ] Full stack app tested end-to-end on a real mobile device

---
---

# ╔══════════════════════════════════════╗
# ║  PHASE 8 — Full Stack Capstone       ║
# ║  Ship Something Real                 ║
# ╚══════════════════════════════════════╝

> **Duration:** 5 Weeks · 25 Days · Weeks 32–36
> **Difficulty:** ⭐⭐⭐⭐ Advanced

---

## 🚫 What to STRICTLY AVOID in Capstone

```
❌ DO NOT start coding before your schema and API routes are designed on paper
❌ DO NOT build features not in your original plan until v1 is deployed
❌ DO NOT skip error handling anywhere — users WILL trigger every error you don't handle
❌ DO NOT skip mobile testing — test on a real phone before calling it done
❌ DO NOT write a lazy README — your README is your resume entry
```

---

## 🎯 Recommended Project: Task Manager App

```
Why this project: demonstrates auth, CRUD, relationships, filters,
and real-time feedback — everything an interviewer looks for.

Week 1 (Days 1–5):   Paper design — wireframes, schema, API routes
Week 2 (Days 6–10):  Build and deploy Express API — all endpoints in Postman
Week 3 (Days 11–15): Connect MongoDB — data persists
Week 4 (Days 16–20): Build React frontend — all pages, real API calls
Week 5 (Days 21–25): Responsive polish, error states, deploy, README, demo video

Minimum features for v1:
✅ Register, login, logout (JWT)
✅ Create, read, update, delete tasks
✅ Filter tasks by status and priority
✅ Responsive on mobile and desktop
✅ Live deployed URL
✅ GitHub README with screenshots and setup instructions
```

---

## 📅 Week-by-Week Plan

---

### WEEK 32 — Design Before Code

| Day | Topics | Deliverable |
|-----|--------|-------------|
| **Day 1** | Draw wireframes on paper for every page of your app | — |
| **Day 2** | Design your database schema — draw the collections/tables and their relationships | — |
| **Day 3** | List every API endpoint: method, path, auth required, request body, response format | — |
| **Day 4** | Set up the project: frontend repo, backend repo, both connected to GitHub | — |
| **Day 5** | Write the README now (update as you build) — architecture diagram included | — |

---

### WEEKS 33–34 — Build Backend + Connect Database

| Day | Topics | Deliverable |
|-----|--------|-------------|
| **Day 6–8** | Build all Express routes · Test every endpoint in Postman | — |
| **Day 9** | Add JWT authentication · Protect all routes that require login | — |
| **Day 10** | Deploy backend to Render · Test live API in Postman | Deployed API |
| **Day 11–13** | Connect MongoDB · Replace all in-memory data with Mongoose | — |
| **Day 14** | Add input validation and proper error responses on all routes | — |
| **Day 15** | Test every endpoint with valid AND invalid data · Fix every bug | — |

---

### WEEK 35 — Build React Frontend

| Day | Topics | Deliverable |
|-----|--------|-------------|
| **Day 16** | Set up Vite React · Configure React Router · All pages with placeholder content | — |
| **Day 17** | Auth pages: Register and Login forms · Store JWT on success | — |
| **Day 18** | Protected routes: redirect to /login if not authenticated | — |
| **Day 19** | Main feature pages: connect to real API endpoints · Loading + error states | — |
| **Day 20** | Deploy frontend to Vercel · Test full stack connection in production | Deployed frontend |

---

### WEEK 35 — Polish, Performance, Security

| Day | Topics | Deliverable |
|-----|--------|-------------|
| **Day 21** | Empty states, error boundaries, network error handling | — |
| **Day 22** | Performance audit: Lighthouse score, identify images to optimise · Code splitting | — |
| **Day 23** | Security review: CORS origins, no secrets in frontend · Input sanitisation for XSS | — |
| **Day 24** | Cross-browser test: Chrome, Firefox, Safari · Accessibility audit with axe DevTools | — |
| **Day 25** | README: screenshots, tech stack, live URL, setup instructions · Record 3-minute demo video | — |

---

### WEEK 36 — Final Demo and Wrap-Up

| Day | Topics | Deliverable |
|-----|--------|-------------|
| **Day 1** | Final QA: go through every feature as a new user · Fix critical bugs | — |
| **Day 2** | Portfolio preparation: add project to LinkedIn · Write 200-word project description for resume | — |
| **Day 3** | Capstone presentation: 10-minute demo to trainer and other interns | — |
| **Day 4** | Internship retrospective: what went well, what was hard, what to study next | — |
| **Day 5** | 🎉 You are now a Full Stack Developer. Keep building — one side project per month | — |

---

## ✅ Phase 8 Completion Checklist

- [ ] Full stack app is live with a public URL
- [ ] Auth flow works: register → login → protected routes → logout
- [ ] All CRUD features work correctly with error handling
- [ ] Responsive on real mobile device (tested, not just DevTools)
- [ ] GitHub README has screenshots, tech stack, and live URL
- [ ] 3-minute demo video recorded and linked in README

---
---

# 💡 Internship Mindset

## How to Learn Every Day

```
Step 1: Read the concept (15 min) — understand, don't memorise
Step 2: Type the example BY HAND (15 min) — no copy-paste
Step 3: Break it deliberately — what happens when you remove a line?
Step 4: Rebuild from scratch without looking at notes (30 min)
Step 5: Add it to your running project (30 min)
Step 6: Explain it out loud — if you cannot, you don't know it yet
```

## In Your Internship

```
✅ Ask questions after 30 minutes of being stuck — not 3 hours
✅ Read existing code before writing new code
✅ Commit after every meaningful change with a descriptive message
✅ Test your work before marking a task done
✅ Write clean code — your team reads it, not just the computer
✅ Under-promise and over-deliver on time estimates
```

## What to Study Next (After the Internship)

```
TypeScript    — adds types to JavaScript, used in almost every serious React project
Testing       — Jest, React Testing Library — employers love devs who write tests
Docker        — containerise your apps — fundamental for any backend role
System Design — how to design large-scale systems — crucial for senior interviews
```

---

## 📚 Best Free Resources

| Resource | Best For |
|----------|---------|
| developer.mozilla.org | HTML, CSS, JS reference — always trust this above all else |
| javascript.info | JavaScript — the most complete free resource online |
| theodinproject.com | Full project-based curriculum, great for structured practice |
| youtube.com/@KevinPowell | CSS — the best CSS teacher online |
| youtube.com/@TraversyMedia | Full stack tutorials — clear and practical |
| flexboxfroggy.com | Flexbox game — complete all 24 levels |
| cssgridgarden.com | Grid game — complete all 28 levels |
| leetcode.com | JavaScript problem solving — practice 3 per week |
| validator.w3.org | HTML validation — validate every page before moving on |

---

*Full Stack Developer Roadmap · BTech CSE Internship Track · 2025*
*Based on 6–8 months of structured daily learning · 2–3 hours/day · Mon–Fri*
