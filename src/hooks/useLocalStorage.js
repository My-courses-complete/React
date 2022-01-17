import React from "react";

export function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [item, setItem] = React.useState(initialValue);
  const [sincronized, setSincronized] = React.useState(true);
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
      
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        
        setItem(parsedItem);
        setLoading(false);
        setSincronized(true);
      } catch (error) {
        setError(error);
      }
    }, 3000);
  }, [sincronized]);

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  const sincronize = () => {
    setLoading(true);
    setSincronized(false);
  };

  return { item, saveItem, error, loading, sincronize };
}
