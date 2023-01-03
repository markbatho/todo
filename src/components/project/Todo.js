import '../../assets/todo.css';
import deleteIcon from '../../assets/icons/delete.svg';

const Todo = (todo, todoManager) => {
  const todoItem = document.createElement('li');
  const todoHeader = document.createElement('div');
  const todoExtended = document.createElement('div');
  const todoFooter = document.createElement('div');
  const checkbox = document.createElement('input');
  const title = document.createElement('h3');
  const deleteBtn = document.createElement('button');
  const descBox = document.createElement('div');
  const desc = document.createElement('p');
  const dueDate = document.createElement('p');
  const priority = document.createElement('p');

  let isOpen = false;

  todoItem.ondblclick = () => {
    if (isOpen) {
      todoExtended.style.display = 'none';
      todoFooter.style.display = 'none';
      isOpen = false;
    } else {
      todoExtended.style.display = 'flex';
      todoFooter.style.display = 'flex';
      isOpen = true;
    }
  }

  deleteBtn.onclick = () => {
    todoManager.deleteTodo(todo.id);
    todoItem.remove();
  };

  checkbox.type = 'checkbox';
  deleteBtn.innerHTML = deleteIcon;

  title.textContent = todo.title;
  desc.textContent = todo.desc;
  dueDate.textContent = todo.dueDate;
  priority.textContent = todo.priority.value;

  todoItem.classList.add('todo');
  todoHeader.classList.add('todo-header');
  todoExtended.classList.add('todo-extended');
  todoFooter.classList.add('todo-footer');

  descBox.appendChild(desc);
  todoHeader.appendChild(checkbox);
  todoHeader.appendChild(title);
  todoHeader.appendChild(deleteBtn);
  todoExtended.appendChild(descBox);
  todoFooter.appendChild(dueDate);
  todoFooter.appendChild(priority);
  todoItem.appendChild(todoHeader);
  todoItem.appendChild(todoExtended);
  todoItem.appendChild(todoFooter);
  
  return todoItem;
};

export default Todo;
