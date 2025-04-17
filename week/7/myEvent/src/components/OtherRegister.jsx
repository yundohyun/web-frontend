import { useState } from "react";

const OtherRegister = () => {
  const [form, setForm] = useState({
    name: "",
    birth: "",
    option: "en",
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <h1>회원 가입 with Spread</h1>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="이름"
      />{" "}
      {form.name}
      <br />
      <input
        type="date"
        name="birth"
        value={form.birth}
        onChange={handleChange}
        placeholder="생년월일"
      />{" "}
      {form.birth}
      <br />
      <select name="option" value={form.option} onChange={handleChange}>
        <option value="en">미국</option>
        <option value="kr">한국</option>
        <option value="jp">일본</option>
        <option value="cn">중국</option>
      </select>{" "}
      {form.option}
      <br />
      <textarea
        name="text"
        value={form.text}
        onChange={handleChange}
        placeholder="추가할 값 입력"
      />{" "}
      {form.text}
      <br />
    </>
  );
};

export default OtherRegister;
