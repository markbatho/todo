import slugify from 'slugify';

const todoPriorities = {
  low: { value: 'low', color: '#1976d2' },
  medium: { value: 'medium', color: '#fbc02d' },
  high: { value: 'high', color: '#d32f2f' },
};

const todoManagerFactory = (storage) => {
  const findAll = () => {
    return storage.findAll();
  };

  const findById = (id) => {
    return storage.findOne({ property: 'id', value: id });
  };

  const saveTodo = (todo) => {
    if (findById(todo.id)) {
      console.log('Exists...');
      return;
    }

    storage.saveItem(todo);
  };

  const updateTodo = (id, todo) => {
    storage.updateItem({ property: 'id', value: id }, todo);
  };

  const deleteTodo = (id) => {
    storage.removeItem({ property: 'id', value: id });
  };

  return { findAll, findById, saveTodo, updateTodo, deleteTodo };
};

const todoFactory = (title, desc, createdAt, dueDate, isDone, priority) => {
  const id = slugify(title);
  return {
    id,
    title,
    desc,
    createdAt,
    dueDate,
    isDone,
    priority,
  };
};

export { todoPriorities, todoManagerFactory, todoFactory };
