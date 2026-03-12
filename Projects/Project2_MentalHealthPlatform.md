# 🧠 PROJECT 2 — MENTAL HEALTH PLATFORM
### A Compassionate, Privacy-First Mental Health Toolkit
**Combines:** Wearable Biometrics · CBT Journaling · Peer Support · AR Grounding
**Stack:** React · React Native · Node.js · Express · MongoDB · OpenAI API · Twilio · Socket.io · WebXR

---

## ⚠️ Before You Build — Read This First

Mental health apps carry responsibilities that a gym tracker or e-commerce app do not. The people using this platform may be in vulnerable states. Every decision — from notification timing to data storage — must be made with this in mind.

```
CRITICAL PRINCIPLES FOR THIS PROJECT:

1. PRIVACY FIRST
   Users must trust that their journal entries, mood data, and biometrics
   are private. End-to-end encryption on journals is non-negotiable.

2. NEVER REPLACE PROFESSIONAL HELP
   Every module must include a persistent disclaimer:
   "This tool supports your wellbeing. It does not replace therapy
    or professional mental health treatment."

3. CRISIS SAFEGUARDS
   If a user's journal entries contain crisis language (self-harm, suicidal ideation),
   the platform must show crisis resources immediately — not silently log it.

4. OPT-IN, NEVER OPT-OUT
   Data sharing with support circles is always opt-in.
   Users can delete all data permanently at any time.
   Exported data belongs to the user.
```

---

## 🗺️ What This Project Is

A full-stack mental wellness platform with four distinct tools that work independently or together:

```
┌────────────────────────────────────────────────────────────────────┐
│                   MENTAL HEALTH PLATFORM                           │
│                                                                    │
│   Module 1            Module 2           Module 3    Module 4      │
│   ─────────           ─────────          ─────────   ─────────     │
│   Pulse               Narrative          Social       Sensory AR   │
│   Mood-Link           AI                 Safety Net               │
│                                                                    │
│   Wearable +          CBT journal        Peer check   AR grounding │
│   ML mood             AI rewrites        in + alerts  5-4-3-2-1   │
│   prediction          distortions        + help req.  technique    │
│                                                                    │
│   ↓                   ↓                  ↓            ↓            │
│   Fitbit API          OpenAI GPT-4o      Twilio SMS   WebXR /      │
│   TensorFlow.js       AES-256 encrypt    Socket.io    ARCore       │
└────────────────────────────────────────────────────────────────────┘
```

---

## 🏗️ Full System Architecture

```
┌──────────────────────────────────────────────────────────────────────┐
│                   FRONTEND (React + React Native)                    │
│                                                                      │
│   React (Web):                                                       │
│   - Dashboard, journal, mood charts, social circle                  │
│   - React Router, Axios with JWT interceptor                        │
│   - All journal text encrypted in the browser before sending        │
│                                                                      │
│   React Native (Mobile — for AR module):                            │
│   - AR grounding session (ARKit on iOS, ARCore on Android)          │
│   - Camera access, object detection overlay                         │
│   - Panic history logs synced to backend                            │
└─────────────────────────────┬────────────────────────────────────────┘
                              │ HTTPS + JWT Bearer Token
┌─────────────────────────────▼────────────────────────────────────────┐
│                     BACKEND (Node.js + Express)                      │
│                                                                      │
│   /api/auth          — register, login, refresh, delete account     │
│   /api/mood          — biometric sync, mood logs, predictions       │
│   /api/journal       — encrypted journal CRUD, CBT analysis         │
│   /api/circle        — support circle management, check-ins         │
│   /api/alerts        — automated missed check-in notifications      │
│   /api/grounding     — AR session logs, panic history               │
│                                                                      │
│   Special Middleware:                                                │
│   - Crisis keyword detector (runs before storing any journal entry) │
│   - Rate limiter (prevents API abuse)                               │
│   - Audit logger (GDPR compliance — logs who accessed what)        │
└────────────────┬──────────────────────────────┬──────────────────────┘
                 │                              │
┌────────────────▼──────────┐  ┌───────────────▼──────────────────────┐
│   MongoDB Atlas            │  │        External Services              │
│   (encrypted at rest)      │  │                                      │
│                            │  │  OpenAI GPT-4o — CBT distortion ID  │
│   Collections:             │  │  Fitbit/Garmin API — biometrics      │
│   users                    │  │  TensorFlow.js — mood prediction     │
│   moodLogs                 │  │  Twilio — SMS alerts to circle       │
│   journalEntries           │  │  Socket.io — real-time check-ins     │
│   biometricReadings        │  │  node-cron — daily reminder jobs     │
│   supportCircles           │  │  Web Speech API — breathing guide    │
│   checkIns                 │  │  ARKit / ARCore / WebXR — AR         │
│   groundingSessions        │  │                                      │
└────────────────────────────┘  └──────────────────────────────────────┘
```

---

## 🔐 Authentication and Privacy System

### Privacy-First Design Decisions
| Feature | Implementation | Why |
|---------|---------------|-----|
| Password storage | bcrypt (rounds: 14) | Higher rounds than typical — mental health data is more sensitive |
| Journal encryption | AES-256-GCM in browser before upload | Server never sees plaintext journal content |
| Encryption key | Derived from user's password using PBKDF2 | Key is never stored — only the user can decrypt their data |
| Data deletion | Full delete: all entries, biometrics, circle data | GDPR Article 17 — right to erasure |
| Token storage | httpOnly cookie only — never localStorage | Journal app = high-value XSS target |

### What to Avoid
```
❌ NEVER store journal entries as plaintext in the database
   → Use client-side encryption: CryptoJS AES.encrypt(text, derivedKey)
   → Store only the ciphertext — if the DB is breached, entries are unreadable

❌ NEVER log journal content in server console or error logs
   → Even in development, journal text should not appear in terminal output
   → Log entry IDs and metadata only

❌ NEVER share mood or biometric data with third parties
   → Not even anonymised data without explicit opt-in consent
   → GDPR and HIPAA guidance: health-adjacent data requires explicit consent

❌ NEVER auto-enroll users in the support circle feature
   → It must be explicitly set up by the user
   → Pre-set circle members must confirm before receiving any alerts
```

### Account Deletion Flow
```
DELETE /api/auth/account
→ Delete all journal entries (encrypted — still gone)
→ Delete all biometric readings
→ Delete all mood logs
→ Remove user from all support circles they are a member of
→ Notify circle members: "A member has left your circle"
→ Delete user document
→ Return: { message: "Account and all data permanently deleted" }
```

---

## 💓 MODULE 1 — Pulse Mood-Link

### What It Does
Connects to fitness wearables (Fitbit, Garmin) to collect Heart Rate Variability (HRV) and sleep quality data. A lightweight TensorFlow.js model identifies patterns and predicts low-mood days before they arrive — then offers proactive micro-interventions.

### Why HRV and Sleep?
```
HRV (Heart Rate Variability):
  High HRV = nervous system is regulated, resilient, ready
  Low HRV  = stress load is high, emotional regulation is harder
  Research shows HRV drops 1–2 days before self-reported low mood

Sleep Quality:
  Poor sleep is both a symptom AND a cause of low mood
  Sleep data: total duration, deep sleep %, REM %, restlessness score
  Consecutive poor sleep nights strongly predict mood decline

Combined signal:
  7-day rolling window of HRV + sleep → feeds the ML model
  Model outputs: "Low mood risk: High / Medium / Low" for tomorrow
```

### Detailed Feature Breakdown

**1. Wearable Integration**
- Fitbit: OAuth 2.0 → Fitbit Web API → fetch HRV and sleep data
- Garmin: Connect IQ API (similar OAuth flow)
- Data sync: daily pull via cron job (6 AM server time)
- If no wearable: users can manually log mood (1–10 scale) as a fallback

**2. Mood Prediction Model (TensorFlow.js)**
- Input features (7-day rolling window):
  - Daily HRV average
  - Sleep duration (hours)
  - Deep sleep percentage
  - REM percentage
  - Previous day's self-reported mood
- Output: probability score (0–1) for low mood tomorrow
- Threshold: above 0.65 = "Low mood risk detected"
- Model runs on the server (Node.js + TensorFlow.js)
- Initial model: pre-trained on anonymised open datasets, fine-tuned per user after 30 days of data

**3. Micro-Interventions**
- Triggered when prediction score > 0.65
- Types (user sets preference during onboarding):
  - Breathing exercise prompt (links to Module 4)
  - Journal prompt: "What is one thing you can control today?"
  - Rest reminder: "Your HRV suggests your body needs recovery today"
  - Gentle movement suggestion
- All notifications are opt-in — users can disable individually

**4. Mood Journal Correlation**
- After each day: user rates actual mood (1–10)
- System compares: predicted vs actual
- Over time: model accuracy improves per user
- Chart: predicted score vs actual mood (Recharts dual-axis line chart)

### Tech Stack for This Module
| Component | Technology | Reason |
|-----------|-----------|--------|
| Wearable OAuth | Fitbit Web API / Garmin Connect IQ | Official APIs — no scraping |
| ML model | TensorFlow.js (Node.js backend) | Runs server-side — model and data never leave the server |
| Data sync | node-cron | Daily biometric pull at 6 AM |
| Charts | Recharts | Dual-axis line charts, responsive, React-native |
| Biometric storage | MongoDB (with TTL index — auto-delete after 2 years) | Rolling window only — old data is not needed |

### What to Avoid
```
❌ NEVER store raw biometric readings forever
   → Set a MongoDB TTL index on biometricReadings: expireAfterSeconds: 63072000 (2 years)
   → Beyond 2 years, data has no predictive value but has high privacy risk

❌ NEVER present the ML prediction as a medical diagnosis
   → Always frame as: "Based on recent patterns, tomorrow may be challenging"
   → Never use: "You will feel depressed tomorrow"

❌ NEVER run TensorFlow.js model inference on the client
   → Model weights and user data must stay server-side
   → Client only sees the final risk score, not the model or raw biometrics

❌ NEVER sync biometrics more than once per day
   → Fitbit API has a rate limit and daily sync is the medically meaningful interval
   → More frequent syncing = more API cost, no additional value

❌ NEVER make micro-interventions feel like nagging
   → Maximum 1 proactive notification per day
   → User can set "quiet hours" when no notifications are sent
```

### MongoDB Schema
```js
// biometricReadings collection
{
  _id:          ObjectId,
  userId:       { type: ObjectId, ref: "User", required: true },
  source:       { type: String, enum: ["fitbit","garmin","manual"] },
  date:         { type: Date, required: true },         // normalised to midnight UTC
  hrv:          { type: Number },                        // ms — average daily HRV
  sleepDuration:{ type: Number },                        // hours
  deepSleepPct: { type: Number },                        // 0–100
  remSleepPct:  { type: Number },                        // 0–100
  restlessness: { type: Number },                        // Fitbit restlessness score
  syncedAt:     { type: Date, default: Date.now },
  expiresAt:    { type: Date }                           // set to 2 years from date, for TTL
}

// moodLogs collection
{
  _id:            ObjectId,
  userId:         { type: ObjectId, ref: "User" },
  date:           { type: Date, required: true },
  selfReportedMood: { type: Number, min: 1, max: 10 },
  predictedScore: { type: Number, min: 0, max: 1 },      // ML output
  riskLevel:      { type: String, enum: ["low","medium","high"] },
  interventionSent: { type: Boolean, default: false },
  interventionType: { type: String },
  createdAt:      { type: Date, default: Date.now }
}
```

### API Endpoints
```
GET    /api/mood/connect/fitbit          → OAuth redirect to Fitbit
GET    /api/mood/connect/fitbit/callback → handle OAuth callback, store tokens
POST   /api/mood/log                     → manual mood entry (1–10)
GET    /api/mood/prediction/today        → today's predicted risk level
GET    /api/mood/history                 → last 30 days mood + prediction (chart data)
GET    /api/mood/correlation             → predicted vs actual comparison chart
DELETE /api/mood/disconnect              → revoke wearable OAuth, delete tokens
```

---

## 📝 MODULE 2 — Narrative AI

### What It Does
A CBT (Cognitive Behavioural Therapy) powered journal. Users write freely. The AI reads the entry, identifies cognitive distortions — the thought patterns that CBT aims to correct — and suggests objective rewrites. Over time, users recognise and interrupt their own distortions.

### What Are Cognitive Distortions?
```
DISTORTION           EXAMPLE THOUGHT                 CBT REWRITE
─────────────        ───────────────────────────      ───────────────────────────────
Catastrophising      "I failed this exam.             "I failed this exam. I can
                      My life is ruined."              retake it. One exam does not
                                                       define my future."

Black-and-White      "If I'm not perfect,             "I made progress. Imperfect
Thinking             I'm a total failure."             work is still valuable work."

Mind Reading         "They didn't reply —             "I don't know why they didn't
                      they must hate me."              reply. There are many possible
                                                       reasons."

Personalisation      "The project failed              "The project failed due to
                      because of me."                  many factors I couldn't
                                                       fully control."

Overgeneralisation   "I always mess things up."       "I made a mistake in this
                                                       situation. This is not a pattern."
```

### Detailed Feature Breakdown

**1. Journal Writing Interface**
- Clean, distraction-free writing area (no notifications, no social elements)
- Auto-save every 30 seconds (encrypted locally before sync)
- Mood rating at end: 1–10 (how do you feel after writing?)
- Optional prompt to get started (AI-generated if the user clicks "Give me a prompt")

**2. AI Distortion Detection (OpenAI GPT-4o)**
- Journal text is decrypted client-side, sent to the backend, forwarded to OpenAI
- Backend never stores the plaintext — only the encrypted version in MongoDB
- System prompt instructs GPT-4o to return structured JSON:
  ```json
  {
    "distortions_found": [
      {
        "type": "catastrophising",
        "original_phrase": "My life is ruined",
        "rewrite": "This setback is difficult, and I have the ability to work through it.",
        "explanation": "This thought jumps to the worst possible outcome without evidence."
      }
    ],
    "overall_tone": "negative",
    "affirmation": "You showed courage by writing this down.",
    "follow_up_prompt": "What is one small step you could take tomorrow?"
  }
  ```
- No distortions found → affirmation only, no forced rewriting

**3. User Accepts or Edits Rewrites**
- Each identified distortion is highlighted inline in the journal text
- User sees the original + the suggested rewrite
- Actions: Accept / Edit / Dismiss
- Accepted/edited rewrites are stored alongside the original

**4. Distortion History Dashboard**
- Which distortions appear most often (bar chart)
- Trend over time: is black-and-white thinking decreasing?
- Mood before/after journaling: do people feel better after writing?
- Streak: consecutive days of journaling

### Tech Stack for This Module
| Component | Technology | Reason |
|-----------|-----------|--------|
| AI analysis | OpenAI GPT-4o | Best available model for nuanced text interpretation |
| Client-side encryption | CryptoJS (AES-256-GCM) | Encrypted before leaving the browser |
| Encryption key derivation | PBKDF2 (from user password) | Key never stored — only the user has it |
| Text highlighting | Draft.js or Tiptap | Rich text editor with inline annotation support |
| Charts | Recharts | Bar and line charts for distortion frequency |

### What to Avoid
```
❌ NEVER send journal text to OpenAI without the user's explicit consent
   → Show a clear notice on first use: "Your journal text is sent to OpenAI
     for analysis. It is not stored by OpenAI beyond the request."
   → Include a toggle: "Enable AI analysis" — off by default

❌ NEVER store plaintext journal entries on the server
   → Encrypt with CryptoJS AES on the client before the API call
   → The backend receives and stores ciphertext only
   → If the DB is leaked, entries are unreadable without the user's key

❌ NEVER present AI rewrites as the only correct interpretation
   → Always frame as suggestions: "One way to look at this might be..."
   → Always allow the user to dismiss, edit, or reject any rewrite

❌ NEVER trigger the AI analysis automatically on every keystroke
   → Expensive, invasive feeling
   → Trigger: only when user clicks "Analyse my entry" OR on save

❌ NEVER flag every journal entry as having distortions
   → If the AI finds no clear distortions, show only an affirmation
   → Constant distortion flags feel punitive, not supportive

❌ NEVER save the AI's analysis without the user seeing it first
   → Show the analysis, let the user accept/dismiss before saving to MongoDB

❌ NEVER handle crisis language with just the AI
   → Scan for crisis keywords server-side BEFORE sending to OpenAI
   → Keywords list: "end my life", "don't want to be here", "suicide", etc.
   → If triggered: show crisis resources immediately, pause AI analysis
```

### Crisis Keyword Middleware
```js
// middleware/crisisDetector.js
const CRISIS_KEYWORDS = [
  "end my life", "don't want to be here", "kill myself",
  "suicidal", "no reason to live", "better off dead"
];

function detectCrisis(text) {
  const lowerText = text.toLowerCase();
  return CRISIS_KEYWORDS.some(keyword => lowerText.includes(keyword));
}

// In journal save route — runs before OpenAI call and before DB save:
if (detectCrisis(plaintextContent)) {
  return res.status(200).json({
    crisisDetected: true,
    resources: [
      { name: "iCall India", number: "9152987821" },
      { name: "Vandrevala Foundation", number: "1860-2662-345" },
      { name: "NIMHANS Helpline", number: "080-46110007" }
    ],
    message: "You are not alone. Please reach out to one of these resources."
  });
}
```

### MongoDB Schema
```js
// journalEntries collection
{
  _id:             ObjectId,
  userId:          { type: ObjectId, ref: "User", required: true },
  encryptedContent:{ type: String, required: true },       // AES-256-GCM ciphertext
  iv:              { type: String, required: true },        // initialisation vector (not secret)
  moodBefore:      { type: Number, min: 1, max: 10 },
  moodAfter:       { type: Number, min: 1, max: 10 },
  aiAnalysis: {
    distortionsFound: [{
      type:           String,
      originalPhrase: String,
      rewrite:        String,
      explanation:    String,
      userAction:     { type: String, enum: ["accepted","edited","dismissed"] }
    }],
    overallTone:    String,
    affirmation:    String,
    followUpPrompt: String,
    analysedAt:     Date
  },
  aiEnabled:       { type: Boolean, default: true },
  wordCount:       { type: Number },
  createdAt:       { type: Date, default: Date.now }
}
```

### API Endpoints
```
GET    /api/journal                    → all entries (metadata only — no content)
GET    /api/journal/:id                → single entry (returns encrypted content)
POST   /api/journal                    → save new entry (encrypted payload)
PUT    /api/journal/:id                → update entry or distortion actions
DELETE /api/journal/:id                → delete entry
POST   /api/journal/:id/analyse        → trigger AI analysis (decrypts client-side)
GET    /api/journal/stats/distortions  → distortion frequency chart data
GET    /api/journal/stats/mood-trend   → before/after mood comparison
```

---

## 🤝 MODULE 3 — Social Safety Net

### What It Does
A peer accountability system. Users build a small, trusted support circle. If they miss check-ins for 2+ days, the circle is alerted. Circle members can respond with pre-approved help actions. It is the digital equivalent of a friend checking in on you — without requiring constant manual effort.

### Detailed Feature Breakdown

**1. Support Circle Setup**
- User invites up to 5 trusted people (friends, family) via email or app link
- Invitees must accept before joining the circle — consent is explicit
- Circle member roles: Standard (gets alerts) / Emergency Contact (gets SMS)
- User can set circle visibility: members can see mood trend, or only receive alerts

**2. Daily Check-In Prompts**
- At a user-set time (default 9 PM): a push notification / in-app prompt
- "How are you doing today?" — 1 click: Great / Okay / Struggling / Not okay
- Takes under 10 seconds — minimal friction is intentional
- Users can add a short note (max 100 chars)

**3. Automatic Alert System**
- node-cron checks daily at 10 PM: who has not checked in for 24h?
- At 48h without check-in: circle receives an in-app notification
- At 72h: Emergency Contacts receive an SMS (Twilio)
- SMS content: "Hi [Name], [User] hasn't checked in for 3 days. They've requested you check on them."
- User can manually pause alerts (e.g., while traveling with no signal)

**4. Pre-Approved Help Actions**
- During setup, user defines help actions they are comfortable requesting:
  - "Call me" — circle sees user's number
  - "Come over" — shows user's address (only to circle members)
  - "Send a meme" — prompts circle member to send something funny
  - "Just check the app" — gentle in-app nudge
- From the alert, circle members see which help actions are available
- User can request a specific help action at any time (not just alerts)

**5. Trend Dashboard (Shared)**
- User chooses what to share with their circle:
  - Check-in streak only (safe default)
  - Mood trend chart (requires opt-in)
  - Nothing except alerts
- Circle members see a simplified, non-clinical view: 7-day streak + last 3 check-in responses

### Tech Stack for This Module
| Component | Technology | Reason |
|-----------|-----------|--------|
| SMS alerts | Twilio SMS API | Reliable delivery, simple Node.js SDK, free trial tier |
| Real-time check-ins | Socket.io | Circle sees check-in update in real time when they have the app open |
| Scheduled alert check | node-cron | Daily job at 10 PM checks missed check-ins |
| Circle invitations | Email via Nodemailer or Resend | Invite link with 48h expiry token |

### What to Avoid
```
❌ NEVER send SMS alerts without the circle member having confirmed consent
   → Every circle member must explicitly accept the invitation
   → Unconfirmed invitees receive ZERO alerts or data

❌ NEVER auto-escalate alerts in a way that causes panic
   → 24h missed: in-app soft notification to circle
   → 48h missed: in-app firmer notification
   → 72h missed: SMS to emergency contacts only
   → Never send alarming language: "Your friend may be in danger"
   → Send: "[User] hasn't checked in — they may appreciate a kind message"

❌ NEVER show raw journal content to circle members
   → Circle members see ONLY check-in status and mood trend if explicitly shared
   → Journal entries are always private — even emergency contacts cannot see them

❌ NEVER allow circle members to be added without their acceptance
   → Adding someone to a circle without consent = a privacy violation

❌ NEVER send more than 1 SMS per missed check-in cycle
   → Twilio costs money. Multiple SMSs = user gets anxious. Cap at 1 SMS per 72h.

❌ NEVER make the alert system the default for new users
   → Only activate alerts after the user has set up their circle AND enabled alerts
   → New account: circle feature is visible but inactive
```

### MongoDB Schema
```js
// supportCircles collection
{
  _id:     ObjectId,
  ownerId: { type: ObjectId, ref: "User", required: true },
  members: [{
    userId:      { type: ObjectId, ref: "User" },
    email:       String,                              // for inviting non-users
    role:        { type: String, enum: ["standard","emergency"] },
    status:      { type: String, enum: ["invited","active","declined"] },
    invitedAt:   Date,
    acceptedAt:  Date,
    canSeeMoodTrend: { type: Boolean, default: false }
  }],
  alertSettings: {
    enabled:              { type: Boolean, default: false },
    triggerAfterHours:    { type: Number, default: 48 },
    smsTriggerAfterHours: { type: Number, default: 72 },
    pausedUntil:          { type: Date, default: null }
  },
  helpActions: [{ type: String }],   // user's pre-approved list
  createdAt: { type: Date, default: Date.now }
}

// checkIns collection
{
  _id:       ObjectId,
  userId:    { type: ObjectId, ref: "User", required: true },
  status:    { type: String, enum: ["great","okay","struggling","not-okay"] },
  note:      { type: String, maxlength: 100 },
  checkedAt: { type: Date, required: true }
}
```

### API Endpoints
```
GET    /api/circle                           → get current user's circle
POST   /api/circle/invite                    → invite a member by email
POST   /api/circle/accept/:token             → accept circle invitation
DELETE /api/circle/members/:memberId         → remove a member
POST   /api/circle/pause-alerts              → pause alert system (body: { until: Date })
GET    /api/checkins/today                   → today's check-in status
POST   /api/checkins                         → submit daily check-in
GET    /api/checkins/dashboard/:circleId     → circle member view (status only)
POST   /api/checkins/request-help            → request a specific help action
```

### Socket.io Events
```
Server emits to circle members:
  circle:checkin       { userId, status, timestamp }   — real-time check-in update
  circle:alert         { userId, missedHours }          — missed check-in alert
  circle:help-request  { userId, helpAction }           — help requested
```

### Twilio SMS Flow
```js
// jobs/alertChecker.cron.js — runs at 22:00 daily
cron.schedule("0 22 * * *", async () => {
  const threshold48h = new Date(Date.now() - 48 * 60 * 60 * 1000);
  const threshold72h = new Date(Date.now() - 72 * 60 * 60 * 1000);

  // Find users who haven't checked in
  const missedUsers = await User.find({ lastCheckIn: { $lt: threshold48h } });

  for (const user of missedUsers) {
    const circle = await SupportCircle.findOne({ ownerId: user._id, "alertSettings.enabled": true });
    if (!circle) continue;

    // In-app notification to all active members
    await sendInAppAlerts(circle, user, "48h");

    // SMS to emergency contacts if 72h
    if (user.lastCheckIn < threshold72h) {
      const emergencyMembers = circle.members.filter(m =>
        m.role === "emergency" && m.status === "active"
      );
      for (const member of emergencyMembers) {
        await twilio.messages.create({
          body: `Hi! ${user.name} hasn't checked in for 3 days. They may appreciate you reaching out.`,
          from: process.env.TWILIO_NUMBER,
          to: member.phoneNumber
        });
      }
    }
  }
});
```

---

## 🌿 MODULE 4 — Sensory AR

### What It Does
An Augmented Reality grounding experience for anxiety and panic episodes. The 5-4-3-2-1 technique is a clinically recognised grounding method — this module guides users through it with visual AR overlays on their phone camera, a breathing timer, and a panic log for self-awareness.

### The 5-4-3-2-1 Technique
```
STEP        INSTRUCTION           AR FEATURE
────────    ──────────────────    ──────────────────────────────────────
5 THINGS    Name 5 things         AR places bouncing highlight circles
YOU SEE     you can see           over detected objects in camera view

4 THINGS    Name 4 things         Haptic pulses on the phone screen +
YOU TOUCH   you can touch         list of surfaces nearby to tap

3 SOUNDS    Name 3 sounds         Web Speech API: user says the sounds,
YOU HEAR    you can hear          voice recognition records responses

2 THINGS    Name 2 things         Prompted list of nearby scents
YOU SMELL   you can smell         (AR cannot detect smell — text prompts only)

1 THING     Name 1 thing          Final confirmation — session completes
YOU TASTE   you can taste         Breathing timer plays for 60 seconds
```

### Detailed Feature Breakdown

**1. AR Object Detection (5 THINGS YOU SEE)**
- Opens device camera
- Overlays highlight circles on detected objects using:
  - Web: TensorFlow.js COCO-SSD model (object detection, runs in browser)
  - Native: ARKit (iOS) / ARCore (Android) through React Native
- User taps each highlighted object to "select" it
- After 5 taps: automatic advance to next step

**2. Breathing Timer Overlay**
- A circle expands and contracts on screen: 4 seconds inhale → 7 seconds hold → 8 seconds exhale (4-7-8 method)
- Runs throughout the session as a background element
- Animated with CSS/SVG — no library needed
- After grounding completion: 60-second extended breathing cool-down

**3. Voice Recognition (3 SOUNDS)**
- Web Speech API: SpeechRecognition interface
- User speaks the sounds they hear → transcribed to text
- Runs entirely in the browser — no data sent to any server for this step
- Fallback: text input if microphone permission is denied

**4. Panic Session History**
- Each completed session is logged: date, time, duration, step reached
- History chart: sessions per week (bar chart — are they decreasing over time?)
- Time-of-day heatmap: when do panic episodes happen most?
- This data helps users identify triggers by time, day, or context

### Tech Stack for This Module
| Component | Technology | Reason |
|-----------|-----------|--------|
| Web AR (object detection) | TensorFlow.js + COCO-SSD | Runs in browser, no native app needed for web users |
| Native AR | React Native + react-native-arkit / react-native-ar | Full ARKit/ARCore for production-quality AR |
| Voice recognition | Web Speech API (SpeechRecognition) | Browser-native, no API cost, no data leaves device |
| Breathing animation | CSS keyframe animation + SVG circle | No library needed — pure CSS is smooth and lightweight |
| Session history | MongoDB + Recharts | Simple CRUD + bar chart |

### What to Avoid
```
❌ NEVER make the AR experience require a long setup or permissions flow
   → Camera permission prompt → immediate AR start
   → Every second of friction during a panic attack is a second too long

❌ NEVER require internet connection for the core grounding experience
   → The breathing timer and 5-4-3-2-1 text prompts must work offline
   → Object detection (COCO-SSD) should be cached via Service Worker
   → Session log uploads when connection is restored

❌ NEVER use the Web Speech API to send audio to a server
   → SpeechRecognition is client-side only — this is correct by default
   → Do not add any server-side audio processing for the voice step

❌ NEVER show the panic history prominently at the start of the app
   → Seeing "You had 12 panic attacks this month" is not a welcoming home screen
   → History is a secondary screen accessed from settings or profile

❌ NEVER auto-play sound or music without user consent
   → Some grounding techniques use sound — always ask first
   → Some users find unexpected sounds more distressing

❌ NEVER make any step feel like a failure if the user cannot complete it
   → If they get to step 2 and close the app, that is still progress
   → No completion tracking that shows "incomplete" — only "sessions started"

❌ NEVER collect location data during a grounding session
   → Even anonymised location feels like surveillance during a vulnerable moment
```

### MongoDB Schema
```js
// groundingSessions collection
{
  _id:            ObjectId,
  userId:         { type: ObjectId, ref: "User", required: true },
  startedAt:      { type: Date, required: true },
  completedAt:    { type: Date },
  stepsReached:   { type: Number, min: 0, max: 5 },   // how far they got
  completed:      { type: Boolean, default: false },
  durationSeconds:{ type: Number },
  platform:       { type: String, enum: ["web","ios","android"] },
  timeOfDay: {
    hour:     { type: Number, min: 0, max: 23 },       // for trigger analysis
    dayOfWeek:{ type: Number, min: 0, max: 6 }
  }
  // No location, no audio, no content of what was said
}
```

### API Endpoints
```
POST   /api/grounding/session              → log completed session
GET    /api/grounding/history              → all sessions (for history chart)
GET    /api/grounding/patterns             → sessions grouped by time of day / day of week
GET    /api/grounding/stats                → total sessions, completion rate, weekly trend
```

### React Components
```
<SensoryARPage>
  ├── <PermissionGate>           — camera + microphone permission request
  ├── <BreathingOverlay>         — always-visible breathing circle (CSS animation)
  ├── <Step5See>                 — camera view + TensorFlow.js object highlights
  ├── <Step4Touch>               — haptic prompt + text list of touchable items
  ├── <Step3Hear>                — Web Speech API voice input
  ├── <Step2Smell>               — text prompt (no sensor available)
  ├── <Step1Taste>               — text prompt + session complete screen
  └── <GroundingHistory>         — bar chart + time-of-day heatmap
```

---

## 📁 Project Folder Structure

```
mental-health-platform/
├── client/                         ← React frontend (Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/             ← Button, Modal, Spinner, CrisisAlert
│   │   │   ├── mood/               ← MoodDashboard, BiometricChart, PredictionCard
│   │   │   ├── journal/            ← JournalEditor, DistortionPanel, EntryHistory
│   │   │   ├── circle/             ← CircleSetup, CheckInWidget, AlertSettings
│   │   │   └── grounding/          ← ARSession, BreathingTimer, HistoryChart
│   │   ├── crypto/
│   │   │   └── encryption.js       ← CryptoJS AES encrypt/decrypt helpers
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   └── CrisisContext.jsx   ← crisis resource modal state
│   │   ├── hooks/
│   │   │   ├── useEncryptedJournal.js
│   │   │   ├── useSpeechRecognition.js
│   │   │   └── useTensorflow.js
│   │   └── utils/
│   │       ├── api.js
│   │       └── crisisKeywords.js   ← client-side pre-check before sending
│
├── mobile/                         ← React Native (Expo) — AR module
│   ├── screens/
│   │   ├── GroundingScreen.js
│   │   └── BreathingScreen.js
│   └── components/
│       └── AROverlay.js
│
├── server/
│   ├── config/
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── crisisDetector.js       ← keyword scan before any journal save
│   │   ├── rateLimiter.js
│   │   └── errorHandler.js
│   ├── models/
│   │   ├── User.js
│   │   ├── BiometricReading.js
│   │   ├── MoodLog.js
│   │   ├── JournalEntry.js
│   │   ├── SupportCircle.js
│   │   ├── CheckIn.js
│   │   └── GroundingSession.js
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   │   ├── openai.service.js
│   │   ├── twilio.service.js
│   │   ├── fitbit.service.js
│   │   └── mlPrediction.service.js
│   ├── jobs/
│   │   ├── biometricSync.cron.js
│   │   ├── alertChecker.cron.js
│   │   └── moodPrediction.cron.js
│   └── app.js
│
├── .env.example
├── .gitignore
└── README.md
```

---

## 🚫 Global Avoid List — Entire Project

```
❌ NEVER store journal text in plaintext — encrypt client-side always
❌ NEVER show journal content to anyone except the owner
❌ NEVER present ML predictions or AI rewrites as clinical diagnosis
❌ NEVER add gamification (streaks, badges) to check-in or mood features
   → Gamification creates anxiety when "failing" — counterproductive here
❌ NEVER send crisis keyword detections to analytics or logging systems
❌ NEVER share biometric data with advertisers or third parties
❌ NEVER make account deletion difficult — it must be one confirmed click
❌ NEVER run cron jobs that contact users after 10 PM their local time
❌ NEVER commit Twilio credentials, OpenAI keys, or Fitbit secrets to GitHub
❌ NEVER make the AR module the main selling point without a web fallback
   → Not all phones support ARKit/ARCore — text-based grounding must also work
```

---

## 🏁 Build Order (Recommended)

```
Week 1: Auth + privacy infrastructure — encryption helpers, JWT, account deletion
Week 2: Module 4 (Sensory AR) — no external API, offline-first, validate React Native setup
Week 3: Module 2 (Narrative AI) — journal + encryption + OpenAI + crisis detection
Week 4: Module 3 (Social Safety Net) — circle, check-ins, Twilio
Week 5: Module 1 (Pulse Mood-Link) — wearable OAuth, TensorFlow.js model
Week 6: Polish — disclaimers on every module, responsive, full data deletion flow, deploy
```

> 💡 **Why Module 2 before Module 1:** The journal is the emotional core of the platform. Getting the encryption and AI pipeline right is the hardest engineering challenge — do it before layering in biometric data.

---

## ✅ Capstone Completion Checklist

- [ ] Journal entries are encrypted client-side — confirming server DB shows only ciphertext
- [ ] Crisis keyword detection shows resources and halts AI analysis
- [ ] Twilio SMS alert fires after 72h missed check-in in staging test
- [ ] AR grounding session runs without internet (test in airplane mode)
- [ ] All modules include the professional help disclaimer
- [ ] Account deletion removes 100% of user data — verified with a test account
- [ ] All API keys in .env, not in source code, .env in .gitignore
- [ ] Deployed: React on Vercel, Node.js on Render, MongoDB Atlas
- [ ] README includes: live URL, screenshots of all 4 modules, privacy policy, local setup

---

*Mental Health Platform · Full Stack Project 2 · Wellness Toolkit*
