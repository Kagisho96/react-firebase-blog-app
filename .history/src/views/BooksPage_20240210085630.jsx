import Book from "../components/Book.jsx";
import Header from "../components/Header.jsx";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectBooks } from "../store/booksSlice.js";

// import Book from '../components/Book.jsx';
// import Header from '../components/Header.jsx';
// import {useSelector} from 'react-redux';
// import {selectBooks} from '../store/booksSlice.js';

// function BooksPage() {

//   const books = useSelector(selectBooks);
//   const pageTitle = "📖 Book List with Router, Redux & Firebase";
    
    
//     return (
//       <>
//         <div className="container">
//             <Header pageTitle={pageTitle} />
//             <div className="books-container">
//                 <div className="books-list">
                    
//                     {books.map(book => 
                    
//                     <Book key={book.id} book={book}  />
                    
//                     )}

//                 </div>
//             </div>
//         </div>
//       </>
//     )
//   }
  
//   export default BooksPage
 


function BooksPage() {
  const books = useSelector(selectBooks);
  const pageTitle = "📖 Book List with Router, Redux & Firebase";

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`container ${isSticky ? 'sticky' : ''}`}>
        <Header pageTitle={pageTitle} />
        <div className="books-container">
          <div className="books-list">
            {books.map((book) => (
              <Book key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BooksPage;
