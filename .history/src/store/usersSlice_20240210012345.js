import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: 'notes',
  initialState: {
    currentUser: null
  },
  reducers: {
    eraseBookNotes: (notes, action) => {
        return notes.filter(note => note.book_id != action.payload);
    }
  }
})

export const { addNote, eraseNote, eraseBookNotes } = notesSlice.actions;

export const selectNotes = state => state.notes;

export default notesSlice.reducer;