import Todo from './Todo';

const TodoList = (todos) => {
  const todoList = document.createElement('ul');

  if (!todos) return todoList;

  todos.map((todo) => {
    const todoItem = Todo(todo);
    todoList.appendChild(todoItem);
  });

  return todoList;
};

export default TodoList;
