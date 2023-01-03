import '../../assets/todo.css';
import Todo from './Todo';

const TodoList = (todos, todoManager) => {
  const todoList = document.createElement('ul');

  todoList.classList.add('todo-list');

  if (!todos) return todoList;

  todos.map((todo) => {
    const todoItem = Todo(todo, todoManager);
    todoList.appendChild(todoItem);
  });

  return todoList;
};

export default TodoList;
