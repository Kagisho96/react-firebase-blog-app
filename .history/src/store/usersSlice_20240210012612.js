import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    currentUser: null
  },
  reducers: {
    setUsers: (users, action) => {
        users.currentUser = action.payload;
    }
  }
})

export const { , eraseNote, eraseBookNotes } = notesSlice.actions;

export const selectNotes = state => state.notes;

export default notesSlice.reducer;