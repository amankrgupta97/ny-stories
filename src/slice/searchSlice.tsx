import { createSlice } from "@reduxjs/toolkit";
import { fetchApiSearchedStories } from "../actions/searchAction";
import { results } from "./newsSlice";

export interface SearchTerm {
  searchTerm: string;
}
const recentSearches: string[] = [];
const initialState = {
  searchTerm: {} as SearchTerm,
  searchedStories: {
    results,
  },
  recentSearches,
  success: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm.searchTerm = action.payload.searchTerm;
    },
    appendToRecentSearch(state) {
      if (state.recentSearches.length < 5)
        state.recentSearches.push(state.searchTerm.searchTerm);
      else {
        state.recentSearches.shift();
        state.recentSearches.push(state.searchTerm.searchTerm);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiSearchedStories.fulfilled, (state, action) => {
      state.searchedStories.results = action.payload.response.docs;
      state.success = true;
    });
  },
});

export const { setSearchTerm } = searchSlice.actions;
export const { appendToRecentSearch } = searchSlice.actions;
export default searchSlice.reducer;
