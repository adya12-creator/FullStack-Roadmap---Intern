

const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");

const allBtn = document.getElementById("all-btn");
const activeBtn = document.getElementById("active-btn");
const completedBtn = document.getElementById("completed-btn");


function addTodo() {
  const text = input.value.trim();

  if (text === "" ) return;
  
  todos.push({
    text: text,
    done: false
    
  });
  

  input.value = "";
  saveTodos();
  renderTodos();
  alert("Task added successfully");
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

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});

renderTodos();