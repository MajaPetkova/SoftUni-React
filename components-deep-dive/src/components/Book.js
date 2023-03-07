import { useState } from "react";
import { useEffect } from "react";

export const Book = (props) => {
  const [highlighted, setHighlighted] = useState(false);
  const [marked, setMarked] = useState(false);

  const clickHandler = () => {
    setHighlighted((state) => !state);
  };
  const deleteHandler = () => {
    setMarked (true);
  };

  useEffect(() => {
    console.log("Mounting: " + props.title);
  }, []);
  useEffect(() => {
    console.log("Update: " + props.title);
  }, [highlighted]);

  let style = {};
  if (highlighted) {
    style.background = "white";
    style.color = "black";
  }

  if (marked) {
    style.background = "green";
  }
  return (
    <li style={style}>
      <article>
        <h3>Title: {props.title}</h3>
        <p>Description: {props.description}</p>
        <footer>
            <button onClick={clickHandler}>Highlight</button>
            <button onClick={deleteHandler}>Delete</button>
          <span>Author: {props.author}</span>
        </footer>
      </article>
    </li>
  );
};
