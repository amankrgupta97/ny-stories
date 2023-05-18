import { RootState } from "../store";

export const getSearchTerm = (state: RootState) => state.search.searchTerm;
export const getRecentSearches = (state: RootState) =>
  state.search.recentSearches;
export const getSearchedStories = (state: RootState) =>
  state.search.searchedStories;
export const getSearchStatus = (state: RootState) => state.search.success;
