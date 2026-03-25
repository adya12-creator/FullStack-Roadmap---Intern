const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");
const counter = document.getElementById("counter");

const allBtn = document.getElementById("all-btn");
const activeBtn = document.getElementById("active-btn");
const completedBtn = document.getElementById("completed-btn");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

let currentFilter = "all";

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo() {
  const text = input.value.trim();
  if (text === "") return;

  todos.push({
    text: text,
    done: false
  });

  input.value = "";
  saveTodos();
  renderTodos();
}

function renderTodos() {
  list.innerHTML = "";

  let remaining = 0;

  todos.forEach((todo, index) => {

    if (currentFilter === "active" && todo.done) return;
    if (currentFilter === "completed" && !todo.done) return;

    const li = document.createElement("li");

    if (todo.done) {
      li.classList.add("completed");
    } else {
      remaining++;
    }

    const span = document.createElement("span");
    span.textContent = todo.text;

    const tickBtn = document.createElement("button");
    tickBtn.textContent = "✔";

    tickBtn.onclick = () => {
      todos[index].done = !todos[index].done;
      saveTodos();
      renderTodos();
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";

    deleteBtn.onclick = () => {
      todos.splice(index, 1);
      saveTodos();
      renderTodos();
    };

    const leftDiv = document.createElement("div");
    leftDiv.appendChild(tickBtn);
    leftDiv.appendChild(span);

    li.appendChild(leftDiv);
    li.appendChild(deleteBtn);

    list.appendChild(li);
  });

  counter.textContent = remaining + " tasks remaining";
}

allBtn.onclick = () => {
  currentFilter = "all";
  setActive(allBtn);
  renderTodos();
};

activeBtn.onclick = () => {
  currentFilter = "active";
  setActive(activeBtn);
  renderTodos();
};

completedBtn.onclick = () => {
  currentFilter = "completed";
  setActive(completedBtn);
  renderTodos();
};

function setActive(button) {
  allBtn.classList.remove("active-filter");
  activeBtn.classList.remove("active-filter");
  completedBtn.classList.remove("active-filter");

  button.classList.add("active-filter");
}

addBtn.addEventListener("click", addTodo);

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTodo();
  }
});

renderTodos();