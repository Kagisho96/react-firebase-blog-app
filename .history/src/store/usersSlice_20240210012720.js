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

export const selectUse = state => state.notes;

export default usersSlice.reducer;