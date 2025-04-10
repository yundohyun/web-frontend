import { useState } from "react";

const Login = () => {
  const account = [
    { email: "admin@gmail.com", password: "admin" },
    { email: "user@gmail.com", password: "user" },
    { email: "test@gmail.com", password: "test" },
  ];
  const domains = ["naver.com", "daum.net", "gmail.com"];

  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState(domains[2]);
  const [password, setPassword] = useState("");

  const setIdState = (e) => setEmail(e.target.value);
  const setDomainState = (e) => setDomain(e.target.value);
  const setPasswordState = (e) => setPassword(e.target.value);
  const submit = (e) => {
    e.preventDefault();
    const isValid = account.some(
      (account) =>
        account.email == email + (domain ? "@" + domain : "") &&
        account.password == password
    );
    if (isValid) {
      alert("로그인 성공");
      setEmail("");
      setPassword("");
    } else alert("로그인 실패");
  };

  return (
    <form onSubmit={submit}>
      <label>
        이메일 : <input type="text" value={email} onChange={setIdState} />
        {domain && <span>@</span>}
        <select value={domain} onChange={setDomainState}>
          {domains.map((domain, index) => (
            <option key={index} value={domain}>
              {domain}
            </option>
          ))}
          <option value="">직접 입력</option>
        </select>
      </label>
      <br />
      <label>
        비밀번호 :{" "}
        <input type="password" value={password} onChange={setPasswordState} />
      </label>
      <br />
      <button type="submit">로그인</button>
    </form>
  );
};

export default Login;
