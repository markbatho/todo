import { todoFactory, todoPriorities } from '../../todo';

const EditTodoModal = (props) => {
  const editTodoModal = document.createElement('div');
  const editTodoForm = document.createElement('form');
  const confirmBtn = document.createElement('button');
  const cancelBtn = document.createElement('button');

  confirmBtn.textContent = 'Confirm';
  cancelBtn.textContent = 'Cancel';

  confirmBtn.onclick = (e) => {
    e.preventDefault();
    const todo = todoFactory(
      titleInput.value,
      descInput.value,
      new Date(),
      dueDateInput.value,
      false,
      todoPriorities[prioritySelect.value],
      props.todo.project
    );

    props.todoManager.updateTodo(props.todo.id, todo);
    Object.assign(props.todo, todo);

    props.updateValues(
      todo.title,
      todo.desc,
      todo.dueDate,
      todo.priority.value
    );

    props.closeModal(editTodoModal);
  };

  cancelBtn.onclick = () => {
    props.closeModal(editTodoModal);
  };

  const titleGroup = document.createElement('div');
  const titleLabel = document.createElement('label');
  const titleInput = document.createElement('input');
  titleInput.value = props.todo.title;

  titleLabel.textContent = 'Title';

  titleGroup.appendChild(titleLabel);
  titleGroup.appendChild(titleInput);

  const descGroup = document.createElement('div');
  const descLabel = document.createElement('label');
  const descInput = document.createElement('input');
  descInput.value = props.todo.desc;

  descLabel.textContent = 'Description';

  descGroup.appendChild(descLabel);
  descGroup.appendChild(descInput);

  const dueDateGroup = document.createElement('div');
  const dueDateLabel = document.createElement('label');
  const dueDateInput = document.createElement('input');
  dueDateInput.value = props.todo.dueDate;

  dueDateLabel.textContent = 'Due Date';
  dueDateInput.type = 'date';

  dueDateGroup.appendChild(dueDateLabel);
  dueDateGroup.appendChild(dueDateInput);

  const priorityGroup = document.createElement('div');
  const priorityLabel = document.createElement('label');
  const prioritySelect = document.createElement('select');

  Object.keys(todoPriorities).map((priority) => {
    const option = document.createElement('option');
    option.value = priority;
    option.label = priority;
    prioritySelect.appendChild(option);
  });

  priorityLabel.textContent = 'Select Priority';

  priorityGroup.appendChild(priorityLabel);
  priorityGroup.appendChild(prioritySelect);

  titleGroup.classList.add('form-group');
  descGroup.classList.add('form-group');
  dueDateGroup.classList.add('form-group');
  priorityGroup.classList.add('form-group');

  editTodoForm.appendChild(titleGroup);
  editTodoForm.appendChild(descGroup);
  editTodoForm.appendChild(dueDateGroup);
  editTodoForm.appendChild(priorityGroup);
  editTodoForm.appendChild(confirmBtn);
  editTodoForm.appendChild(cancelBtn);

  editTodoModal.classList.add('modal');
  editTodoModal.appendChild(editTodoForm);

  return editTodoModal;
};

export default EditTodoModal;
