import { createSlice } from "@reduxjs/toolkit";

interface IErrorState {
  latestError: string;
  [key: string]: string;
}

const initialState: IErrorState = {
  latestError: "",
};

const errorsSlice = createSlice({
  name: "error",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => {
        return action.type.endsWith("/rejected");
      },
      (state, { payload, type }) => {
        state.latestError = payload;
        state[type.replaceAll("/rejected", "")] = payload;
        return state;
      }
    );
  },
});

export default errorsSlice.reducer;
