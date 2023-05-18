import { useEffect } from "react";
import { useAppDispatch } from "../../hook/useAppDispatch";
import {
  fetchApiScienceStories,
  fetchApiTopStories,
  fetchApiWorldStories,
} from "../../actions/newsActions";
import TopStoriesListing from "../TopStoriesListing/TopStoriesListing";

const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchApiTopStories());
    dispatch(fetchApiWorldStories());
    dispatch(fetchApiScienceStories());
  }, [dispatch]);

  return <TopStoriesListing />;
};

export default Home;
