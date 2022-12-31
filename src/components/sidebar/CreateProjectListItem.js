import projectIcon from '../../assets/icons/project.svg';

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
    if (props.projectManager.findByName(projectNameInput.value)) return;
    const project = projectFactory(projectNameInput.value, null);
    const sidebarListItem = SidebarListItem({ project, projectIcon, ...props });
    // const listItemId = (sidebarListItem.dataset.id = slugify(
    //   projectNameInput.value
    // ));

    props.projectManager.saveProject(project);
    props.setProject(
      project,
      props.lists,
      props.projectManager,
      props.todoManager
    );
    props.projectList.prepend(sidebarListItem);

    props.lists.setActiveItem(sidebarListItem);

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
