import { useState } from "react";

export const Clicker = () => {
  const [clicks, setClicks] = useState(0);

  const clickHandler = (ev) => {
    // console.log(ev);
    setClicks((oldClicks) => oldClicks + 1);
  };
  if (clicks > 30) {
    return <h1>Finished Clicks</h1>;
  }
  const dangerClicks = clicks > 20;
  return (
    <div>
      {dangerClicks && <h1>Danger Clicks</h1>}
      {clicks > 10 ? <h2>Medium Clicks</h2> : <h3>Normal Clicks</h3>}
      <button onClick={clickHandler}>{clicks}</button>
    </div>
  );
};
