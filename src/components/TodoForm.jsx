import '../styles/TodoForm.css'
import React from "react";
import { TodoContext } from "../context/TodoContext";

function TodoForm() {
  const  [ newTodoValue, setNewTodoValue ] = React.useState("");
  const { openModal, setOpenModal, addTodo } = React.useContext(TodoContext);
  const onCancel = () => {
    setOpenModal(!openModal);
  }
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  const onSubmit = (event) => {
    if(!newTodoValue) {
      return alert("Ingresa un texto");
    }
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(!openModal);
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Añade una nueva tarea</label>
      <textarea value={newTodoValue} onChange={onChange} placeholder="Escribe una tarea"></textarea>
      <div className="TodoForm-buttonContainer">
        <button type="button" className="TodoForm-button TodoForm-button--add" onClick={onCancel}>Cancelar</button>
        <button type="submit" className="TodoForm-button TodoForm-button--add" >Guardar</button>
      </div>
    </form>
  )
}

export default TodoForm
