import allIcon from '../../assets/icons/inbox.svg';
import todayIcon from '../../assets/icons/today.svg';
import weekIcon from '../../assets/icons/week.svg';
import importantIcon from '../../assets/icons/star.svg';

import SidebarList from './SidebarList';
import CollectionListItem from './CollectionListItem';

const CollectionList = (props) => {
  const collectionList = SidebarList();

  const collectionListItemAll = CollectionListItem('All', allIcon);
  props.lists.setActiveItem(collectionListItemAll);
  const collectionListItemToday = CollectionListItem('Today', todayIcon);
  const collectionListItemWeek = CollectionListItem('Week', weekIcon);
  const collectionListItemImportant = CollectionListItem(
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
