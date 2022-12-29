import allIcon from '../../assets/icons/inbox.svg';
import todayIcon from '../../assets/icons/today.svg';
import weekIcon from '../../assets/icons/week.svg';
import importantIcon from '../../assets/icons/star.svg';

import SidebarList from './SidebarList';
import SidebarListItem from './SidebarListItem';

const CollectionList = (props) => {
  const collectionList = SidebarList();

  const collectionListItemAll = SidebarListItem('All', allIcon);
  const collectionListItemToday = SidebarListItem('Today', todayIcon);
  const collectionListItemWeek = SidebarListItem('Week', weekIcon);
  const collectionListItemImportant = SidebarListItem(
    'Important',
    importantIcon
  );

  collectionList.appendChild(collectionListItemAll);
  collectionList.appendChild(collectionListItemToday);
  collectionList.appendChild(collectionListItemWeek);
  collectionList.appendChild(collectionListItemImportant);

  Array.from(collectionList.childNodes).map((listItem) => {
    listItem.onclick = () => {
      props.lists.setActiveItem(listItem);
      props.setCollection(
        listItem.lastChild.textContent,
        props.lists,
        props.todoManager
      );
    };
  });

  return collectionList;
};

export default CollectionList;
