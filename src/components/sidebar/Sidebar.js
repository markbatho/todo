import '../../assets/sidebar.css';

import allImg from '../../assets/icons/inbox.svg';
import todayImg from '../../assets/icons/today.svg';
import weekImg from '../../assets/icons/week.svg';
import importantImg from '../../assets/icons/star.svg';
import projectImg from '../../assets/icons/project.svg';
import plusIcon from '../../assets/icons/plus.svg';

import SidebarList from './SidebarList';
import SidebarListItem from './SidebarListItem';
import CreateProjectListItem from './CreateProjectListItem';

const Sidebar = (props) => {
  const sidebar = document.createElement('aside');
  const sidebarBrand = document.createElement('a');
  const sidebarList = SidebarList();

  const sidebarListItemAll = SidebarListItem('All', allImg);
  const sidebarListItemToday = SidebarListItem('Today', todayImg);
  const sidebarListItemWeek = SidebarListItem('Week', weekImg);
  const sidebarListItemImportant = SidebarListItem('Important', importantImg);

  const defaultActiveListItem = sidebarListItemAll;

  defaultActiveListItem.classList.add('active');

  let active = {
    item: defaultActiveListItem,
  };

  sidebarListItemAll.onclick = () => {
    props.setProject('All', props.projectManager, props.todoManager);
    active.item.classList.remove('active');
    active.item = sidebarListItemAll;
    sidebarListItemAll.classList.add('active');
  };
  sidebarListItemToday.onclick = () => {
    props.setProject('Today', props.projectManager, props.todoManager);
    active.item.classList.remove('active');
    active.item = sidebarListItemToday;
    sidebarListItemToday.classList.add('active');
  };
  sidebarListItemWeek.onclick = () => {
    props.setProject('Week', props.projectManager, props.todoManager);
    active.item.classList.remove('active');
    active.item = sidebarListItemWeek;
    sidebarListItemWeek.classList.add('active');
  };
  sidebarListItemImportant.onclick = () => {
    props.setProject('Important', props.projectManager, props.todoManager);
    active.item.classList.remove('active');
    active.item = sidebarListItemImportant;
    sidebarListItemImportant.classList.add('active');
  };

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
      CreateProjectListItem({ ...props, projectList, active })
    );
  };

  projectListHeader.appendChild(projectListHeaderText);
  projectListHeader.appendChild(projectListHeaderCreate);

  const projectList = SidebarList();

  const projects = props.projectManager.findAll();
  projects.forEach((project) => {
    const projectListItem = SidebarListItem(project.name, projectImg);
    projectListItem.onclick = () => {
      props.setProject(
        project.name,
        props.projectManager,
        props.todoManager,
        projectListItem
      );
      active.item.classList.remove('active');
      active.item = projectListItem;
      projectListItem.classList.add('active');
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

  sidebarList.appendChild(sidebarListItemAll);
  sidebarList.appendChild(sidebarListItemToday);
  sidebarList.appendChild(sidebarListItemWeek);
  sidebarList.appendChild(sidebarListItemImportant);

  sidebar.appendChild(sidebarBrand);
  sidebar.appendChild(sidebarList);
  sidebar.appendChild(projectDiv);

  return sidebar;
};

export default Sidebar;
