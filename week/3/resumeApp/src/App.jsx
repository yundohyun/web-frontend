import Privacy from "./components/Privacy";
import WorkSkills from "./components/WorkSkills";
import Career from "./components/Career";
import Awards from "./components/Awards";

function App() {
  return (
    <>
      <h1>이력서</h1>
      <Privacy
        name={"윤도현"}
        phone={"010-1234-5678"}
        email={"yundohyun050121@gmail.com"}
      />
      <WorkSkills />
      <Career />
      <Awards />
    </>
  );
}

export default App;
