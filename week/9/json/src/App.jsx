import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submit = async () => {
    const url = window.location.origin.replace(/5173/g, "3001");
    await fetch(url + "/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body }),
    });
    setTitle("");
    setBody("");
  };

  return (
    <>
      <div className="container pt-5 pb-5">
        <label className="form-label">Title</label>
        <input
          value={title}
          className="form-control"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label className="form-label">Body</label>
        <textarea
          rows={20}
          value={body}
          className="form-control"
          onChange={(e) => setBody(e.target.value)}
        />
        <br />
        <button className="btn btn-primary" onClick={submit}>
          Submit
        </button>
      </div>
    </>
  );
}

export default App;
