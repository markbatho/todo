import '../../assets/sidebar.css';
import allImg from '../../assets/icons/inbox.svg';
import todayImg from '../../assets/icons/today.svg';
import weekImg from '../../assets/icons/week.svg';
import importantImg from '../../assets/icons/star.svg';

const Sidebar = (props) => {
  const sidebar = document.createElement('aside');
  const sidebarBrand = document.createElement('a');
  const sidebarList = document.createElement('ul');

  const sidebarListItemAll = document.createElement('li');
  const sidebarListItemAllLink = document.createElement('a');

  const sidebarListItemToday = document.createElement('li');
  const sidebarListItemTodayLink = document.createElement('a');

  const sidebarListItemWeek = document.createElement('li');
  const sidebarListItemWeekLink = document.createElement('a');

  const sidebarListItemImportant = document.createElement('li');
  const sidebarListItemImportantLink = document.createElement('a');

  const projectDiv = document.createElement('div');
  const projectListHeader = document.createElement('a');
  const projectList = document.createElement('ul');

  const projects = props.projectManager.findAll();
  projects.forEach((project) => {
    const projectListItem = document.createElement('li');
    projectListItem.textContent = project.name;
    projectList.appendChild(projectListItem);
  });

  projectListHeader.textContent = 'Projects';
  projectDiv.appendChild(projectListHeader);
  projectDiv.appendChild(projectList);

  sidebar.classList.add('sidebar');
  sidebarBrand.classList.add('brand');
  sidebarList.classList.add('sidebar-list');
  projectDiv.classList.add('projects');
  projectListHeader.classList.add('project-header');
  projectList.classList.add('sidebar-list');

  sidebarBrand.textContent = 'Todo Application';

  sidebarListItemAllLink.textContent = 'All';
  sidebarListItemAll.innerHTML = allImg;
  sidebarListItemAll.appendChild(sidebarListItemAllLink);

  sidebarListItemTodayLink.textContent = 'Today';
  sidebarListItemToday.innerHTML = todayImg;
  sidebarListItemToday.appendChild(sidebarListItemTodayLink);

  sidebarListItemWeekLink.textContent = 'Week';
  sidebarListItemWeek.innerHTML = weekImg;
  sidebarListItemWeek.appendChild(sidebarListItemWeekLink);

  sidebarListItemImportantLink.textContent = 'Important';
  sidebarListItemImportant.innerHTML = importantImg;
  sidebarListItemImportant.appendChild(sidebarListItemImportantLink);

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
