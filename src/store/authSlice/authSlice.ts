import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthState, User, fetchUserData, login } from '.';

const initialState: AuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    resetToken: (state) => {
      state.token = null;
    },
    resetUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action: PayloadAction<string>) => {
        state.token = action.payload;
      })

      .addCase(
        fetchUserData.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.user = action.payload;
        },
      );
  },
});

export const { setToken, resetToken, resetUser } = authSlice.actions;

export default authSlice.reducer;
