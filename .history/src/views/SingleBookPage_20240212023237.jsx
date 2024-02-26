import Header from "../components/Header.jsx";
import Notes from "../components/Notes.jsx";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { eraseBook, selectBooks, toggleRead } from "../store/booksSlice.js";
import { eraseBookNotes } from "../store/notesSlice.js";

function SingleBookPage() {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleEraseBook(id) {
    if(confirm('Are you sure you want to erase this book and all notes associated with it?')){
      dispatch(eraseBook(id));
      dispatch(eraseBookNotes(id));
      navigate("/");
    }
  }

  const {id} = useParams();

  const books = useSelector(selectBooks);

  const book = books.filter(book => book.id == id)[0];
    
    return (
      <>
        <div className="container">
          <Header/>
            <Link to="/">
              <button className="bg-orange-400 hover:bg-gray-200 py-2 px-4 text-gray-100 hover:text-gray-900 rounded-md font-medium transition-all duration-200 ease-in">
                  ← Back 
              </button>
            </Link>

            {book ?
            
            <div>
              <div className="single-book">
                <div className="book-cover">
                    <img src={book.cover} />
                </div>

                <div className="book-details">
                    <h3 className="book-title">{ book.title }</h3>
                    <h4 className="book-author">{ book.author }</h4>
                    <p>{book.synopsis}</p>
                    <div className="read-checkbox">
                        <input 
                          onClick={()=>{dispatch(toggleRead(book.id))}}
                          type="checkbox" 
                          defaultChecked={book.isRead} />
                        <label>{ book.isRead ? "Liked" : "" }</label>
                    </div>
                    <div onClick={()=>handleEraseBook(book.id)} className="erase-book">
                        Delete Blog
                    </div>
                </div>
              </div>

              <Notes bookId={id} />
            </div> 
            
            : 
            
            <div>
              <p>Blog not found. Click the button above to go back to the list of blogs.</p>
            </div>

            }
            

        </div>

        
      </>
    )
  }
  
  export default SingleBookPage
  