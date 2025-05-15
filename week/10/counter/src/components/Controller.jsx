const Controller = ({ setCount }) => {
  return (
    <div
      style={{
        padding: "32px",
        marginBlock: "16px",
        borderRadius: "8px",
        backgroundColor: "#f0f0f0",
      }}
    >
      <button onClick={() => setCount((prev) => prev - 100)}>-100</button>
      <button onClick={() => setCount((prev) => prev - 10)}>-10</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-1</button>
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
      <button onClick={() => setCount((prev) => prev + 10)}>+10</button>
      <button onClick={() => setCount((prev) => prev + 100)}>+100</button>
    </div>
  );
};

export default Controller;
