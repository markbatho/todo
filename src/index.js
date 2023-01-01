import './assets/style.css';
import storageFactory from './storage';
import { projectManagerFactory } from './project';
import { todoManagerFactory } from './todo';
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
