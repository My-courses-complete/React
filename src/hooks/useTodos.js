import React from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useTodos() {
  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage("TODOS", JSON.parse(localStorage.getItem("TODOS")) || []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    const regex = new RegExp(searchValue, "gi");
    searchedTodos = todos.filter((todo) => todo.text.match(regex)) || [];
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text
    })
    saveTodos(newTodos);
  };

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

  return {
    error,
    loading,
    totalTodos,
    searchValue,
    searchedTodos,
    completedTodos,
    setSearchValue,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    addTodo
  };
}
