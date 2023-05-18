import { createSlice } from "@reduxjs/toolkit";
import { fetchApiTopStories } from "../actions/newsActions";
import { fetchApiWorldStories } from "../actions/newsActions";
import { fetchApiScienceStories } from "../actions/newsActions";

export const results: any[] = [];

const initialState = {
  topStories: {
    results,
  },
  worldStories: { results },
  scienceStories: { results },
  success: false,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchApiTopStories.fulfilled, (state, action) => {
      state.topStories.results = action.payload.results;
      state.success = true;
    });
    builder.addCase(fetchApiWorldStories.fulfilled, (state, action) => {
      state.worldStories.results = action.payload.results;
      state.success = true;
    });
    builder.addCase(fetchApiScienceStories.fulfilled, (state, action) => {
      state.scienceStories.results = action.payload.results;
      state.success = true;
    });
  },
});

export default newsSlice.reducer;
