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