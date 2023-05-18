import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  SCIENCESTORIESCONFIG,
  TOPSTORIESCONFIG,
  WORLDSTORIESCONFIG,
} from "../helpers/constants";

export const actionTypes = {
  TOPSTORIES: "news/fetchTopStories",
  WORLD: "news/fetchWorldStories",
  SCIENCE: "news/fetchScienceStories",
};

export const fetchApiTopStories = createAsyncThunk(
  actionTypes.TOPSTORIES,
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios(TOPSTORIESCONFIG);
      return response.data;
    } catch (err: any) {
      if (!err.response) throw err;
      return rejectWithValue(err.response.data);
    }
  }
);

export const fetchApiWorldStories = createAsyncThunk(
  actionTypes.WORLD,
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios(WORLDSTORIESCONFIG);
      return response.data;
    } catch (err: any) {
      if (!err.response) throw err;
      return rejectWithValue(err.response.data);
    }
  }
);

export const fetchApiScienceStories = createAsyncThunk(
  actionTypes.SCIENCE,
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios(SCIENCESTORIESCONFIG);
      return response.data;
    } catch (err: any) {
      if (!err.response) throw err;
      return rejectWithValue(err.response.data);
    }
  }
);
