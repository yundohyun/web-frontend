import { josa } from "es-hangul";

const Body = ({ name = "홍길동", location = "서울", favorite = [] }) => {
  const nameJosa = josa(name, "은/는");

  return (
    <>
      <p>
        {nameJosa} {location}에 거주합니다.
      </p>
      <p>
        {nameJosa} {favorite.length}개의 음식을 좋아합니다.
      </p>
    </>
  );
};

export default Body;
