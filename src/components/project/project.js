import '../../assets/project.css';

import editIcon from '../../assets/icons/edit-project.svg';
import deleteIcon from '../../assets/icons/delete.svg';

import TodoList from './todoList';
import EditProject from './EditProject';

const Project = (props) => {
  const project = document.createElement('div');
  const projectHeader = document.createElement('div');
  const projectActions = document.createElement('div');
  const editBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');
  const h2 = document.createElement('h2');

  h2.textContent = props.projectName;

  editBtn.innerHTML = editIcon;
  deleteBtn.innerHTML = deleteIcon;

  const projectManager = props.projectManagerInstance;
  editBtn.onclick = () => {
    const editProject = EditProject({ h2, projectManager });
    h2.replaceWith(editProject);
  };
  deleteBtn.onclick = () => {};

  projectActions.classList.add('project-actions');
  projectActions.appendChild(editBtn);
  projectActions.appendChild(deleteBtn);

  projectHeader.classList.add('project-page-header');
  projectHeader.appendChild(h2);

  if (
    props.projectName !== 'All' &&
    props.projectName !== 'Today' &&
    props.projectName !== 'Week' &&
    props.projectName !== 'Important'
  ) {
    projectHeader.appendChild(projectActions);
  }

  project.appendChild(projectHeader);

  let todos;
  let selectedProject;

  switch (props.projectName) {
    case 'All':
      todos = props.todoManagerInstance.findAll();
      break;
    case 'Today':
      todos = null;
      break;
    case 'Week':
      todos = null;
      break;
    case 'Important':
      todos = null;
      break;
    default:
      selectedProject = props.projectManagerInstance.findByName(
        props.projectName
      );
      todos = props.todoManagerInstance.findByProject(selectedProject);
  }

  const todoList = TodoList(todos);

  project.appendChild(todoList);

  return project;
};

export default Project;
