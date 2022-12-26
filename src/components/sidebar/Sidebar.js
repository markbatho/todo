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

  sidebarListItemAll.onclick = () =>
    props.setProject('All', props.projectManager, props.todoManager);
  sidebarListItemToday.onclick = () =>
    props.setProject('Today', props.projectManager, props.todoManager);
  sidebarListItemWeek.onclick = () =>
    props.setProject('Week', props.projectManager, props.todoManager);
  sidebarListItemImportant.onclick = () =>
    props.setProject('Important', props.projectManager, props.todoManager);

  const projectDiv = document.createElement('div');
  const projectListHeader = document.createElement('a');
  const projectList = SidebarList();

  const projects = props.projectManager.findAll();
  projects.forEach((project) => {
    const projectListItem = SidebarListItem(project.name, projectImg);
    projectListItem.onclick = () =>
      props.setProject(project.name, props.projectManager, props.todoManager);
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
