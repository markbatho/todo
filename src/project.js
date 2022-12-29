import { todoFactory } from './todo';

const projectFactory = (name, listItem) => {
  return { name, listItem };
};

const projectManagerFactory = (projectStorage, todoStorage) => {
  const findAll = () => {
    return projectStorage.findAll();
  };

  const findByName = (name) => {
    return projectStorage.findOne({ property: 'name', value: name });
  };

  const saveProject = (project) => {
    if (findByName(project.name)) {
      return;
    }
    projectStorage.saveItem(project);
  };

  const updateProject = (name, project) => {
    const currentProject = findByName(name);
    projectStorage.updateItem({ property: 'name', value: name }, project);

    const todos = todoStorage.findAll({
      property: 'project',
      value: currentProject,
    });

    todos.forEach((element) => {
      todoStorage.updateItem(
        { property: 'id', value: element.id },
        todoFactory(
          element.id,
          element.desc,
          element.createAt,
          element.dueDate,
          element.isDone,
          element.priority,
          project
        )
      );
    });
  };

  const deleteProject = (name) => {
    const todos = todoStorage.findAll({
      property: 'project',
      value: findByName(name),
    });

    todos.forEach((element) => {
      todoStorage.removeItem({ property: 'id', value: element.id });
    });

    projectStorage.removeItem({ property: 'name', value: name });
  };

  return { findAll, findByName, saveProject, updateProject, deleteProject };
};

export { projectFactory, projectManagerFactory };
