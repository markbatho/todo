import '../../assets/todo.css';
import openIcon from '../../assets/icons/down.svg';
import closeIcon from '../../assets/icons/up.svg';
import deleteIcon from '../../assets/icons/delete.svg';
import editIcon from '../../assets/icons/pencil.svg';
import EditTodoModal from './EditTodoModal';

const Todo = (todo, todoManager) => {
  const todoItem = document.createElement('li');
  const todoHeader = document.createElement('div');
  const todoExtended = document.createElement('div');
  const todoFooter = document.createElement('div');
  const checkbox = document.createElement('input');
  const title = document.createElement('h3');
  const editBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');
  const toggleBtn = document.createElement('button');
  const descBox = document.createElement('div');
  const desc = document.createElement('p');
  const dueDate = document.createElement('p');
  const priority = document.createElement('p');

  let isOpen = false;

  toggleBtn.onclick = () => {
    if (isOpen) {
      todoExtended.style.display = 'none';
      todoFooter.style.display = 'none';
      toggleBtn.innerHTML = openIcon;
      isOpen = false;
    } else {
      todoExtended.style.display = 'flex';
      todoFooter.style.display = 'flex';
      toggleBtn.innerHTML = closeIcon;
      isOpen = true;
    }
  };

  function updateValues(newTitle, newDesc, newDueDate, newPriority) {
    title.textContent = newTitle;
    desc.textContent = newDesc;
    dueDate.textContent = newDueDate;
    priority.textContent = newPriority;
  }

  function closeModal(modal) {
    modal.remove(modal);
  }

  checkbox.onchange = () => {
    if (checkbox.checked) {
      todo.isDone = true;
      todoManager.updateTodo(todo.id, todo);
    } else {
      todo.isDone = false;
      todoManager.updateTodo(todo.id, todo);
    }
  };

  editBtn.onclick = () => {
    const modal = EditTodoModal({
      todo,
      todoManager,
      closeModal,
      updateValues,
    });
    document.body.appendChild(modal);
  };

  deleteBtn.onclick = () => {
    todoManager.deleteTodo(todo.id);
    todoItem.remove();
  };

  checkbox.type = 'checkbox';
  (checkbox.checked = todo.isDone ? true : false),
    (editBtn.innerHTML = editIcon);
  deleteBtn.innerHTML = deleteIcon;
  toggleBtn.innerHTML = openIcon;

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
  todoHeader.appendChild(editBtn);
  todoHeader.appendChild(deleteBtn);
  todoHeader.appendChild(toggleBtn);
  todoExtended.appendChild(descBox);
  todoFooter.appendChild(dueDate);
  todoFooter.appendChild(priority);
  todoItem.appendChild(todoHeader);
  todoItem.appendChild(todoExtended);
  todoItem.appendChild(todoFooter);

  return todoItem;
};

export default Todo;
