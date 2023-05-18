import { createAsyncThunk } from "@reduxjs/toolkit";
import { SearchTerm } from "../slice/searchSlice";
import httpSearchClient from "../controllers/httpSearchClient";

export const actionTypes = {
  SEARCHSTORIES: "search/fetchStories",
};

export const fetchApiSearchedStories = createAsyncThunk(
  actionTypes.SEARCHSTORIES,
  async (searchTerm: SearchTerm, { rejectWithValue }) => {
    try {
      const response = await httpSearchClient.get(
        `/search/v2/articlesearch.json?q=${searchTerm.searchTerm}`
      );
      return response.data;
    } catch (err: any) {
      if (!err.response) throw err;
      return rejectWithValue(err.response.data);
    }
  }
);
