import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "48px" }}>
      <h1>Simple Counter</h1>
      <Viewer count={count} />
      <Controller setCount={setCount} />
    </div>
  );
}

export default App;
