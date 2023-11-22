import Todo from "./todo.js";

const TodoListManagement = () => {
  let todos = [];

  const loadTodos = (userTodos) => {
    todos = userTodos.map((todo) => new Todo(todo.id, todo.description, todo.done));
  };

  const addTodo = (id, desc) => {
    const addedTodo = new Todo(id, desc);
    todos.push(addedTodo);
    return addedTodo.id;
  };

  const findTodo = (searchId) => todos.find((todo) => todo.id === searchId);

  const removeTodo = (removeId) => {
    const index = todos.findIndex((todo) => todo.id === removeId);
    if (index !== -1) {
      todos.splice(index, 1);
    }
  };

  const getTodos = () => todos;

  const getNumberOfDone = () => todos.filter((todo) => todo.done).length;

  const getNumberOfNotDone = () => todos.filter((todo) => !todo.done).length;

  const clearTodos = () => {
    todos = [];
  };

  const setItemToDone = (doneId) => {
    const todo = findTodo(doneId);
    if (todo) {
      todo.setDone();
    }
  };

  return {
    loadTodos,
    addTodo,
    findTodo,
    removeTodo,
    getTodos,
    getNumberOfDone,
    getNumberOfNotDone,
    clearTodos,
    setItemToDone,
  };
};

export { TodoListManagement };