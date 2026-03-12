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