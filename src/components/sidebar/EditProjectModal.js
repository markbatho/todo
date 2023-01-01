import { projectFactory } from '../../project';

const EditProjectModal = (props) => {
  const editProjectModal = document.createElement('div');
  const editProjectModalForm = document.createElement('form');
  const editProjectNameInput = document.createElement('input');
  const confirmBtn = document.createElement('button');
  const cancelBtn = document.createElement('button');

  confirmBtn.textContent = 'Confirm';
  cancelBtn.textContent = 'Cancel';

  confirmBtn.onclick = () => {
    const updatedProject = projectFactory(editProjectNameInput.value);

    props.projectManager.updateProject(props.project.name, updatedProject);
    props.lists.activeItem.getElementsByTagName('a')[0].textContent =
      editProjectNameInput.value;
    Object.assign(props.project, updatedProject);
    document.getElementById('project-name').textContent =
      editProjectNameInput.value;
    props.closeModal(editProjectModal);
  };

  cancelBtn.onclick = () => {
    props.closeModal(editProjectModal);
  };

  editProjectNameInput.value = props.project.name;
  editProjectModal.classList.add('edit-project-modal', 'modal');
  editProjectModalForm.appendChild(editProjectNameInput);
  editProjectModalForm.appendChild(confirmBtn);
  editProjectModalForm.appendChild(cancelBtn);
  editProjectModal.appendChild(editProjectModalForm);

  return editProjectModal;
};

export default EditProjectModal;
