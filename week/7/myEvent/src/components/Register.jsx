import { useState } from "react";

const OtherRegister = () => {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [option, setOption] = useState("en");
  const [text, setText] = useState("");

  return (
    <>
      <h1>회원 가입</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름"
      />{" "}
      {name}
      <br />
      <input
        type="date"
        value={birth}
        onChange={(e) => setBirth(e.target.value)}
        placeholder="생년월일"
      />{" "}
      {birth}
      <br />
      <select value={option} onChange={(e) => setOption(e.target.value)}>
        <option value="en">미국</option>
        <option value="kr">한국</option>
        <option value="jp">일본</option>
        <option value="cn">중국</option>
      </select>{" "}
      {option}
      <br />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="추가할 값 입력"
      />{" "}
      {text}
      <br />
    </>
  );
};

export default OtherRegister;
