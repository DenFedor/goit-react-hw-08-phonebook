import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrentUser, login, logout, register } from './auth-operations';
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(fetchCurrentUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      });
  },
});
export const authReducer = authSlice.reducer;
