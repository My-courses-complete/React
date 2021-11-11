// import "./App.css";
import React from "react";
import { TodoCounter } from "./components/TodoCounter.jsx";
import { TodoSearch } from "./components/TodoSearch.jsx";
import { TodoList } from "./components/TodoList.jsx";
import { TodoItem } from "./components/TodoItem.jsx";
import { CreateTodoButton } from "./components/CreateTodoButton.jsx";
import { TodoContext, TodoContextProvider } from "./context/TodoContext.jsx";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  return (
    <TodoContextProvider>
      <>
        <TodoCounter />
        <TodoSearch />
        <TodoContext.Consumer>
          {(value) => {
            return (
              <TodoList>
                {value.error && <p>Hubo un error</p>}
                {value.loading && <p>Cargando...</p>}
                {!value.loading && !value.searchedTodos.length && (
                  <p>Crea tu primer TODO!</p>
                )}
                {value.searchedTodos.map((todo, index) => (
                  <TodoItem
                    key={index}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => {
                      value.completeTodo(todo.text);
                    }}
                    onDelete={() => {
                      value.deleteTodo(todo.text);
                    }}
                  />
                ))}
              </TodoList>
            );
          }}
        </TodoContext.Consumer>
        <CreateTodoButton />
      </>
    </TodoContextProvider>
  );
}

export { App };
