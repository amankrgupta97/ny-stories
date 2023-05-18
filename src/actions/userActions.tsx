import { createAsyncThunk } from "@reduxjs/toolkit";
import httpAuthClient from "../controllers/httpAuthClient";
import { LOGIN, SIGNUP } from "../helpers/constants";
export const actionTypes = {
  LOGIN: "user/LOGIN",
  SIGNUP: "user/SIGNUP",
};

interface User {
  email: string;
  password: string;
}

export const login = createAsyncThunk(
  actionTypes.LOGIN,
  async (data: User, { rejectWithValue }) => {
    try {
      const response = await httpAuthClient.post(LOGIN, data);
      return response.data;
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const signUp = createAsyncThunk(
  actionTypes.SIGNUP,
  async (data: User, { rejectWithValue }) => {
    try {
      const response = await httpAuthClient.post(SIGNUP, data);
      return response.data;
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
