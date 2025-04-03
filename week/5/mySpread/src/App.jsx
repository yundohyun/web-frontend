import Body from "./components/Body";

function App() {
  return (
    <>
      <h1>스프레드 연산자</h1>
      <Body
        name={"윤도현"}
        location={"서울"}
        favorite={["회", "초밥", "새우"]}
      />
    </>
  );
}

export default App;
