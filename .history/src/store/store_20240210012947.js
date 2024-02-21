import booksReducer from "./booksSlice.js";
import notesReducer from "./notesSlice.js";
import usersReducer from "./";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    books: booksReducer,
    notes: notesReducer,
    users: usersReducer
  }
})