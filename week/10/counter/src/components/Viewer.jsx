const Viewer = ({ count }) => {
  return (
    <div
      style={{
        padding: "32px",
        marginBlock: "16px",
        borderRadius: "8px",
        backgroundColor: "#f0f0f0",
      }}
    >
      <p>현재 카운트 : </p>
      <h1>{count}</h1>
    </div>
  );
};

export default Viewer;
