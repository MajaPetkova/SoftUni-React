import { Book } from "./Book";

export const BookList = (props) => {
    
    
    // first solution 

//   const bookElements = [];

//   for (let book of props.books) {
//     bookElements.push(
//       <article>
//         <h3>Title: {book.title}</h3>
//         <p>Description: {book.description}</p>
//         <footer>
//           <span>Author: {book.author}</span>
//         </footer>
//       </article>
//     );
//   }

// second solution 

// const bookElements= props.books.map(b =><Book {...b}/>)

  return <ul>
    <h2>Book Library</h2>
    {props.books.map(b =><Book {...b}/>)}
    </ul>;
};
