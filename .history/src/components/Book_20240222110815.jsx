import { FaUser } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleRead } from "../store/booksSlice.js";

function Book({ book }) {
  const dispatch = useDispatch();

  function handleToggleRead(e, id) {
    e.preventDefault();
    dispatch(toggleRead(id));
  }

  return (
    <>
      <Link to={"/book/" + book.id}>
        <div className="book p-5 cursor-pointer rounded-md shadow-lg">
          {book.isRead && (
            <div className="readIt">
              <i className="fa-solid fa-eye"></i>
            </div>
          )}

          <div className="book-cover">
            <img src={book.cover} className="w-full h-full object-cover" />

            <button
              onClick={(e) => {
                handleToggleRead(e, book.id);
              }}
              className={`absolute bottom-0 left-0 w-full bg-${
                book.isRead ? "green" : "red"
              } text-white ${
                book.isRead ? "bg-green-600" : "bg-red-600"
              } py-2 px-4 text-sm font-bold`}
            >
              <i className="fa-solid fa-eye"></i>
              <span
              >
                {book.isRead ? "Liked Post" : "Not et liked Post"}
              </span>
            </button>
          </div>

          <div className="book-details">
            <p className="mb-2 text-gray-600">
              {" "}
              <FaUser className="mr-2 inline-flex items-center" />
              {book.author}
            </p>
            <h3 className="book-title mt-4 mb-2 font-bold cursor-pointer hover:text-blue-700">
              {book.title}
            </h3>
          </div>
        </div>
      </Link>
    </>
  );
}


export default Book;
