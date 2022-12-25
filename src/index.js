import './assets/style.css';

import storageFactory from './storage';
import { projectManagerFactory } from './project';

import Sidebar from './components/sidebar/sidebar';
import Project from './components/project/project';

const app = (content) => {
  const projectStorage = storageFactory('projects');
  const projectManager = projectManagerFactory(projectStorage);

  const sidebar = Sidebar({ projectManager });
  const project = Project();

  content.appendChild(sidebar);
  content.appendChild(project);
};

const content = document.getElementById('app');
app(content);
