// import "./App.css";
import React from "react";
import { TodoCounter } from "./components/TodoCounter.jsx";
import { TodoSearch } from "./components/TodoSearch.jsx";
import { TodoList } from "./components/TodoList.jsx";
import { TodoItem } from "./components/TodoItem.jsx";
import { CreateTodoButton } from "./components/CreateTodoButton.jsx";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
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

  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {error && <p>Hubo un error</p>}
        {loading && <p>Cargando...</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO!</p>}
        {searchedTodos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => {
              completeTodo(todo.text);
            }}
            onDelete={() => {
              deleteTodo(todo.text);
            }}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export { App };
