import editIcon from '../../assets/icons/edit-project.svg';
import deleteIcon from '../../assets/icons/delete.svg';
import EditProjectModal from './EditProjectModal';
import DeleteProjectModal from './DeleteProjectModel';

const SidebarListItem = (props) => {
  const sidebarListItemNode = document.createElement('li');
  const listItemTitle = document.createElement('div');
  const a = document.createElement('a');
  const actions = document.createElement('div');
  const editBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');

  function closeModal(modal) {
    modal.remove(modal);
  }

  editBtn.onclick = () => {
    const modal = EditProjectModal({ ...props, closeModal });
    document.body.appendChild(modal);
  };

  deleteBtn.onclick = () => {
    const modal = DeleteProjectModal({
      ...props,
      closeModal,
      sidebarListItemNode,
    });
    document.body.appendChild(modal);
  };

  editBtn.innerHTML = editIcon;
  deleteBtn.innerHTML = deleteIcon;

  a.textContent = props.project.name;

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);
  actions.classList.add('actions');
  listItemTitle.innerHTML = props.projectIcon;
  listItemTitle.appendChild(a);
  listItemTitle.classList.add('list-item-title');
  sidebarListItemNode.appendChild(listItemTitle);
  sidebarListItemNode.appendChild(actions);
  sidebarListItemNode.classList.add('sidebar-list-item');

  return sidebarListItemNode;
};

export default SidebarListItem;
