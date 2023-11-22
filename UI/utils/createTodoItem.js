const createTodoItem = (newId, newDescription) => {
    const todoItem = document.createElement("div");
    todoItem.setAttribute("class", "todoItem");
    todoItem.setAttribute("id", newId);

    const todoDescription = document.createElement("p");
    todoDescription.innerHTML = newDescription;

    const todoDoneButton = document.createElement("button");
    todoDoneButton.innerHTML = "Not done";

    const todoRemoveButton = document.createElement("button");
    todoRemoveButton.innerHTML = "Remove";

    todoItem.appendChild(todoDescription);
    todoItem.appendChild(todoDoneButton);
    todoItem.appendChild(todoRemoveButton);

    return todoItem;
};

export default createTodoItem;