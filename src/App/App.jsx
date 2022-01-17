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
import { ChangeAlert } from "../components/ChangeAlert.jsx";

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
    setOpenModal,
    sincronizeTodos
  } = useTodos();

  return (
    <>
    <React.StrictMode>
      <TodoHeader loading={loading}>
        <TodoCounter 
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          // loading={loading}
          />
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          // loading={loading}
          />
      </TodoHeader>
      <TodoList 
        error={error}
        onError={() => <TodoError error={error} />}
        loading={loading}
        totalTodos={totalTodos}
        onLoading={() => <TodoLoading />}
        searchedTodos={searchedTodos}
        searchValue={searchValue}
        onEmpty={() => <EmptyTodo msg= {"Crea tu primer ToDo"}/>}
        onEmptySearchResults={(searchText) => <EmptyTodo msg={`No se encontraron resultados para ${searchText}`}/>}
        render={(todo, index) => (
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
          )}
          >
        {(todo, index) => (
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
          )}
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
      <ChangeAlert
        sincronize={sincronizeTodos}
      />
    </React.StrictMode>
    </>
  );
}

export { App };
