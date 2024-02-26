import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    currentUser: null
  },
  reducers: {
    addNote: (notes, action) => {
      let newNote = action.payload;
      newNote.id = notes.length ? Math.max(...notes.map(note=> note.id)) + 1 : 1;
      notes.push(newNote);
    },
    eraseNote: (notes, action) => {
        return notes.filter(note => note.id != action.payload);
    },
    eraseBookNotes: (notes, action) => {
        return notes.filter(note => note.book_id != action.payload);
    }
  }
})

export const { addNote, eraseNote, eraseBookNotes } = notesSlice.actions;

export const selectNotes = state => state.notes;

export default notesSlice.reducer;