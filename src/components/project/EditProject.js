import { projectFactory } from '../../project';

const EditProject = (props) => {
  const editProject = document.createElement('div');
  const projectNameInput = document.createElement('input');
  const confirmBtn = document.createElement('button');
  const cancelBtn = document.createElement('button');

  confirmBtn.textContent = 'Confirm';
  cancelBtn.textContent = 'Cancel';

  confirmBtn.onclick = () => {
    props.projectManager.updateProject(
      props.h2.textContent,
      projectFactory(projectNameInput.value)
    );

    props.h2.textContent = projectNameInput.value;
    props.sidebarListItem.lastChild.textContent = projectNameInput.value;
    editProject.replaceWith(props.h2);
  };

  cancelBtn.onclick = () => {
    editProject.replaceWith(props.h2);
  };

  editProject.appendChild(projectNameInput);
  editProject.appendChild(confirmBtn);
  editProject.appendChild(cancelBtn);

  return editProject;
};

export default EditProject;
