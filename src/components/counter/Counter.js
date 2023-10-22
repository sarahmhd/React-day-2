import "./counter.css";

import { decrement, increment } from "../../redux/slices/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counterReducer.counter);
  const dispatch = useDispatch();

  const increaseCnt = () => {
    dispatch(increment());
  };
  const decreaseCnt = () => {
    dispatch(decrement());
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
