import {Book} from "./Book"

export const BookList= (props)=>{
return(
    <ul>
        <Book 
        title = {props.bookList[0].title}
        author = {props.bookList[0].author}
        description = {props.bookList[0].description}
        />
  </ul>
)
}