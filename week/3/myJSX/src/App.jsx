import { useState } from "react";

function App() {
  const name = "윤도현";
  const number = 10;
  const number2 = 11;

  const react = "리액트";

  const [user, setUser] = useState(null);
  const [login, setLogin] = useState(false);

  const content = [1, 2, 3, 4, 5];

  return (
    <>
      <h1>Hello, React!</h1>
      <h2>이름은 {name}입니다.</h2>
      <h2>{number}</h2>
      <h2>
        {number} + {number2} = {number + number2}
      </h2>
      <h2>
        {number}은(는) {number % 2 == 0 ? "짝" : "홀"}수입니다.
      </h2>

      <hr />

      {/* 조건부 렌더링 */}
      {react == "리액트" && <h2>리액트입니다.</h2>}
      {react == "리액틍" && <h2>리액틍입니다.</h2>}

      <hr />

      {/* useState & 조건부 렌더링 */}
      <h2>
        {login
          ? user + "님이 로그인하셨습니다."
          : "로그인이 되어 있지 않습니다."}
      </h2>
      {!login && (
        <>
          <input
            placeholder="이름을 입력해주세요"
            onChange={(e) => setUser(e.target.value)}
            value={user}
          />
          <br />
        </>
      )}
      <button onClick={() => setLogin(!login)}>
        {login ? "로그아웃" : "로그인"}
      </button>

      <hr />

      {/* React + map */}
      <h1>React + Array.prototype.map()</h1>
      <ul>
        {content.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
