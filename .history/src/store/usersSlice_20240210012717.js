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

export const { setUsers } = usersSlice.actions;

export const select = state => state.notes;

export default usersSlice.reducer;