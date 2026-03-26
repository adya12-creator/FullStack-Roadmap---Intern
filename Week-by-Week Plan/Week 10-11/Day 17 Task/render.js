
const list = document.getElementById("todo-list");
const counter = document.getElementById("counter");

 function renderTodos() {
  list.innerHTML = "";

  let remaining = 0;
//   let hasVisibleTodos = false;

  todos.forEach((todo, index) => {

    if (currentFilter === "active" && todo.done) return;
    if (currentFilter === "completed" && !todo.done) return;

    // hasVisibleTodos = true;

    const li = document.createElement("li");

    if (todo.done) {
      li.classList.add("completed");
    } else {
      remaining++;
    }

    const span = document.createElement("span");
    span.textContent = todo.text;

    span.ondblclick = () => {
      const editInput = document.createElement("input");
      editInput.value = todo.text;

      span.parentNode.replaceChild(editInput, span);
      editInput.focus();

      editInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          const newText = editInput.value.trim();
          if (newText !== "") {
            todos[index].text = newText;
            saveTodos();
          }
          renderTodos();
        }

        if (e.key === "Escape") {
          renderTodos();
        }
      });
    };

   let tickBtn = null;

if (!todo.done) {
  tickBtn = document.createElement("button");
  tickBtn.textContent = "✔";

  tickBtn.onclick = () => {
    const confirmSave = confirm("Is your task complete?");
    if (confirmSave) {
      todos[index].done = true; 
      saveTodos();
      renderTodos();
      alert("Task Completed Successfully!");
    }
  };
}
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";

    deleteBtn.onclick = () => {
      const confirmDelete = confirm("Are you sure?");
      if (confirmDelete) {
        todos.splice(index, 1);
        saveTodos();
        renderTodos();
        alert("Task Deleted Successfully!");
      }
    };

    const leftDiv = document.createElement("div");
    if (tickBtn) leftDiv.appendChild(tickBtn);
    leftDiv.appendChild(span);

    li.appendChild(leftDiv);
    li.appendChild(deleteBtn);

    list.appendChild(li);
  });

  counter.textContent = remaining + " tasks remaining";
}