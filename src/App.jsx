import "./App.css";
import { TodoCounter } from "./components/TodoCounter.jsx";
import { TodoSearch } from "./components/TodoSearch.jsx";
import { TodoList } from "./components/TodoList.jsx"
import { TodoItem } from "./components/TodoItem.jsx"
import { CreateTodoButton } from "./components/CreateTodoButton.jsx"


function App() {
  const todos = [
    { text: "Cortar cebolla", completed: false },
    { text: "Tomar curso de React", completed: false },
    { text: "Otra TODO", completed: false },
  ];

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo, index) => <TodoItem key={index} text={todo.text}/>)}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
