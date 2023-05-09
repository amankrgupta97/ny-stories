import { useEffect } from "react";
import { useAppDispatch } from "../../hook/useAppDispatch";
import {
  getScienceStories,
  getTopStories,
  getWorldStories,
} from "../../actions/newsActions";
import TopStoriesListing from "../TopStoriesListing/TopStoriesListing";

const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTopStories());
    dispatch(getWorldStories());
    dispatch(getScienceStories());
  }, [dispatch]);

  return <TopStoriesListing />;
};

export default Home;
