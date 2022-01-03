// import "./App.css";
import React from "react";
import { AppUI } from "./AppUI";
import { TodoContextProvider } from "../context/TodoContext";

function App() {
  const [state, setState] = React.useState('Estado compartido');
  return (
    <>
    <TodoHeader>
      <TodoSearch />
      <TodoCounter />
    </TodoHeader>
    <TodoList>
      <TodoItems state={state}/>
    </TodoList>
    </>
  );
}
function TodoHeader({ children }) {
  return (
    <header>
      {children}
    </header>
  );
}

function TodoList({ children }) {
  return (
    <section className="TodoList-container">
      {children}
    </section>
  );
}

function TodoCounter() {
  return <p>TodoCounter</p>;
}

function TodoSearch() {
  return <p>TodoSearch</p>;
}

function TodoItems({ state }) {
  return <p>TodoItems {state}</p>;
}

// function App() {
//   return (
//     <>
//       <TodoContextProvider >
//         <AppUI />
//       </TodoContextProvider>
//     </>
//   );
// }

export { App };
