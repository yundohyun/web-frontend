import { useState } from "react";

const IteractionSample = () => {
  const [name, setName] = useState(
    ["눈사람", "얼음", "눈", "바람"].map((v, i) => ({ id: i + 1, name: v }))
  );
  const [text, setText] = useState("");
  const [nextId, setNextId] = useState(name.length + 1);

  const setTextEvent = (e) => setText(e.target.value);
  const addNameKeyDown = (e) => {
    if (e.key == "Enter") addNameEvent();
  };
  const addNameEvent = () => {
    setName([...name, { id: nextId, name: text }]);
    setText("");
    setNextId(nextId + 1);
  };
  const removeNameEvent = (e) =>
    setName(name.filter((v) => v.id != +e.target.id));

  return (
    <>
      <h1>동적 배열 렌더링</h1>
      <ul>
        {name.map((v) => (
          <li id={v.id} key={v.id} onClick={removeNameEvent}>
            {v.name}
          </li>
        ))}
      </ul>
      <input
        value={text}
        onChange={setTextEvent}
        onKeyDown={addNameKeyDown}
        placeholder="추가할 값 입력"
      />
      <button onClick={addNameEvent}>추가</button>
    </>
  );
};

export default IteractionSample;
