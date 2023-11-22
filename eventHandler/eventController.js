import {
  showTodoItem,
  showNumberOfDone,
  showNumberOfNotDone,
  removeTodoItem,
} from "../UI/todoListUI.js";
import { TodoListManagement } from "../lib/todoManagement.js";

let todoListManager = null;

const loadHandler = () => {
  if (!todoListManager) {
    todoListManager = TodoListManagement();

    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      const todos = JSON.parse(storedTodos);
      todoListManager.loadTodos(todos);
    }
  }

  const todos = todoListManager.getTodos();
  todos.forEach((todo) => {
    showTodoItem(todo.id, todo.description);
    const todoItem = document.getElementById(`${todo.id}`);
    const notDoneButton = todoItem.querySelectorAll("button")[0];

    if (todo.done) {
      applyButtonStyle(notDoneButton, "green", "white");
      notDoneButton.innerHTML = "Done";
    }

    notDoneButtonHandler(todo.id);
    removeButtonHandler(todo.id);
  });

  updateSummaryTodo();

  const addBtn = document.getElementById("addBtn");
  addTodoHandler(addBtn);
};

const beforeUnloadHandler = (event) => {
  event.preventDefault();
  localStorage.setItem("todos", JSON.stringify(todoListManager.getTodos()));
  todoListManager.clearTodos();
};

const addTodoHandler = (addBtn) => {
  addBtn.addEventListener("click", () => {
    const input = document.querySelector("input");
    const description = input.value.trim();

    // get last id of todo in todoListManager
    const lastId = todoListManager.getTodos().length
      ? todoListManager.getTodos()[todoListManager.getTodos().length - 1].id
      : 0;
    const nextId = lastId + 1;
    if (description !== "") {
      const id = todoListManager.addTodo(nextId, description);
      showTodoItem(id, description);
      notDoneButtonHandler(id);
      removeButtonHandler(id);
      updateSummaryTodo();
      input.value = "";
    }
  });
};

const notDoneButtonHandler = (id) => {
  const todoItem = document.getElementById(`${id}`);
  const notDoneButton = todoItem.querySelectorAll("button")[0];

  if (notDoneButton) {
    notDoneButton.addEventListener("click", () => {
      const todo = todoListManager.findTodo(id);

      if (todo && !todo.done) {
        notDoneButton.innerHTML = "Done";
        notDoneButton.style.backgroundColor = "green";
        notDoneButton.style.color = "white";
        todoListManager.setItemToDone(id);
        updateSummaryTodo();
      }
    });
  }
};

const removeButtonHandler = (id) => {
  const removeButton = document
    .getElementById(`${id}`)
    .querySelectorAll("button")[1];
  if (removeButton) {
    removeButton.addEventListener("click", () => {
      removeTodoItem(`${id}`);
      todoListManager.removeTodo(id);
      updateSummaryTodo();
    });
  }
};

const updateSummaryTodo = () => {
  showNumberOfDone(todoListManager.getNumberOfDone());
  showNumberOfNotDone(todoListManager.getNumberOfNotDone());
};

const applyButtonStyle = (button, backgroundColor, color) => {
  if (button) {
    button.style.backgroundColor = backgroundColor;
    button.style.color = color;
  }
};

export { loadHandler, beforeUnloadHandler };
