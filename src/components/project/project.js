const Project = (props) => {
  const project = document.createElement('div');
  const h2 = document.createElement('h2');

  h2.textContent = props.projectName;
  project.appendChild(h2);

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

  return project;
};

export default Project;
