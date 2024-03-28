import React from "react";
import { increase, decrease, set, reset } from "./Store";
import { useDispatch, useSelector } from "react-redux";

export default function Card() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const handleInput = (e) => {
    e.preventDefault();

    dispatch(set({ count: +e.target.value }));
  };
  const handleIncrease = () => {
    dispatch(increase());
  };
  const handleDecrease = () => {
    dispatch(decrease());
  };
  const handleSet = () => {
    dispatch(set({ count: +count }));
  };
  const handleReset = () => {
    dispatch(reset());
  };
  return (
    <div className="container">
      {/* <p>{count}</p> */}

      <input
        type="number"
        placeholder="enter your number"
        onChange={handleInput}
        value={count}
      />
      <div className="btns">
        <button className="btn" onClick={handleDecrease}>
          -
        </button>
        <button className="btn" onClick={handleIncrease}>
          +
        </button>
        <button className="btn" onClick={handleSet}>
          set
        </button>
        <button className="btn" onClick={handleReset}>
          reset
        </button>
      </div>
    </div>
  );
}
