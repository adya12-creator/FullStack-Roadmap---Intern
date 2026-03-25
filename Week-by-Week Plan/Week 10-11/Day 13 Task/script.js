const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");
const counter = document.getElementById("counter");

// Array to store todos
let todos = [];

// Add todo function
function addTodo() {
  const text = input.value.trim();

  if (text === "") return;

  todos.push({
    text: text,
    done: false
  });

  input.value = "";
  renderTodos();
}

// Render todos
function renderTodos() {
  list.innerHTML = "";

  let remaining = 0;

  todos.forEach((todo, index) => {
    const li = document.createElement("li");

    if (todo.done) {
      li.classList.add("completed");
    } else {
      remaining++;
    }

    // Text
    const span = document.createElement("span");
    span.textContent = todo.text;

    // Tick button (mark complete)
    const tickBtn = document.createElement("button");
    tickBtn.textContent = "✅";
    tickBtn.classList.add("tick-btn");

    tickBtn.onclick = () => {
      todos[index].done = !todos[index].done;
      renderTodos();
    };

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❎";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.onclick = () => {
      todos.splice(index, 1);
      renderTodos();
    };

    // Left side (tick + text)
    const leftDiv = document.createElement("div");
    leftDiv.appendChild(tickBtn);
    leftDiv.appendChild(span);

    li.appendChild(leftDiv);
    li.appendChild(deleteBtn);

    list.appendChild(li);
  });

  // Update counter
  counter.textContent = remaining + " tasks remaining";
}

// Click add button
addBtn.addEventListener("click", addTodo);

// Press Enter to add
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTodo();
  }
});