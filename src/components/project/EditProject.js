import slugify from 'slugify';
import { projectFactory } from '../../project';

const EditProject = (props) => {
  const editProject = document.createElement('div');
  const projectNameInput = document.createElement('input');
  const confirmBtn = document.createElement('button');
  const cancelBtn = document.createElement('button');

  confirmBtn.textContent = 'Confirm';
  cancelBtn.textContent = 'Cancel';

  confirmBtn.onclick = () => {
    const updatedProject = projectFactory(
      projectNameInput.value,
      slugify(projectNameInput.value)
    );

    props.projectManager.updateProject(
      props.projectInstance.name,
      updatedProject
    );

    Object.assign(props.projectInstance, updatedProject);

    props.lists.activeItem.dataset.id = slugify(projectNameInput.value);
    props.lists.activeItem.lastChild.textContent = projectNameInput.value;

    props.h2.textContent = projectNameInput.value;
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
