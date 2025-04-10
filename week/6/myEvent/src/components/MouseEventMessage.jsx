import { useState } from "react";

const MouseEventMessage = () => {
  const [message, setMessage] = useState("여기를 주목하세요!");

  const mouseEnter = () => setMessage("안녕하세요");
  const mouseLeave = () => setMessage("안녕히가세요");

  return <div>
    <p onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      여기에 마우스를 올려보세요
    </p>
    <p>{message}</p>
  </div>;
};

export default MouseEventMessage;
