import { createSlice } from "@reduxjs/toolkit";
import { login, signUp } from "../actions/userActions";

export interface User {
  email: string;
  password: string;
}

const initialState = {
  loading: false,
  token: "",
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload.access_token;
      state.success = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(signUp.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default authSlice.reducer;
