import '../../assets/sidebar.css';

import allImg from '../../assets/icons/inbox.svg';
import todayImg from '../../assets/icons/today.svg';
import weekImg from '../../assets/icons/week.svg';
import importantImg from '../../assets/icons/star.svg';
import projectImg from '../../assets/icons/project.svg';

import SidebarList from './SidebarList';
import SidebarListItem from './SidebarListItem';

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

  let activeListItem = defaultActiveListItem;

  sidebarListItemAll.onclick = () => {
    props.setProject('All', props.projectManager, props.todoManager);
    activeListItem.classList.remove('active');
    activeListItem = sidebarListItemAll;
    sidebarListItemAll.classList.add('active');
  };
  sidebarListItemToday.onclick = () => {
    props.setProject('Today', props.projectManager, props.todoManager);
    activeListItem.classList.remove('active');
    activeListItem = sidebarListItemToday;
    sidebarListItemToday.classList.add('active');
  };
  sidebarListItemWeek.onclick = () => {
    props.setProject('Week', props.projectManager, props.todoManager);
    activeListItem.classList.remove('active');
    activeListItem = sidebarListItemWeek;
    sidebarListItemWeek.classList.add('active');
  };
  sidebarListItemImportant.onclick = () => {
    props.setProject('Important', props.projectManager, props.todoManager);
    activeListItem.classList.remove('active');
    activeListItem = sidebarListItemImportant;
    sidebarListItemImportant.classList.add('active');
  };

  const projectDiv = document.createElement('div');
  const projectListHeader = document.createElement('a');
  const projectList = SidebarList();

  const projects = props.projectManager.findAll();
  projects.forEach((project) => {
    const projectListItem = SidebarListItem(project.name, projectImg);
    projectListItem.onclick = () => {
      props.setProject(project.name, props.projectManager, props.todoManager);
      activeListItem.classList.remove('active');
      activeListItem = projectListItem;
      projectListItem.classList.add('active');
    };
    projectList.appendChild(projectListItem);
  });

  projectListHeader.textContent = 'Projects';
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
