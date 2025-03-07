import { createSlice } from "@reduxjs/toolkit";
import { setItem } from "../helpers/persistance-store";

const initialState = {
  isLoading: false,
  loggedIn: false,
  error: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signinUserStart: (state) => {
      state.isLoading = true;
    },
    signinUserSuccess: (state, action) => {
      state.loggedIn = true;
      state.isLoading = false;
      state.user = action.payload;
      setItem("token", action.payload.token);
    },
    signinUserFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { signinUserFailure, signinUserStart, signinUserSuccess } =
  authSlice.actions;
export default authSlice.reducer;
