import projectImg from '../../assets/icons/project.svg';

import { projectFactory } from '../../project';
import SidebarListItem from './SidebarListItem';

const CreateProjectListItem = (props) => {
  const createProjectListItem = document.createElement('li');
  const projectNameInput = document.createElement('input');
  const btnDiv = document.createElement('div');
  const confirmBtn = document.createElement('button');
  const cancelBtn = document.createElement('button');

  confirmBtn.textContent = 'Confirm';
  cancelBtn.textContent = 'Cancel';

  confirmBtn.onclick = () => {
    if (!projectNameInput.value) return;
    const sidebarListItem = SidebarListItem(projectNameInput.value, projectImg);
    props.projectManager.saveProject(projectFactory(projectNameInput.value));
    props.setProject(
      projectNameInput.value,
      props.projectManager,
      props.todoManager,
      sidebarListItem
    );

    props.active.item.classList.remove('active');
    props.active.item = sidebarListItem;
    sidebarListItem.classList.add('active');
    props.projectList.prepend(sidebarListItem);

    document.getElementById('create-project-form').remove();
  };

  cancelBtn.onclick = () => {
    document.getElementById('create-project-form').remove();
  };

  btnDiv.appendChild(confirmBtn);
  btnDiv.appendChild(cancelBtn);

  createProjectListItem.id = 'create-project-form';
  createProjectListItem.appendChild(projectNameInput);
  createProjectListItem.appendChild(btnDiv);

  return createProjectListItem;
};

export default CreateProjectListItem;
