import { createSlice } from "@reduxjs/toolkit";
import { login, signUp } from "../actions/userActions";

const initialState = {
  token: "",
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.access_token;
      state.success = true;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.token = action.payload;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
