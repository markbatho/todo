import { todoFactory, todoPriorities } from '../../todo';
import Todo from './Todo';

const CreateTodoModal = (props) => {
  const createTodoModal = document.createElement('div');
  const createTodoForm = document.createElement('form');
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
      props.project
    );

    props.todoManagerInstance.saveTodo(todo);
    props.closeModal(createTodoModal);
    props.todoList.appendChild(Todo(todo));
  };

  cancelBtn.onclick = () => {
    props.closeModal(createTodoModal);
  };

  const titleGroup = document.createElement('div');
  const titleLabel = document.createElement('label');
  const titleInput = document.createElement('input');

  titleLabel.textContent = 'Title';

  titleGroup.appendChild(titleLabel);
  titleGroup.appendChild(titleInput);

  const descGroup = document.createElement('div');
  const descLabel = document.createElement('label');
  const descInput = document.createElement('input');

  descLabel.textContent = 'Description';

  descGroup.appendChild(descLabel);
  descGroup.appendChild(descInput);

  const dueDateGroup = document.createElement('div');
  const dueDateLabel = document.createElement('label');
  const dueDateInput = document.createElement('input');

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

  createTodoForm.appendChild(titleGroup);
  createTodoForm.appendChild(descGroup);
  createTodoForm.appendChild(dueDateGroup);
  createTodoForm.appendChild(priorityGroup);
  createTodoForm.appendChild(confirmBtn);
  createTodoForm.appendChild(cancelBtn);

  createTodoModal.classList.add('modal');
  createTodoModal.appendChild(createTodoForm);

  return createTodoModal;
};

export default CreateTodoModal;
