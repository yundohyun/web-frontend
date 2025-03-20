export const Awards = ({ content = [] }) => {
  return (
    <div>
      <h1>수상 경력</h1>
      <ul>
        {content.length > 1
          ? content.map((v, i) => <li key={i}>{v}</li>)
          : "없음"}
      </ul>
    </div>
  );
};

export default Awards;
