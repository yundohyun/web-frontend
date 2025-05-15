import "../styles/components/TodoList.css";
import { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todo, setTodo }) => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <h3>Todo List 🌱</h3>
      <input
        className="searchbar"
        placeholder="검색어를 입력하세요"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="list_wrapper">
        {todo
          .filter((v) => v.content.includes(search))
          .map((v, i) => (
            <TodoItem key={i} data={v} setTodo={setTodo} />
          ))}
      </div>
    </div>
  );
};

export default TodoList;
