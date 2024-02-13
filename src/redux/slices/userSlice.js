import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userDetails: null,
    isLoggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      state.userDetails = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.userDetails = null;
      state.isLoggedIn = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
