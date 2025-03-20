export const WorkSkills = ({ content = [] }) => {
  return (
    <div>
      <h1>업무 스킬</h1>
      <ul>
        {content.length > 1
          ? content.map((v, i) => <li key={i}>{v}</li>)
          : "없음"}
      </ul>
    </div>
  );
};

export default WorkSkills;
