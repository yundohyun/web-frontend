export const Career = ({ title = "", content = [] }) => {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {content.length > 1
          ? content.map((v, i) => <li key={i}>{v}</li>)
          : "없음"}
      </ul>
    </div>
  );
};

export default Career;
