export const Resume = ({ hobby, food, color }) => {
  return (
    <div style={{ border: "solid 1px", width: "500px", padding: "16px" }}>
      <h1>윤도현 자기소개서</h1>
      <ul>
        <li>취미 : {hobby ?? "없음"}</li>
        <li>좋아하는 음식 : {food ?? "없음"}</li>
        <li>
          좋아하는 색 :{" "}
          <span style={{ color: color ?? "black" }}>{color ?? "없음"}</span>
        </li>
      </ul>
    </div>
  );
};

export default Resume;
