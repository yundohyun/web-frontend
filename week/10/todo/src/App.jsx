import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import { useState } from "react";
import "./styles/App.css";

function App() {
  const [todo, setTodo] = useState([]);

  return (
    <div className="app">
      <Header />
      <TodoEditor setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
