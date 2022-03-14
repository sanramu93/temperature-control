import React, { useEffect, useState } from "react";

export default function App() {
  const [temp, setTemp] = useState(20);
  const [tempFeel, setTempFeel] = useState("ambient");

  const changeTempFeel = () => {
    if (temp >= 30) setTempFeel("hot");
    else if (temp <= 10) setTempFeel("cold");
    else setTempFeel("ambient");
  };

  const increment = () => {
    if (temp < 100) setTemp(temp + 1);
  };
  const decrement = () => {
    if (temp > -100) setTemp(temp - 1);
  };

  useEffect(() => changeTempFeel());

  return (
    <div className="container">
      <main className="main">
        <div className={`temperature temperature--${tempFeel}`}>{temp}°C</div>
        <div className="controls">
          <button className="btn btn--decrement" onClick={decrement}>
            -
          </button>
          <button className="btn btn--increment" onClick={increment}>
            +
          </button>
        </div>
      </main>
    </div>
  );
}
