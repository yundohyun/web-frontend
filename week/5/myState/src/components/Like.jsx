import { useState } from "react";

const Like = () => {
  const [like, setLike] = useState(0);
  const increase = () => setLike(like + 1);
  const decrease = () => setLike(like - 1);
  const reset = () => setLike(0);

  return (
    <div>
      <h1>Like</h1>
      <h2>
        {(like > 0 ? "❤️" : "💔").repeat(Math.abs(like))} ({like})
      </h2>
      <button onClick={increase}>Like</button>
      <button onClick={decrease}>Dislike</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Like;
