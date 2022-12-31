const DeleteProjectModal = (props) => {
  const deleteProjectModal = document.createElement('div');
  const h2 = document.createElement('h2');
  const confirmBtn = document.createElement('button');
  const cancelBtn = document.createElement('button');

  h2.textContent = 'Are you sure?';

  confirmBtn.textContent = 'Confirm';
  cancelBtn.textContent = 'Cancel';

  confirmBtn.onclick = () => {
    props.projectManager.deleteProject(props.project.name);
    delete props.project;
    props.sidebarListItemNode.remove();
    props.closeModal(deleteProjectModal);
    props.setCollection('All', props.lists, props.todoManager);
  };

  cancelBtn.onclick = () => {
    props.closeModal(deleteProjectModal);
  };

  deleteProjectModal.classList.add('modal');
  deleteProjectModal.appendChild(h2);
  deleteProjectModal.appendChild(confirmBtn);
  deleteProjectModal.appendChild(cancelBtn);

  return deleteProjectModal;
};

export default DeleteProjectModal;
