import { createSlice } from "@reduxjs/toolkit";
import { getSearchedStories } from "../actions/searchAction";
import { Stories } from "./newsSlice";

export interface SearchTerm {
  searchTerm: string;
}
const recentSearches: string[] = [];
const initialState = {
  searchTerm: {} as SearchTerm,
  searchedStories: {} as Stories,
  recentSearches,
  loading: false,
  success: false,
  error: null,
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
    builder.addCase(getSearchedStories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSearchedStories.fulfilled, (state, action) => {
      state.loading = false;
      state.searchedStories.results = action.payload.response.docs;
      state.success = true;
    });
    builder.addCase(getSearchedStories.rejected, (state) => {
      state.success = false;
    });
  },
});

export const { setSearchTerm } = searchSlice.actions;
export const { appendToRecentSearch } = searchSlice.actions;
export default searchSlice.reducer;
