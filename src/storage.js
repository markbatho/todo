import slugify from 'slugify';

const storageFactory = (storageId) => {
  const id = slugify(storageId);

  if (window.localStorage.getItem(id) === null) {
    window.localStorage.setItem(id, JSON.stringify(Array()));
  }

  const getStorage = () => {
    return JSON.parse(window.localStorage.getItem(id));
  };

  const setStorage = (arr) => {
    window.localStorage.setItem(id, JSON.stringify(arr));
  };

  const findOne = (query) => {
    return getStorage().reduce((prev, current) => {
      if (current[query.property] === query.value) {
        prev = current;
        return prev;
      }
      return prev;
    }, null);
  };

  const findAll = () => {
    return getStorage();
  };

  const saveItem = (item) => {
    const storageArray = getStorage();
    storageArray.push(item);
    setStorage(storageArray);
  };

  const updateItem = (query, item) => {
    const storageArray = getStorage();
    const updatedArray = storageArray.map((element) => {
      if (element[query.property] === query.value) {
        element = item;
        return element;
      }
      return element;
    });
    setStorage(updatedArray);
  };

  const removeItem = (query) => {
    const storageArray = getStorage();
    const index = storageArray.findIndex((element) => {
      if (element[query.property] === query.value) {
        return true;
      }
      return false;
    });
    storageArray.splice(index, 1);
    setStorage(storageArray);
  };

  return {
    findOne,
    findAll,
    saveItem,
    updateItem,
    removeItem,
  };
};

export default storageFactory;
