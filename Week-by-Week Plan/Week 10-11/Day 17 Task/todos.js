 let todos = JSON.parse(localStorage.getItem("todos")) || [];

 let currentFilter = "all";

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}