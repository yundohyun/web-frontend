const Privacy = ({ name, phone, email }) => {
  return (
    <div>
      <h1>개인정보</h1>
      <p>이름 : {name}</p>
      <p>연락처 : {phone}</p>
      <p>이메일 : {email}</p>
    </div>
  );
};

export default Privacy;
