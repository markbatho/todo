import '../../assets/project.css';
import editIcon from '../../assets/icons/edit-project.svg';
import deleteIcon from '../../assets/icons/delete.svg';
import TodoList from './TodoList';
import EditProject from './EditProject';

const Project = (props) => {
  const project = document.createElement('div');
  const projectHeader = document.createElement('div');
  const projectActions = document.createElement('div');
  const editBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');
  const h2 = document.createElement('h2');

  const projectManager = props.projectManagerInstance;
  const projectInstance = props.project;
  const lists = props.lists;

  h2.textContent = props.project.name;

  editBtn.innerHTML = editIcon;
  deleteBtn.innerHTML = deleteIcon;

  editBtn.onclick = () => {
    const editProject = EditProject({
      h2,
      projectInstance,
      projectManager,
      lists,
    });
    h2.replaceWith(editProject);
  };
  deleteBtn.onclick = () => {};

  projectActions.classList.add('project-actions');
  projectActions.appendChild(editBtn);
  projectActions.appendChild(deleteBtn);

  projectHeader.classList.add('project-page-header');
  projectHeader.appendChild(h2);
  projectHeader.appendChild(projectActions);

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
