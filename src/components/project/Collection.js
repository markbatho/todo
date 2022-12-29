const Collection = (props) => {
  const collection = document.createElement('div');
  const collectionHeader = document.createElement('div');
  const h2 = document.createElement('h2');

  const projectManager = props.projectManagerInstance;
  const projectInstance = props.project;
  /*?*/ const lists = props.lists;

  h2.textContent = props.collectionName;

  switch (props.collectionName) {
    case 'All':
      break;
    case 'Today':
      break;
    case 'Week':
      break;
    case 'Important':
      break;
    default:
      break;
  }

  collection.appendChild(h2);

  return collection;
};

export default Collection;
