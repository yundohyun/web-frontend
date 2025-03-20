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
      <WorkSkills
        content={[
          "TypeScript",
          "JavaScript",
          "Python",
          "Kotlin",
          "PosgreSQL",
          "Docker",
          "AWS",
          "Shell Script",
          "Ubuntu",
        ]}
      />
      <Career
        title="학력 사항"
        content={[
          "2021. 03. ~ 2024. 02. : 선린인터넷고등학교",
          "2024. 03 ~ : 대학교 컴퓨터소프트웨어공학과",
        ]}
      />
      <Career
        title="경력 사항"
        content={["TypeScript 2년", "JavaScript 5년"]}
      />
      <Awards
        content={[
          "2023년 선린인터넷고등학교 디콘 동상",
          "2024년 충북대학교 +AI 메이커톤 대상",
        ]}
      />
    </>
  );
}

export default App;
