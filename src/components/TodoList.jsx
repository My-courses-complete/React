import React from "react";
import '../styles/TodoList.css';

function TodoList(props) {
  return <section>{props.children}</section>;
}

export { TodoList };
