import '../../assets/project.css';
import createIcon from '../../assets/icons/plus.svg';
import TodoList from './TodoList';
import CreateTodoModal from './CreateTodoModal';

const Project = (props) => {
  const project = document.createElement('div');
  const projectHeader = document.createElement('div');
  const h2 = document.createElement('h2');
  const createTodo = document.createElement('button');

  h2.id = 'project-name';
  h2.textContent = props.project.name;

  createTodo.innerHTML = createIcon;

  function closeModal(modal) {
    modal.remove(modal);
  }

  createTodo.onclick = () => {
    const modal = CreateTodoModal({ ...props, closeModal, todoList });
    document.body.append(modal);
  };

  projectHeader.classList.add('project-page-header');
  projectHeader.appendChild(h2);
  projectHeader.appendChild(createTodo);

  project.appendChild(projectHeader);

  let todos;
  let selectedProject;

  selectedProject = props.projectManagerInstance.findByName(props.project.name);
  todos = props.todoManagerInstance.findByProject(selectedProject);

  const todoList = TodoList(todos);

  project.appendChild(todoList);

  return project;
};

export default Project;
