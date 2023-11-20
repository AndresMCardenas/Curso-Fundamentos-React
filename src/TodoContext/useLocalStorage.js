import React from "react";

function useLocalStorage(itemName, initalValue) {
  const [item, setItem] = React.useState(initalValue);
  const [loading, setLoading] = React.useState(true);  
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
  
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initalValue));
          parsedItem = initalValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          saveItem(parsedItem);
        } 
  
        setLoading(false);
      } catch (error) {
          setLoading(false);
          setError(true);
      }      
    },2000);
  }, []);
  
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage }


// const defaultTodos = [
//   { text: 'Cortar Cebollas', completed: true },
//   { text: 'Tomar el curso de React.js', completed: false },
//   { text: 'llorar con la llorona', completed: false },
//   { text: 'LALALALA', completed: false },
//   { text: 'Usar estados derivados', completed: true},
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');