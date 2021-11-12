import React from "react";
import { TodoContext } from "../context/TodoContext";
import '../styles/CreateTodoButton.css'

function CreateTodoButton() {
 const { openModal, setOpenModal} = React.useContext(TodoContext);
  const onClickButton = () => {
    setOpenModal(!openModal);
  }
  return (<button className="CreateTodoButton" onClick={() => onClickButton('Un modal')}>+</button>)
}

export { CreateTodoButton };
