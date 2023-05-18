import { RootState } from "../store";

export const getTopStories = (state: RootState) => state.news.topStories;
export const getWorldStories = (state: RootState) => state.news.worldStories;
export const getScienceStories = (state: RootState) =>
  state.news.scienceStories;

export const getAllStories = (state: RootState) => state.news;

export const getStoriesStatus = (state: RootState) => state.news.success;
