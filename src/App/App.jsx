// import "./App.css";
import React from "react";
import { TodoCounter } from "../components/TodoCounter.jsx";
import { TodoSearch } from "../components/TodoSearch.jsx";
import { TodoList } from "../components/TodoList.jsx";
import { TodoItem } from "../components/TodoItem.jsx";
import { CreateTodoButton } from "../components/CreateTodoButton.jsx";
import { useTodos } from "../hooks/useTodos.js";
import { Modal } from "../components/Modal.jsx";
import TodoForm from "../components/TodoForm.jsx";
import { TodoLoading } from "../components/TodoLoading.jsx";
import { EmptyTodo } from "../components/EmptyTodo.jsx";
import TodoHeader from "../components/TodoHeader.jsx";

function App() {
  const {
    error,
    loading,
    totalTodos,
    searchedTodos,
    completeTodo,
    deleteTodo,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
    openModal,
    setOpenModal
  } = useTodos();

  return (
    <>
      <TodoHeader>
        <TodoCounter 
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>
      <TodoList>
        {error && <TodoError error={error} />}
        {loading && <TodoLoading />}
        {!loading && !searchedTodos.length && <EmptyTodo/>}
        {!loading && searchedTodos.map((todo, index) => (
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

      {openModal && (
        <Modal>
          <TodoForm 
          openModal={openModal} 
          setOpenModal={setOpenModal} 
          addTodo={addTodo}
          />
        </Modal>
      )}
      <CreateTodoButton 
      openModal={openModal} 
      setOpenModal={setOpenModal}
      />
    </>
  );
}

export { App };
