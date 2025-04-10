const MouseEventLog = () => {
  const mouseEnter = () => console.log("안녕하세요");
  const mouseLeave = () => console.log("안녕히가세요");

  return (
    <div>
      <p onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
        여기에 마우스를 올려보세요
      </p>
    </div>
  );
};

export default MouseEventLog;
