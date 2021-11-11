import React from "react";
import { TodoCounter } from "../components/TodoCounter.jsx";
import { TodoSearch } from "../components/TodoSearch.jsx";
import { TodoList } from "../components/TodoList.jsx";
import { TodoItem } from "../components/TodoItem.jsx";
import { CreateTodoButton } from "../components/CreateTodoButton.jsx";
import { TodoContext } from "../context/TodoContext.jsx";
import { Modal } from "../components/Modal.jsx";

function AppUI() {
  const {
    error,
    loading,
    totalTodos,
    searchValue,
    searchedTodos,
    setSearchValue,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>Hubo un error</p>}
        {loading && <p>Cargando...</p>}
        {!loading && !searchedTodos.length && <p>Crea tu primer TODO!</p>}
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

      {!openModal && (
        <Modal>
          <p>Un texto</p>
        </Modal>
      )}
      <CreateTodoButton />
    </>
  );
}

export { AppUI };
