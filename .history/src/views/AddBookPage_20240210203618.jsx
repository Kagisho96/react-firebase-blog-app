import Header from "../components/Header.jsx";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../store/booksSlice.js";

function AddBookPage() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleAddBook(e) {
        e.preventDefault();

        const newBook = {
            title: document.querySelector('input[name=title]').value,
            cover: document.querySelector('input[name=cover]').value,
            isRead: false,
            author: document.querySelector('input[name=author]').value,
            synopsis: document.querySelector('textarea[name=synopsis]').value
        }

        if (newBook.title && newBook.cover && newBook.author) {
            dispatch(addBook(newBook));
            alert('Book created successfully!');
            navigate("/");
        } else {
            alert('Please fill the mandatory fields.');
        }

    }
    
    const pageTitle = "Add Book";

    return (
      <>
        <div className="container">
            

            <form className="add-form">
            <p className="text-xl uppercase mt-6 mb-5 font-semibold text-center">
              Add new Blog
            </p>
                <div className="">
                    <label>Title:</label>
                    <input type="text" name="title" placeholder="blog title" />
                </div>
                <div className="">
                    <label>Blog Image:</label>
                    <input type="text" name="cover" placeholder="link of the image" className="w-full border rounded-md border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:shadow-md focus:border-[#6a64f1] text-[#6B7280]"/>
                </div>

                <div className="form-control">
                <label>Author</label>
                <input
                    type="text" name="author" placeholder="name of the author" className="w-full border rounded-md border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:shadow-md focus:border-[#6a64f1] text-[#6B7280]"/>
                </div>

                <div className="form-control">
                <label>Synopsis</label>
                <textarea
                    type="text" name="synopsis" placeholder="Add a synopsis..." />
                </div>
                
                <button onClick={(e)=> handleAddBook(e)} className="btn btn-block">Save Blog</button>
            </form>

        </div>

        
      </>
    )
  }
  
  export default AddBookPage
  