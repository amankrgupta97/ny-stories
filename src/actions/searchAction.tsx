import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiKey } from "../constants/apiKey";
import { SearchTerm } from "../slice/searchSlice";

const actionTypes = {
  SEARCHSTORIES: "search/SEARCHSTORIES",
};

export const getSearchedStories = createAsyncThunk(
  actionTypes.SEARCHSTORIES,
  async (searchTerm: SearchTerm) => {
    const response = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm.searchTerm}&api-key=${apiKey}`
    );
    return response.data;
  }
);
