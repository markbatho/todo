const CollectionListItem = (name, icon) => {
  const collectionListItemNode = document.createElement('li');
  const a = document.createElement('a');

  a.textContent = name;

  collectionListItemNode.classList.add('collection-list-item');
  collectionListItemNode.innerHTML = icon;
  collectionListItemNode.appendChild(a);

  return collectionListItemNode;
};

export default CollectionListItem;
