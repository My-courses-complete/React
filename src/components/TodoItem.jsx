import React from "react";
import { TodoContext } from "../context/TodoContext";
import { GoCheck, GoX } from 'react-icons/go'
import "../styles/TodoItem.css";

function TodoItem({ completed, onComplete, onDelete, text }) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={onComplete}
      >
        <GoCheck/>
      </span>
      <p
        className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}
        
      >
        {text}
      </p>
      <span className="Icon Icon-delete" onClick={onDelete}><GoX/></span>
    </li>
  );
}

export { TodoItem };
