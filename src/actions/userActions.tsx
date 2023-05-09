import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../slice/authSlice";
export const actionTypes = {
  LOGIN: "user/LOGIN",
  SIGNUP: "user/SIGNUP",
};

export const login = createAsyncThunk(actionTypes.LOGIN, async (data: User) => {
  const response = await axios.post(`http://localhost:8000/auth/login`, data);
  return response.data;
});

export const signUp = createAsyncThunk(
  actionTypes.SIGNUP,
  async (data: User) => {
    const response = await axios.post(
      `http://localhost:8000/auth/register`,
      data
    );
    return response.data;
  }
);
