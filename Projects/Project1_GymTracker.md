# 🏋️ PROJECT 1 — GYM TRACKER
### A Full-Stack Fitness Social Platform
**Combines:** Progress Tracking · Community Accountability · AI-Powered Form Feedback
**Stack:** React · Node.js · Express · MongoDB · Cloudinary · Socket.io · OpenAI API

---

## 🗺️ What This Project Is

Gym Tracker is not a simple CRUD app. It is a **fitness social platform** — the intersection of a fitness journal, an Instagram-style social feed, and an AI personal trainer, all in one product.

Most fitness apps either track data (MyFitnessPal) OR provide community (Strava). This project does both — plus adds AI form feedback which no mass-market free tool currently offers well.

```
┌─────────────────────────────────────────────────────────────────┐
│                     GYM TRACKER PLATFORM                        │
│                                                                 │
│   Module 1          Module 2          Module 3       Module 4   │
│   ─────────         ─────────         ─────────      ─────────  │
│   Progress          Virtual           Form Critique  Gym Diary  │
│   Timeline          Spotter           Hub            Streak     │
│                                                                 │
│   Photo uploads     Workout           AI/Community   Quick logs │
│   + stats           check-ins         video review   + streaks  │
│                                                                 │
│   ↓                 ↓                 ↓              ↓          │
│   Cloudinary        Socket.io         OpenAI Vision  Cron Jobs  │
│   MongoDB           MongoDB           Cloudinary     MongoDB    │
└─────────────────────────────────────────────────────────────────┘
```

> 💡 **Why this is a great portfolio project:**
> It demonstrates file uploads, real-time features, third-party API integration (AI + cloud storage), authentication, social graph (follow/feed), and scheduled jobs — all in one codebase.

---

## 🏗️ Full System Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│                        FRONTEND (React)                          │
│                                                                  │
│   React Router — 4 module sections, auth pages, profile pages   │
│   Context API  — auth state, user preferences                   │
│   Axios        — all API calls with JWT interceptor             │
│   Socket.io-client — real-time likes, notifications             │
└──────────────────────────────┬───────────────────────────────────┘
                               │ HTTPS + JWT Bearer Token
┌──────────────────────────────▼───────────────────────────────────┐
│                   BACKEND (Node.js + Express)                    │
│                                                                  │
│   /api/auth        — register, login, refresh token             │
│   /api/progress    — photo uploads, timeline entries            │
│   /api/checkins    — workout posts, feed, likes                 │
│   /api/form        — video/photo uploads, AI critique           │
│   /api/diary       — quick logs, streak calculation             │
│   /api/users       — profiles, follow/unfollow, search          │
│                                                                  │
│   Middleware: auth, rate limiting, multer (file parsing),        │
│               error handler, request logger                     │
└───────────┬───────────────────────┬──────────────────────────────┘
            │                       │
┌───────────▼──────────┐  ┌────────▼────────────────────────────┐
│   MongoDB Atlas       │  │        External Services             │
│                       │  │                                     │
│   Collections:        │  │  Cloudinary — image + video store   │
│   users               │  │  OpenAI Vision API — form critique  │
│   progressEntries     │  │  Socket.io — real-time events       │
│   checkIns            │  │  node-cron — streak calculation     │
│   formCritiques       │  │  bcrypt — password hashing          │
│   diaryLogs           │  │  JWT — authentication tokens        │
│   follows             │  │  Multer — multipart file parsing    │
└───────────────────────┘  └─────────────────────────────────────┘
```

---

## 🔐 Authentication System (Shared Across All Modules)

### What to Build
- Register with email + password
- Login returns access token (15 min) + refresh token (7 days)
- Refresh token rotation — new refresh token on each use
- Protected routes via Express middleware
- Frontend: Axios request interceptor auto-attaches token; response interceptor silently refreshes on 401

### Tech Decisions
| Decision | Choice | Why |
|----------|--------|-----|
| Password storage | bcrypt (rounds: 12) | Industry standard. MD5/SHA1 are broken — never use them |
| Token type | JWT | Stateless — no server-side session storage needed |
| Token storage | httpOnly cookie (refresh) + memory (access) | Never store tokens in localStorage — XSS vulnerability |
| Auth middleware | Custom Express middleware | Attaches req.user for all protected routes |

### What to Avoid
```
❌ NEVER store passwords in plain text or with MD5/SHA1
❌ NEVER store JWT in localStorage — use httpOnly cookies for refresh tokens
❌ NEVER return the hashed password in any API response
❌ NEVER skip token expiry — access tokens must expire
❌ NEVER use the same secret for access and refresh tokens
```

### API Endpoints
```
POST   /api/auth/register       { name, email, password }
POST   /api/auth/login          { email, password }
POST   /api/auth/refresh        (reads cookie, returns new access token)
POST   /api/auth/logout         (clears httpOnly cookie)
GET    /api/auth/me             → current user profile (protected)
```

### MongoDB Schema
```js
// users collection
{
  _id:          ObjectId,
  name:         { type: String, required: true, trim: true },
  email:        { type: String, required: true, unique: true, lowercase: true },
  password:     { type: String, required: true },         // bcrypt hash
  avatar:       { type: String, default: null },          // Cloudinary URL
  bio:          { type: String, maxlength: 300 },
  following:    [{ type: ObjectId, ref: "User" }],
  followers:    [{ type: ObjectId, ref: "User" }],
  currentStreak:  { type: Number, default: 0 },
  longestStreak:  { type: Number, default: 0 },
  lastActiveDate: { type: Date },
  createdAt:    { type: Date, default: Date.now }
}
```

---

## 📸 MODULE 1 — Progress Timeline

### What It Does
A private-first photo diary where users track their physical transformation over time. Think of it as a personal Instagram that only shows you YOUR progress — with fitness metrics attached to every entry.

### Detailed Feature Breakdown

**1. Photo Upload**
- Users upload photos directly from device (mobile or desktop)
- Accepted formats: JPEG, PNG, WebP — maximum 10MB per image
- Multer handles multipart form parsing on the server
- Images are uploaded to Cloudinary — never stored on the server filesystem
- Cloudinary returns a secure URL + public_id (for deletion later)
- Images are automatically resized by Cloudinary (max 1200px width, quality auto)

**2. Entry Metadata**
- Each photo entry includes:
  - Type: Before / After / Progress (dropdown)
  - Date (defaults to today, editable)
  - Body weight (kg, optional)
  - Workout caption (optional, max 300 chars)
  - Privacy toggle: Private / Public

**3. Timeline View**
- Entries displayed in a scrollable calendar grid
- Filter by: All / Before-After / Monthly
- Before/After comparison: side-by-side viewer for two selected entries
- Stats overlay: line chart of bodyweight over time using Recharts

**4. Privacy System**
- Private entries: visible only to the logged-in user
- Public entries: visible on user's public profile
- Bulk privacy toggle: "Make all entries private" button

### Tech Stack for This Module
| Component | Technology | Reason |
|-----------|-----------|--------|
| File upload middleware | Multer | Handles multipart/form-data in Express |
| Image storage | Cloudinary | Free tier: 25GB. Auto-resize, CDN delivery, no server storage |
| Image display | Cloudinary transformation URLs | Resize on-the-fly via URL params — no server processing |
| Charts | Recharts | React-native, lightweight, perfect for line/bar charts |
| Date handling | date-fns | Lightweight alternative to moment.js (moment is deprecated) |

### What to Avoid
```
❌ NEVER store uploaded images on the server filesystem
   → Render.com and most PaaS platforms have ephemeral filesystems
   → Files will be deleted on every redeploy
   → Use Cloudinary, AWS S3, or Supabase Storage instead

❌ NEVER accept all file types without validation
   → Validate MIME type on both frontend AND backend
   → Multer fileFilter: only allow image/jpeg, image/png, image/webp

❌ NEVER resize images only on the frontend
   → Users can bypass frontend validation
   → Always enforce size limits in Multer (limits: { fileSize: 10 * 1024 * 1024 })

❌ NEVER delete Cloudinary images by URL — store the public_id
   → cloudinary.uploader.destroy(public_id) requires the ID, not the URL
   → Always save public_id to MongoDB alongside the URL

❌ NEVER load full-resolution images in the timeline grid
   → Use Cloudinary transformation URLs: /c_fill,w_400,h_400/your-image.jpg
   → This reduces bandwidth by 80%+ on thumbnails
```

### MongoDB Schema
```js
// progressEntries collection
{
  _id:       ObjectId,
  userId:    { type: ObjectId, ref: "User", required: true },
  type:      { type: String, enum: ["before", "after", "progress"], required: true },
  imageUrl:  { type: String, required: true },          // Cloudinary HTTPS URL
  publicId:  { type: String, required: true },          // Cloudinary public_id
  date:      { type: Date, required: true },
  weight:    { type: Number, min: 0, max: 500 },        // kg
  caption:   { type: String, maxlength: 300, trim: true },
  isPublic:  { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
}
// Indexes: userId + date (compound), for timeline queries
```

### API Endpoints
```
GET    /api/progress              → all entries for logged-in user (paginated)
GET    /api/progress/:userId      → public entries for a user's profile
POST   /api/progress              → create entry (multipart/form-data)
PUT    /api/progress/:id          → update caption, weight, privacy, type
DELETE /api/progress/:id          → delete entry + Cloudinary image
GET    /api/progress/stats        → bodyweight over time (chart data)
```

### React Components
```
<ProgressPage>
  ├── <UploadModal>           — drag-drop or file select, metadata form
  ├── <TimelineGrid>          — monthly calendar grid of thumbnails
  │     └── <PhotoCard>       — thumbnail, date, weight badge
  ├── <BeforeAfterViewer>     — side-by-side comparison modal
  └── <WeightChart>           — Recharts line chart of bodyweight
```

---

## 💪 MODULE 2 — The Virtual Spotter

### What It Does
A real-time social feed for workout check-ins. Users post their sessions like tweets — with exercises, sets, reps, and a gym selfie. Others can like, comment, and follow for accountability.

### Detailed Feature Breakdown

**1. Check-in Post**
- A post contains:
  - Workout type (Push / Pull / Legs / Cardio / Full Body / Custom)
  - Exercises list: add multiple exercises with sets × reps × weight
  - Energy level: 1–5 emoji scale
  - Mood: feeling great / average / struggled
  - Session caption (max 500 chars)
  - Optional: gym selfie (same Cloudinary pipeline as Module 1)

**2. Social Feed**
- Home feed: posts from people the user follows, sorted by newest first
- Discover feed: public posts from all users, sorted by engagement
- Infinite scroll with cursor-based pagination (not page-based — stable under inserts)

**3. Real-Time Likes (Socket.io)**
- When User A likes a post, User B sees the like count update instantly without refreshing
- Socket.io room per post: users viewing a post join that room
- Server emits `post:liked` event → client updates like count in React state

**4. Follow System**
- Follow / Unfollow users
- Following feed updates immediately
- Followers / Following count on profile
- "Users you may know" suggestions (users followed by people you follow — 2 degrees)

### Tech Stack for This Module
| Component | Technology | Reason |
|-----------|-----------|--------|
| Real-time likes | Socket.io | WebSocket abstraction. Auto-fallback to polling. Better DX than raw WebSocket |
| Feed pagination | Cursor-based (MongoDB `_id`) | Page-based breaks when new posts are inserted. Cursor stays stable. |
| Feed algorithm | Chronological first | Start simple — algorithmic ranking is a Phase 2 feature |
| Follow storage | Embedded array in User doc | Fast for typical follow counts (<5000). Switch to separate collection at scale. |

### What to Avoid
```
❌ NEVER use page-based pagination for a social feed
   → If 5 new posts are inserted between page 1 and page 2 requests,
     the user sees duplicates on page 2
   → Use cursor: fetch posts where _id < lastSeenId, limit 20

❌ NEVER emit Socket.io events directly from API routes to all connected clients
   → Only emit to users who are relevant (post author, users viewing the post)
   → Use rooms: socket.to(`post:${postId}`).emit(...)

❌ NEVER update the follow array from both sides without a transaction
   → Inconsistent state: User A follows B, but B's followers list did not update
   → Use a separate `follows` collection OR update both in a single MongoDB session

❌ NEVER allow a user to like their own post
   → Check: if (post.userId.equals(req.user.id)) return 403

❌ NEVER store exercise data as a plain string
   → Store as a structured array: [{ name, sets, reps, weight }]
   → This makes stats and analysis possible later
```

### MongoDB Schema
```js
// checkIns collection
{
  _id:          ObjectId,
  userId:       { type: ObjectId, ref: "User", required: true },
  workoutType:  { type: String, enum: ["push","pull","legs","cardio","fullbody","custom"] },
  exercises: [{
    name:   { type: String, required: true },
    sets:   { type: Number, min: 1 },
    reps:   { type: Number, min: 1 },
    weight: { type: Number, min: 0 }     // kg, 0 = bodyweight
  }],
  energyLevel: { type: Number, min: 1, max: 5 },
  mood:        { type: String, enum: ["great","average","struggled"] },
  caption:     { type: String, maxlength: 500, trim: true },
  imageUrl:    { type: String, default: null },
  publicId:    { type: String, default: null },
  likes:       [{ type: ObjectId, ref: "User" }],    // array of user IDs
  isPublic:    { type: Boolean, default: true },
  createdAt:   { type: Date, default: Date.now }
}
// comments stored in separate collection (avoids unbounded array growth)

// comments collection
{
  _id:       ObjectId,
  postId:    { type: ObjectId, ref: "CheckIn", required: true },
  userId:    { type: ObjectId, ref: "User", required: true },
  text:      { type: String, maxlength: 500, required: true, trim: true },
  createdAt: { type: Date, default: Date.now }
}
```

### API Endpoints
```
GET    /api/checkins/feed           → following feed (cursor paginated)
GET    /api/checkins/discover       → public discover feed
POST   /api/checkins                → create check-in (multipart/form-data)
DELETE /api/checkins/:id            → delete own check-in
POST   /api/checkins/:id/like       → toggle like
GET    /api/checkins/:id/comments   → get comments (paginated)
POST   /api/checkins/:id/comments   → add comment
DELETE /api/checkins/:id/comments/:commentId → delete own comment
POST   /api/users/:id/follow        → follow / unfollow toggle
GET    /api/users/:id/profile       → public profile with recent check-ins
```

### Socket.io Events
```
Client emits:   join-post-room   { postId }
Server emits:   post:liked       { postId, likeCount, likedBy }
Server emits:   post:commented   { postId, comment }
Server emits:   notification:new { type: "like"|"comment"|"follow", ... }
```

---

## 🎯 MODULE 3 — Form Critique Hub

### What It Does
Users upload short videos or photos of their lifts (squat, deadlift, bench press). The AI (OpenAI Vision API) analyses the form and returns structured critique — bar path, depth, back angle, knee tracking. The community can add their own tips. Over time, users see their form improve alongside their strength.

### Detailed Feature Breakdown

**1. Upload System**
- Accepts: MP4, MOV (max 50MB), JPEG, PNG (max 10MB)
- Video stored on Cloudinary (supports video transformation and streaming)
- Users tag the lift: Squat / Deadlift / Bench / OHP / Row / Other
- Add context: weight used, set number, what they want feedback on

**2. AI Form Analysis (OpenAI Vision API)**
- For images: send directly to GPT-4o Vision
- For videos: extract a frame using FFmpeg, send the frame to Vision API
- System prompt instructs the model to return structured JSON:
  ```json
  {
    "overall_score": 7,
    "positives": ["Good depth", "Neutral spine maintained"],
    "corrections": [
      { "issue": "Knee cave on ascent", "fix": "Focus on pushing knees out over toes" }
    ],
    "safety_concern": false,
    "recommended_cues": ["Spread the floor", "Big breath before descent"]
  }
  ```
- AI critique is generated once on upload, stored in MongoDB — not regenerated on every view

**3. Community Feedback**
- Other users can comment with their own form tips
- Comments can be upvoted (helpful / not helpful)
- Experienced users can earn "Form Coach" badge (based on upvote count)

**4. Progress Tracking**
- Same lift type: compare form scores over time
- Side-by-side video viewer: old vs new form
- Strength correlation: did form improve as weight increased?

### Tech Stack for This Module
| Component | Technology | Reason |
|-----------|-----------|--------|
| Video storage | Cloudinary | Supports video, auto-generates thumbnails, streaming delivery |
| Video frame extraction | FFmpeg (fluent-ffmpeg npm) | Extract a representative frame without client-side processing |
| AI vision | OpenAI GPT-4o Vision API | Accepts images directly. Structured JSON output via response_format |
| Video player | React Player (npm) | Handles Cloudinary video URLs, controls, responsive |
| Comment ranking | MongoDB aggregation | Sort by upvote count, paginate |

### What to Avoid
```
❌ NEVER send video files directly to OpenAI — it does not accept video
   → Always extract a still frame first using FFmpeg
   → Extract the most representative frame: ffmpeg -ss 00:00:01 -frames:v 1 frame.jpg

❌ NEVER call the OpenAI API on every page load
   → Call once on upload, store the structured JSON result in MongoDB
   → Display from the database on all subsequent views

❌ NEVER accept video files without duration/size limits
   → Long videos = large Cloudinary storage costs
   → Limit: 30 seconds max, 50MB max — enforce in Multer AND on frontend

❌ NEVER trust the AI output as plain text — parse as JSON
   → Use response_format: { type: "json_object" } in the API call
   → Wrap JSON.parse in try/catch — AI can occasionally return malformed JSON

❌ NEVER expose your OpenAI API key in frontend code
   → All AI calls happen on the backend
   → Frontend never touches the OpenAI API directly

❌ NEVER show AI critique as medical or injury-prevention advice
   → Add a disclaimer: "AI analysis is for informational purposes only.
     Consult a qualified coach for injury-related concerns."
```

### MongoDB Schema
```js
// formCritiques collection
{
  _id:         ObjectId,
  userId:      { type: ObjectId, ref: "User", required: true },
  liftType:    { type: String, enum: ["squat","deadlift","bench","ohp","row","other"] },
  mediaUrl:    { type: String, required: true },          // Cloudinary URL
  mediaType:   { type: String, enum: ["image","video"] },
  publicId:    { type: String, required: true },
  thumbnailUrl:{ type: String },                          // auto-generated by Cloudinary
  weight:      { type: Number },                          // kg used in the lift
  context:     { type: String, maxlength: 300 },          // what user wants feedback on
  aiCritique: {
    overallScore:      { type: Number, min: 1, max: 10 },
    positives:         [String],
    corrections:       [{ issue: String, fix: String }],
    safetyConcern:     { type: Boolean },
    recommendedCues:   [String],
    generatedAt:       { type: Date }
  },
  isPublic:    { type: Boolean, default: true },
  createdAt:   { type: Date, default: Date.now }
}
```

### API Endpoints
```
POST   /api/form                    → upload media, trigger AI analysis
GET    /api/form/mine               → all form uploads by current user
GET    /api/form/:id                → single critique with comments
PUT    /api/form/:id/privacy        → toggle public/private
DELETE /api/form/:id                → delete + Cloudinary cleanup
GET    /api/form/compare/:liftType  → score history for a specific lift (chart data)
POST   /api/form/:id/comments       → add community form tip
POST   /api/form/:id/comments/:cid/upvote → upvote a comment
```

### React Components
```
<FormHubPage>
  ├── <UploadLiftModal>         — file select, lift type, context, weight
  ├── <FormCritiqueCard>        — thumbnail, AI score badge, positives/corrections
  ├── <VideoPlayer>             — React Player with Cloudinary stream URL
  ├── <AICritiquePanel>         — structured display of JSON critique
  ├── <CommunityComments>       — form tips, upvote buttons
  └── <ProgressChart>           — form score over time per lift type
```

---

## 📔 MODULE 4 — Gym Diary Streak

### What It Does
The simplest module — a minimalist daily activity logger focused on consistency. Quick posts like "Leg Day Done ✅" with optional photo and energy rating. The streak system (like Duolingo) creates psychological motivation to keep showing up.

### Detailed Feature Breakdown

**1. Activity Update**
- Post a quick log: choose activity type + write a note (max 200 chars)
- Attach an optional post-workout photo (same Cloudinary pipeline)
- Rate energy level: 1–5
- Takes less than 60 seconds to post — minimal friction is intentional

**2. Streak System**
- A streak is maintained by logging at least one activity per day
- Streak is calculated by a daily cron job (00:05 AM server time)
- If no log in the last 24 hours: streak resets to 0
- If logged today: streak increments by 1
- Longest streak is tracked separately and never decremented

**3. Weekly Summary (Auto-Generated)**
- Every Sunday at 8 PM, a cron job generates each user's weekly recap:
  - Total sessions logged
  - Most common activity type
  - Average energy level
  - Days active out of 7
  - Summary stored in MongoDB for display on dashboard

**4. Streak Calendar**
- GitHub-style contribution heatmap: 52 weeks × 7 days
- Green shades = logged that day (darker = higher energy rating)
- Grey = no log
- Hover shows: activity type and energy

### Tech Stack for This Module
| Component | Technology | Reason |
|-----------|-----------|--------|
| Scheduled jobs | node-cron | Runs inside the Node.js process. Simple for a single-server setup. |
| Heatmap chart | react-calendar-heatmap | Open-source, GitHub-style. Works with arrays of { date, count } |
| Weekly recap generation | node-cron + MongoDB aggregation | Aggregate previous week's logs, store result as a document |

### What to Avoid
```
❌ NEVER calculate streaks on every API request
   → Expensive for users with years of data
   → Calculate nightly via cron job, store the result on the user document

❌ NEVER use setTimeout loops for recurring tasks
   → They drift over time and do not survive server restarts
   → Use node-cron with a proper cron expression: "5 0 * * *" (00:05 daily)

❌ NEVER run cron jobs on every server instance in a multi-server setup
   → If you scale to 3 servers, the streak job runs 3 times
   → For single-server (Render free tier): node-cron is fine
   → For multi-server: use an external scheduler (BullMQ, Agenda.js)

❌ NEVER allow backdating logs without a limit
   → Users could backdate 365 entries to fake a streak
   → Limit: only allow logs dated today or yesterday (grace period of 1 day)

❌ NEVER reset streak without notifying the user
   → Send a push notification or an in-app alert: "Your streak ended yesterday!"
   → This motivates re-engagement rather than silent churn
```

### MongoDB Schema
```js
// diaryLogs collection
{
  _id:          ObjectId,
  userId:       { type: ObjectId, ref: "User", required: true },
  activityType: { type: String, enum: ["gym","run","yoga","swim","cycle","rest","other"] },
  note:         { type: String, maxlength: 200, trim: true },
  imageUrl:     { type: String, default: null },
  publicId:     { type: String, default: null },
  energyLevel:  { type: Number, min: 1, max: 5 },
  logDate:      { type: Date, required: true },   // normalised to midnight UTC
  createdAt:    { type: Date, default: Date.now }
}
// Index: userId + logDate (compound, unique) — prevents duplicate daily entries

// weeklySummaries collection
{
  _id:              ObjectId,
  userId:           { type: ObjectId, ref: "User" },
  weekStartDate:    { type: Date },
  totalSessions:    { type: Number },
  mostCommonActivity:{ type: String },
  avgEnergyLevel:   { type: Number },
  daysActive:       { type: Number },
  generatedAt:      { type: Date }
}
```

### API Endpoints
```
GET    /api/diary                   → all logs for current user (last 90 days)
POST   /api/diary                   → create daily log
GET    /api/diary/streak            → current + longest streak
GET    /api/diary/heatmap           → last 52 weeks of data (for calendar heatmap)
GET    /api/diary/weekly-summary    → most recent generated weekly summary
DELETE /api/diary/:id               → delete a log entry
```

---

## 📁 Project Folder Structure

```
gym-tracker/
├── client/                         ← React frontend (Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/             ← Button, Modal, Avatar, Spinner
│   │   │   ├── progress/           ← ProgressPage, UploadModal, TimelineGrid
│   │   │   ├── spotter/            ← FeedPage, CheckInCard, CommentBox
│   │   │   ├── form/               ← FormHubPage, CritiqueCard, VideoPlayer
│   │   │   └── diary/              ← DiaryPage, StreakCard, Heatmap
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   └── SocketContext.jsx
│   │   ├── hooks/
│   │   │   ├── useFetch.js
│   │   │   ├── useInfiniteScroll.js
│   │   │   └── useSocket.js
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── Discover.jsx
│   │   │   └── Settings.jsx
│   │   └── utils/
│   │       ├── api.js              ← Axios instance with interceptors
│   │       └── cloudinary.js       ← Upload helper
│
├── server/                         ← Node.js + Express backend
│   ├── config/
│   │   ├── db.js                   ← mongoose.connect
│   │   └── cloudinary.js           ← cloudinary.config()
│   ├── middleware/
│   │   ├── auth.js                 ← JWT verify middleware
│   │   ├── upload.js               ← Multer config
│   │   ├── rateLimiter.js
│   │   └── errorHandler.js
│   ├── models/
│   │   ├── User.js
│   │   ├── ProgressEntry.js
│   │   ├── CheckIn.js
│   │   ├── Comment.js
│   │   ├── FormCritique.js
│   │   └── DiaryLog.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── progress.routes.js
│   │   ├── checkin.routes.js
│   │   ├── form.routes.js
│   │   ├── diary.routes.js
│   │   └── user.routes.js
│   ├── controllers/                ← Business logic, separate from routes
│   ├── services/
│   │   ├── openai.service.js       ← AI critique logic
│   │   ├── cloudinary.service.js   ← Upload/delete helpers
│   │   └── streak.service.js       ← Streak calculation logic
│   ├── jobs/
│   │   └── streak.cron.js          ← node-cron streak + weekly summary jobs
│   ├── socket/
│   │   └── index.js                ← Socket.io event handlers
│   └── app.js
│
├── .env.example
├── .gitignore
└── README.md
```

---

## 🚫 Global Avoid List — Entire Project

```
❌ NEVER store files on the server filesystem — always Cloudinary
❌ NEVER expose API keys (OpenAI, Cloudinary) in frontend code
❌ NEVER skip input validation — validate on both client AND server
❌ NEVER return passwords in any API response — always exclude with .select("-password")
❌ NEVER skip error handling on Cloudinary/OpenAI calls — they fail silently sometimes
❌ NEVER use MongoDB's default ObjectId toString as a user-facing ID
❌ NEVER allow unlimited file size uploads — enforce in Multer config
❌ NEVER forget to clean up Cloudinary when a DB entry is deleted
❌ NEVER commit .env to GitHub — add it to .gitignore on Day 1
❌ NEVER build the AI feature before the basic CRUD is working and tested
```

---

## 🏁 Build Order (Recommended)

```
Week 1: Authentication system — register, login, JWT, protected routes
Week 2: Module 4 (Diary) — simplest module, no external APIs, validates your schema
Week 3: Module 1 (Progress Timeline) — adds Cloudinary, file uploads
Week 4: Module 2 (Virtual Spotter) — adds social feed, Socket.io
Week 5: Module 3 (Form Critique) — adds OpenAI, most complex
Week 6: Polish — responsive design, error states, loading skeletons, deploy
```

> 💡 **Why this order:** Start with what you know (auth + CRUD), add complexity one layer at a time. Never start with the AI module — debug CRUD first.

---

## ✅ Capstone Completion Checklist

- [ ] All 4 modules working end-to-end in production
- [ ] Photos and videos stored on Cloudinary — not local filesystem
- [ ] AI form critique returns structured JSON for at least 5 different lift uploads
- [ ] Real-time likes update without page refresh (Socket.io working)
- [ ] Streak cron job runs daily and correctly increments/resets streaks
- [ ] All routes have proper auth middleware on protected endpoints
- [ ] Deployed: frontend on Vercel, backend on Render, DB on MongoDB Atlas
- [ ] README has: live URL, screenshots of all 4 modules, local setup steps

---

*Gym Tracker · Full Stack Project 1 · Fitness Social Platform*
