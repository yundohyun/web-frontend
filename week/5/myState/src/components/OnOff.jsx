import { useState } from "react";

const OnOff = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div>
      <h1
        style={{
          color: isOn ? "green" : "red",
        }}
      >
        {isOn ? "ON" : "OFF"}
      </h1>
      <button onClick={toggleSwitch}>{isOn ? "Turn Off" : "Turn On"}</button>
    </div>
  );
};

export default OnOff;
