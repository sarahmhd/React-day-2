import "./counter.css";

import { decrement, increment } from "../../redux/slices/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counterReducer.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className="counter d-flex justify-content-center align-items-center gap-5 mt-5">
      <button className="btn btn-primary" onClick={() => handleIncrement()}>
        +
      </button>
      <span className="cnt-val fs-2">{counter}</span>
      <button className="btn btn-primary" onClick={() => handleDecrement()}>
        -
      </button>
    </div>
  );
};

export default Counter;
