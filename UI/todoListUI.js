import createTodoItem from "./utils/createTodoItem.js";

const showTodoItem = (newId, newDescription) => {
    const listTodo = document.getElementById("listTodo");
  
    const todoItem = createTodoItem(newId, newDescription);
    listTodo.appendChild(todoItem);
  };

const updateCount = (elementId, count) => {
    const element = document.getElementById(elementId);
    const text = element.textContent;

    const hasNumber = /\d/.test(text);

    if (hasNumber) {
        const updatedText = text.replace(/\d+$/, count);
        element.textContent = updatedText;
    } else {
        element.textContent += ` ${count}`;
    }
};

const showNumberOfDone = (numberOfDone) => {
    updateCount("done", numberOfDone);
};

const showNumberOfNotDone = (numberOfNotDone) => {
    updateCount("notDone", numberOfNotDone);
};

const removeTodoItem = (removeId) => {
    const todoItem = document.getElementById(removeId);
    if (todoItem) {
        todoItem.remove();
    }
};

export { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem };