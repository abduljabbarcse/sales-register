import { createSlice } from '@reduxjs/toolkit';

const savedUser = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: savedUser || null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      const { username, password } = action.payload;

      if (username === 'Sam' && password === 'Sam@123') {
        state.user = { username };
        state.error = null;
      } else {
        state.user = null;
        state.error = 'Invalid credentials';
      }
    },
    logout(state) {
      state.user = null;
      state.error = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;