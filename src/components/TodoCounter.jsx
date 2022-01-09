import React from "react";
import "../styles/TodoCounter.css";

function TodoCounter({ totalTodos, completedTodos, loading }) {
  return (
    <h2 className={`TodoCounter${loading ? '--loading' : '' }`}>
      Has completado {completedTodos} de {totalTodos} tareas
    </h2>
  );
}

export { TodoCounter };
