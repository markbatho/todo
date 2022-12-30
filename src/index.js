import './assets/style.css';
import storageFactory from './storage';
import { projectFactory, projectManagerFactory } from './project';
import { todoFactory, todoManagerFactory, todoPriorities } from './todo';
import Sidebar from './components/sidebar/Sidebar';
import Project from './components/project/Project';
import Collection from './components/project/Collection';

const app = (content) => {
  const projectStorage = storageFactory('projects');
  const todoStorage = storageFactory('todos');
  const projectManager = projectManagerFactory(projectStorage, todoStorage);
  const todoManager = todoManagerFactory(todoStorage);

  const setProject = (
    project,
    lists,
    projectManagerInstance,
    todoManagerInstance
  ) => {
    const oldProject = document.getElementById('project');
    const newProject = Project({
      project,
      lists,
      projectManagerInstance,
      todoManagerInstance,
    });
    newProject.id = 'project';
    if (!oldProject) {
      sidebar.after(newProject);
      return;
    }
    content.replaceChild(newProject, oldProject);
  };

  const setCollection = (collectionName, lists, todoManagerInstance) => {
    const oldProject = document.getElementById('project');
    const newProject = Collection({
      collectionName,
      lists,
      todoManagerInstance,
    });
    newProject.id = 'project';
    if (!oldProject) {
      sidebar.after(newProject);
      return;
    }
    content.replaceChild(newProject, oldProject);
  };

  // "Tests"
  const p1 = projectFactory('Default');
  const p2 = projectFactory('General');
  const p3 = projectFactory('My Project');
  const p4 = projectFactory('New Project');

  // projectManager.saveProject(p1);
  // projectManager.saveProject(p2);
  // projectManager.saveProject(p3);
  // projectManager.saveProject(p4);

  const today1 = todoFactory(
    'Today',
    'lorem ipsum',
    new Date(),
    new Date('2022-12-29'),
    false,
    todoPriorities.medium,
    p1
  );

  const today2 = todoFactory(
    'Today 2',
    'lorem ipsum',
    new Date(),
    new Date('2022-12-29'),
    false,
    todoPriorities.medium,
    p1
  );

  const thisWeek1 = todoFactory(
    'This week',
    'lorem ipsum',
    new Date(),
    new Date('2022-12-30'),
    false,
    todoPriorities.medium,
    p1
  );

  const important = todoFactory(
    'Important Todo',
    'lorem ipsum',
    new Date(),
    new Date('2022-12-30'),
    false,
    todoPriorities.high,
    p1
  );

  const t1 = todoFactory(
    'todo 1',
    'lorep ipsum dolor...',
    new Date(),
    new Date('2023-01-12'),
    false,
    todoPriorities.medium,
    p1
  );

  const t2 = todoFactory(
    'todo 2',
    'lorep ipsum dolor...',
    new Date(),
    new Date('2023-01-12'),
    false,
    todoPriorities.medium,
    p1
  );

  const t3 = todoFactory(
    'todo 3',
    'lorep ipsum dolor...',
    new Date(),
    new Date('2023-01-12'),
    false,
    todoPriorities.medium,
    p1
  );

  const t4 = todoFactory(
    'todo 4',
    'lorep ipsum dolor...',
    new Date(),
    new Date('2023-01-12'),
    false,
    todoPriorities.medium,
    p2
  );

  todoManager.saveTodo(t1);
  todoManager.saveTodo(t2);
  todoManager.saveTodo(t3);
  todoManager.saveTodo(t4);
  todoManager.saveTodo(today1);
  todoManager.saveTodo(today2);
  todoManager.saveTodo(thisWeek1);
  todoManager.saveTodo(important);

  const sidebar = Sidebar({
    projectManager,
    todoManager,
    setProject,
    setCollection,
  });
  content.appendChild(sidebar);

  setCollection('All', null, todoManager);
};

const content = document.getElementById('app');
app(content);
