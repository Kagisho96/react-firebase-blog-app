import Book from "../components/Book.jsx";
import Header from "../components/Header.jsx";
import { useSelector } from "react-redux";
import { selectBooks } from "../store/booksSlice.js";

function BooksPage() {

  const books = useSelector(selectBooks);
  className={`absolute bottom-0 left-0 w-full bg-${
    book.isRead ? "green" : "red"
  } text-white ${
    book.isRead ? "bg-green-600" : "bg-red-600"
  } py-2 px-4 text-sm font-bold`}    
    
    return (
      <>
        <div className="container">
            <Header  />
            <div className="books-container">
                <div className="books-list">
                    
                    {books.map(book => 
                    
                    <Book key={book.id} book={book}  />
                    
                    )}

                </div>
            </div>
        </div>
      </>
    )
  }
  
  export default BooksPage
  