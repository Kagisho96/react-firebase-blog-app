import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleRead } from "../store/booksSlice.js";

// import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { toggleRead } from "../store/booksSlice.js";

  
// function Book({book}) {
    
//     const dispatch = useDispatch();
    
//     function handleToggleRead(e, id) {
//         e.preventDefault();
//         dispatch(toggleRead(id));
//     }

//     return (
//         <>  
//             <Link to={'/book/' + book.id}>
//                 <div className="book">
//                     {
//                         book.isRead && 
//                         <div className="readIt">
//                             <i className="fa-solid fa-eye"></i>
//                         </div>
//                     }
                    
//                     <div className="book-cover">
//                         <img src={book.cover} />

//                         <button onClick={(e)=>{handleToggleRead(e, book.id)}} className={book.isRead ? 'isRead' : ''}>
//                             <i className="fa-solid fa-eye"></i>
//                             <span>{ book.isRead ? "Already Read It" : "Haven't Read it yet" }</span>
//                         </button>
//                     </div>

//                     <div className="book-details">
//                         <p className="book-author">{ book.author }</p>
//                         <h3 className="book-title">{ book.title }</h3>
//                     </div>
//                 </div>
//             </Link>

//         </>
//     )
// }

// export default Book



function Book({book}) {
    
    const dispatch = useDispatch();
    
    function handleToggleRead(e, id) {
        e.preventDefault();
        dispatch(toggleRead(id));
    }

    return (
        <>  
            <Link to={'/book/' + book.id}>
                <div className="book">
                    {
                        book.isRead && 
                        <div className="readIt">
                            <i className="fa-solid fa-eye"></i>
                        </div>
                    }
                    
                    <div className="book-cover">
                        <img src={book.cover} className="w-full h-full object-cover" />

                        <button onClick={(e)=>{handleToggleRead(e, book.id)}} className={`absolute bottom-0 left-0 w-full bg-${book.isRead ? 'green' : 'red'} text-white ${book.isRead ? 'bg-green-600' : 'bg-red-600'} py-2 px-4 text-sm font-bold`}>
                            <i className="fa-solid fa-eye"></i>
                            <span>{ book.isRead ? "Already Read It" : "Haven't Read it yet" }</span>
                        </button>
                    </div>

                    <div className="book-details">
                        <p className="book-author">{ book.author }</p>
                        <h3 className="book-title">{ book.title }</h3>
                    </div>
                </div>
            </Link>

            <Link to={'/book/' + book.id} key={blog.id} className="p-5 cursor-pointer rounded-md shadow-lg"
           >
            <div className="">
                <img src={blog.image} className="w-full" alt="" />
            </div>
            <h3 className="mt-4 mb-2 font-bold cursor-pointer hover:text-blue-700">{blog.title}</h3>
            <p className="mb-2 text-gray-600"> <FaUser className="mr-2 inline-flex items-center"/>{blog.author}</p>
            <p className="text-sm text-gray-500">Published: {blog.published_date}</p>

           </Link>)

        </>
    )
}

export default Book
