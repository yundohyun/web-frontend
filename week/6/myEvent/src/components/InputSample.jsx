import { useState } from "react";

const InputSample = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setText("")}>초기화</button>
      <p>
        <b>값 : {text}</b>
      </p>
    </div>
  );
};

export default InputSample;
