const SidebarListItem = (name, icon) => {
  const sidebarListItemNode = document.createElement('li');
  const a = document.createElement('a');

  a.textContent = name;

  sidebarListItemNode.innerHTML = icon;
  sidebarListItemNode.appendChild(a);

  return sidebarListItemNode;
};

export default SidebarListItem;
