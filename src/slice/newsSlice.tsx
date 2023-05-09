import { createSlice } from "@reduxjs/toolkit";
import { getTopStories } from "../actions/newsActions";
import { getWorldStories } from "../actions/newsActions";
import { getScienceStories } from "../actions/newsActions";

export interface Stories {
  results: [];
}

const initialState = {
  topStories: {} as Stories,
  worldStories: {} as Stories,
  scienceStories: {} as Stories,
  loading: false,
  success: false,
  error: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTopStories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTopStories.fulfilled, (state, action) => {
      state.loading = false;
      state.topStories.results = action.payload.results;
      state.success = true;
    });
    builder.addCase(getTopStories.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getWorldStories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getWorldStories.fulfilled, (state, action) => {
      state.loading = false;
      state.worldStories.results = action.payload.results;
      state.success = true;
    });
    builder.addCase(getWorldStories.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getScienceStories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getScienceStories.fulfilled, (state, action) => {
      state.loading = false;
      state.scienceStories.results = action.payload.results;
      state.success = true;
    });
    builder.addCase(getScienceStories.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default newsSlice.reducer;
