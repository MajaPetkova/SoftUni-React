import { useState } from "react";

export const Counter = (props) => {
  const [count, setCount] = useState(props.start || 0);

  const increaseHandler = () => {
    setCount((oldCount) => oldCount + 1);
  };
  const decreaseHandler = () => {
    setCount((oldCount) => oldCount - 1);
  };
  const clearHandler = () => {
    setCount(0);
  };

  let title = "";
  if (count < 10) {
    title = "Counter";
  } else if (count < 20) {
    title = "Turbo Counter";
  }else if (count < 25) {
    title = "Mega Counter";
  }else if (count < 35) {
    title = "Large Counter";
  }


  return (
    <div>
      <h2>{title}</h2>
      <h3>{count}</h3>
      <button onClick={decreaseHandler}>-</button>
      <button onClick={clearHandler}>Clear</button>
      <button onClick={increaseHandler}>+</button>
    </div>
  );
};
