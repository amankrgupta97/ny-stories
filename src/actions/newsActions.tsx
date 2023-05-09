import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiKey } from "../constants/apiKey";

const actionTypes = {
  TOPSTORIES: "news/TOPSTORIES",
  WORLD: "news/WORLD",
  SCIENCE: "news/SCIENCE",
};

export const getTopStories = createAsyncThunk(
  actionTypes.TOPSTORIES,
  async () => {
    const response = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`
    );
    return response.data;
  }
);

export const getWorldStories = createAsyncThunk(actionTypes.WORLD, async () => {
  const response = await axios.get(
    `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${apiKey}`
  );
  return response.data;
});

export const getScienceStories = createAsyncThunk(
  actionTypes.SCIENCE,
  async () => {
    const response = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${apiKey}`
    );
    return response.data;
  }
);
