import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const TodoContext = React.createContext();

export function TodoContextProvider(props) {
  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage("TODOS", []);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    const regex = new RegExp(searchValue, "gi");
    searchedTodos = todos.filter((todo) => todo.text.match(regex)) || [];
  }

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.text === text);
    newTodos[index].completed = !newTodos[index].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(index, 1);
    saveTodos(newTodos);
  };

  React.useEffect(() => {
    saveTodos(todos);
  }, [totalTodos]);

  return <TodoContext.Provider value={{
    error,
    loading,
    totalTodos,
    searchValue,
    searchedTodos,
    completedTodos,
    setSearchValue,
    completeTodo,
    deleteTodo,
  }}>
    {props.children}
  </TodoContext.Provider>;
}
