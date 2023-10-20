import "./counter.css";

import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(1);

  const increaseCnt = () => {
    setCounter(counter + 1);
  };
  const decreaseCnt = () => {
    if (counter <= 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="counter d-flex justify-content-center align-items-center gap-5 mt-5">
      <button className="btn btn-primary" onClick={() => increaseCnt()}>
        +
      </button>
      <span className="cnt-val fs-2">{counter}</span>
      <button className="btn btn-primary" onClick={() => decreaseCnt()}>
        -
      </button>
    </div>
  );
};

export default Counter;
