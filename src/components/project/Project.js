import '../../assets/project.css';
import TodoList from './TodoList';

const Project = (props) => {
  const project = document.createElement('div');
  const projectHeader = document.createElement('div');
  const h2 = document.createElement('h2');

  h2.id = 'project-name';
  h2.textContent = props.project.name;

  projectHeader.classList.add('project-page-header');
  projectHeader.appendChild(h2);

  project.appendChild(projectHeader);

  let todos;
  let selectedProject;

  selectedProject = props.projectManagerInstance.findByName(props.projectName);
  todos = props.todoManagerInstance.findByProject(selectedProject);

  const todoList = TodoList(todos);

  project.appendChild(todoList);

  return project;
};

export default Project;
