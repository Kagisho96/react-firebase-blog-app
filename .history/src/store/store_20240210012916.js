import Reducer from "./notesSlice.js";
import booksReducer from "./booksSlice.js";
import notesusersReducer from "./notesSlice.js";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    books: booksReducer,
    notes: notesReducer,
    users: usersReducer
  }
})