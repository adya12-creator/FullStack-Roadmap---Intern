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