import projectIcon from '../../assets/icons/project.svg';
import { projectFactory } from '../../project';
import SidebarListItem from './SidebarListItem';

const CreateProjectModal = (props) => {
  const createProjectModal = document.createElement('div');
  const createProjectModalForm = document.createElement('form');
  const createProjectNameInput = document.createElement('input');
  const confirmBtn = document.createElement('button');
  const cancelBtn = document.createElement('button');

  confirmBtn.textContent = 'Confirm';
  cancelBtn.textContent = 'Cancel';

  confirmBtn.onclick = (e) => {
    e.preventDefault();
    const project = projectFactory(createProjectNameInput.value);

    props.projectManager.saveProject(project);

    const sidebarListItem = SidebarListItem({
      project,
      projectIcon,
      ...props,
    });

    sidebarListItem.onclick = () => {
      props.lists.setActiveItem(sidebarListItem);
      props.setProject(
        project,
        props.lists,
        props.projectManager,
        props.todoManager
      );
    };

    props.setProject(
      project,
      props.lists,
      props.projectManager,
      props.todoManager
    );

    props.projectList.prepend(sidebarListItem);
    props.lists.setActiveItem(sidebarListItem);
    props.closeModal(createProjectModal);
  };

  cancelBtn.onclick = () => {
    props.closeModal(createProjectModal);
  };

  createProjectModal.classList.add('create-project-modal', 'modal');
  createProjectModalForm.appendChild(createProjectNameInput);
  createProjectModalForm.appendChild(confirmBtn);
  createProjectModalForm.appendChild(cancelBtn);
  createProjectModal.appendChild(createProjectModalForm);

  return createProjectModal;
};

export default CreateProjectModal;
