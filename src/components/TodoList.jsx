import React from "react";

function TodoList(props) {
  console.log(props.children)
  return <section>{props.children}</section>;
}

export { TodoList };
