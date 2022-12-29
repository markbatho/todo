import '../../assets/sidebar.css';

import plusIcon from '../../assets/icons/plus.svg';
import projectIcon from '../../assets/icons/project.svg';

import SidebarList from './SidebarList';
import SidebarListItem from './SidebarListItem';
import CreateProjectListItem from './CreateProjectListItem';
import CollectionList from './CollectionList';

const Sidebar = (props) => {
  const sidebar = document.createElement('aside');
  const sidebarBrand = document.createElement('a');

  const lists = {
    activeItem: null,
    setActiveItem: function (item) {
      if (this.activeItem) this.activeItem.classList.remove('active');
      this.activeItem = item;
      this.activeItem.classList.add('active');
    },
  };

  const setCollection = props.setCollection;

  const collectionList = CollectionList({ lists, setCollection });

  const projectDiv = document.createElement('div');
  const projectListHeader = document.createElement('div');
  const projectListHeaderText = document.createElement('a');
  const projectListHeaderCreate = document.createElement('div');

  projectListHeaderText.textContent = 'Projects';
  projectListHeaderCreate.classList.add('create-project');
  projectListHeaderCreate.innerHTML = plusIcon;

  projectListHeaderCreate.onclick = () => {
    if (document.getElementById('create-project-form')) {
      return;
    }
    projectList.prepend(
      CreateProjectListItem({ ...props, projectList, lists })
    );
  };

  projectListHeader.appendChild(projectListHeaderText);
  projectListHeader.appendChild(projectListHeaderCreate);

  const projectList = SidebarList();

  const projects = props.projectManager.findAll();
  projects.map((project) => {
    const projectListItem = SidebarListItem(project.name, projectIcon);

    projectListItem.dataset.id = project.listItem;

    projectListItem.onclick = () => {
      lists.setActiveItem(projectListItem);
      props.setProject(project, lists, props.projectManager, props.todoManager);
    };

    projectList.appendChild(projectListItem);
  });

  projectDiv.appendChild(projectListHeader);
  projectDiv.appendChild(projectList);

  sidebar.classList.add('sidebar');
  sidebarBrand.classList.add('brand');
  projectDiv.classList.add('projects');
  projectListHeader.classList.add('project-header');

  sidebarBrand.textContent = 'Todo Application';

  sidebar.appendChild(sidebarBrand);
  sidebar.appendChild(collectionList);
  sidebar.appendChild(projectDiv);

  return sidebar;
};

export default Sidebar;
