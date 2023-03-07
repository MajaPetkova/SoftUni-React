import {useState} from "react";
import {useEffect} from "react";

export const Book = (props) => {
    const [highlighted, setHighlighted] = useState(false)
    const clickHandler =()=>{
         setHighlighted(state=> !state);

    }
    useEffect(()=>{
        console.log("Mounting")
    }, [])

    let style= {};
    if(highlighted){
        style.background = "white";
        style.color= "black"
    }
  return (
    <li onClick={clickHandler} style={style}>
      <article>
        <h3>Title: {props.title}</h3>
        <p>Description: {props.description}</p>
        <footer>
          <span>Author: {props.author}</span>
        </footer>
      </article>
    </li>
  );
};
