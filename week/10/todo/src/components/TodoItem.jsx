import "../styles/components/TodoItem.css";

const TodoItem = ({ data, setTodo }) => {
  return (
    <div className="item">
      <div className="checkbox_col">
        <input
          type="checkbox"
          checked={data.check}
          onChange={() =>
            setTodo((prev) =>
              prev.map((v) => (v.id == data.id ? { ...v, check: !v.check } : v))
            )
          }
        />
      </div>
      <span className={"title_col" + (data.check ? " checked" : "")}>
        {data.content}
      </span>
      <span className={"date_col" + (data.check ? " checked" : "")}>
        {data.date.toISOString().slice(0, 10).replace(/-/g, ". ")}.
      </span>
      <button
        className="btn_col"
        onClick={() => {
          setTodo((prev) => prev.filter((v) => v.id != data.id));
        }}
      >
        삭제
      </button> 
    </div>
  );
};

export default TodoItem;
