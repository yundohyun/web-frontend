import { useState } from "react";

export const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [hide, setHide] = useState(false);

  const onChangeName = (e) => setName(e.target.value);
  const onChangeNickname = (e) => setNickname(e.target.value);
  const onClickHide = () => setHide(!hide);

  return (
    <>
      {!hide && (
        <>
          <div>
            <input value={name} onChange={onChangeName} />
            <input value={nickname} onChange={onChangeNickname} />
          </div>
          <div>
            <p>
              <b>이름 : {name}</b>
            </p>
            <p>
              <b>닉네임 : {nickname}</b>
            </p>
          </div>
        </>
      )}
      <button onClick={onClickHide}>
        {hide ? "보이기" : "숨기기"}
      </button>
    </>
  );
};
