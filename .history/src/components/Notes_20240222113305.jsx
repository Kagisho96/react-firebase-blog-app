import { useDispatch, useSelector } from "react-redux";
import { addNote, eraseNote, selectNotes } from "../store/notesSlice.js";

function Notes({bookId:ant}) {
    
    const dispatch = useDispatch();
    
    function handleEraseNote(id) {
      if(confirm('Are you sure you want to erase this note?')) {
        dispatch(eraseNote(id));
      }
    }

    function handleAddNote(e) {
      e.preventDefault();

      const newNote = {
        book_id: bookId,
        title: document.querySelector('input[name=title]').value,
        text: document.querySelector('textarea[name=note]').value
      }
      if (newNote.title && newNote.text) {
          dispatch(addNote(newNote));
          document.querySelector('input[name=title]').value = "";
          document.querySelector('textarea[name=note]').value = "";
      } else {
          alert('Please fill the mandatory fields.');
      }

  }

    const notes = useSelector(selectNotes).filter(note => note.book_id == bookId);
    
    return (
      <>

        <div className="notes-wrapper">

            <h2>Comments Below</h2>

            {notes.length ?

              <div className="notes">
              {notes.map(note => 
                  <div key={note.id} className="note">
                      <div onClick={()=>handleEraseNote(note.id)} className="erase-note">Delete Blog</div>
                      <h3>{note.title}</h3>
                      <p>{note.text}</p>
                  </div>
                  )}
              </div>

              :

              <p>This blog does not have comments yet. Use the form below to comment.</p>
            }
            

            <details>
                <summary>Add a comment</summary>
                <form className="add-note">
                    <div className="form-control">
                        <label>About *</label>
                        <input type="text" name="title" placeholder="Add a note title" />
                    </div>
                    <div className="form-control">
                        <label>Comment *</label>
                        <textarea type="text" name="note" placeholder="Add note" />
                    </div>
                    
                    <button onClick={(e)=>{handleAddNote(e)}}className="btn btn-block">Add Comment</button>
                </form>
            </details>

        </div>

      </>
    )
  }
  
  export default Notes
  