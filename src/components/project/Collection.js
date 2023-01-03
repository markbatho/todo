import { isToday, isThisWeek } from 'date-fns';
import { todoPriorities } from '../../todo';
import TodoList from './TodoList';

const Collection = (props) => {
  const collection = document.createElement('div');
  const collectionHeader = document.createElement('div');
  const h2 = document.createElement('h2');

  h2.textContent = props.collectionName;

  let todos;
  switch (props.collectionName) {
    case 'All':
      todos = props.todoManagerInstance.findAll();
      break;
    case 'Today':
      todos = props.todoManagerInstance.findAll();
      todos = todos.filter((todo) => {
        return isToday(new Date(todo.dueDate)) ? true : false;
      });
      break;
    case 'Week':
      todos = props.todoManagerInstance.findAll();
      todos = todos.filter((todo) => {
        return isThisWeek(new Date(todo.dueDate)) ? true : false;
      });
      break;
    case 'Important':
      todos = props.todoManagerInstance.findAll({
        property: 'priority',
        value: todoPriorities.high,
      });
      break;
    default:
      break;
  }

  const todoList = TodoList(todos, props.todoManagerInstance);

  collection.appendChild(h2);
  collection.appendChild(todoList);

  return collection;
};

export default Collection;
