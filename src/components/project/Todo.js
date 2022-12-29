const Todo = (todo) => {
  const todoItem = document.createElement('li');
  todoItem.textContent = todo.title;
  return todoItem;
};

export default Todo;
