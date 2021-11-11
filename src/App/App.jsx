// import "./App.css";
import React from "react";
import { AppUI } from "./AppUI";
import { TodoContextProvider } from "../context/TodoContext";

function App() {
  return (
    <>
      <TodoContextProvider >
        <AppUI />
      </TodoContextProvider>
    </>
  );
}

export { App };
