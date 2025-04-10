import { useState } from "react";
import Info from "./nav/Info";
import QnA from "./nav/QnA";
import Review from "./nav/Review";

const Quiz2 = () => {
  const [page, setPage] = useState("info");
  const setPageState = (e) => setPage(e.target.id);

  return (
    <div>
      <h1>Quiz 2</h1>
      <ul>
        <li
          id="info"
          onClick={setPageState}
          style={{ color: page == "info" ? "red" : "black" }}
        >
          상세정보
        </li>
        <li
          id="qna"
          onClick={setPageState}
          style={{ color: page == "qna" ? "red" : "black" }}
        >
          질문
        </li>
        <li
          id="review"
          onClick={setPageState}
          style={{ color: page == "review" ? "red" : "black" }}
        >
          리뷰
        </li>
      </ul>
      {page == "info" && <Info />}
      {page == "qna" && <QnA />}
      {page == "review" && <Review />}
    </div>
  );
};

export default Quiz2;
