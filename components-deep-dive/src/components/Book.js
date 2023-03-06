export const Book = (props) => {
  return (
    <li>
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
