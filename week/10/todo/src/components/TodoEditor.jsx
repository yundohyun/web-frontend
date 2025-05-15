import "../styles/components/TodoEditor.css";
import { useState } from "react";

const TodoEditor = ({ setTodo }) => {
  const [content, setContent] = useState("");

  return (
    <div style={{ marginBlock: "64px" }}>
      <h3>새로운 Todo 작성하기 🖊️</h3>
      <div className="editor_wrapper">
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="새로운 Todo..."
        />
        <button
          className="btn"
          onClick={() => {
            setTodo((prev) => [
              ...prev,
              { id: Date.now(), content, check: false, date: new Date() },
            ]);
            setContent("");
          }}
        >
          추가
        </button>
      </div>
    </div>
  );
};

export default TodoEditor;
