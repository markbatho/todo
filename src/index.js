import './assets/style.css';

import storageFactory from './storage';
import { projectFactory, projectManagerFactory } from './project';
import { todoFactory, todoManagerFactory, todoPriorities } from './todo';

import Sidebar from './components/sidebar/Sidebar';
import Project from './components/project/project';

const app = (content) => {
  const projectStorage = storageFactory('projects');
  const todoStorage = storageFactory('todos');
  const projectManager = projectManagerFactory(projectStorage, todoStorage);
  const todoManager = todoManagerFactory(todoStorage);

  const setProject = (
    projectName,
    projectManagerInstance,
    todoManagerInstance
  ) => {
    const oldProject = document.getElementById('project');
    const newProject = Project({
      projectName,
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

  // "Tests"
  const p1 = projectFactory('Default');
  const p2 = projectFactory('General');
  const p3 = projectFactory('My Project');
  const p4 = projectFactory('New Project');

  projectManager.saveProject(p1);
  projectManager.saveProject(p2);
  projectManager.saveProject(p3);
  projectManager.saveProject(p4);

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

  const sidebar = Sidebar({ projectManager, todoManager, setProject });
  content.appendChild(sidebar);

  setProject('All', projectManager, todoManager);
};

const content = document.getElementById('app');
app(content);
