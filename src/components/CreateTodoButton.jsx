import React from "react";
import '../styles/CreateTodoButton.css'

function CreateTodoButton({ openModal, setOpenModal }) {
  const onClickButton = () => {
    setOpenModal(!openModal);
  }
  return (<button className="CreateTodoButton" onClick={() => onClickButton('Un modal')}>+</button>)
}

export { CreateTodoButton };
