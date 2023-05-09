import { Box, Chip, Container, CssBaseline, Grid, Stack } from "@mui/material";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { style } from "./TopStoriesListingStyle";
import StoriesCard from "../StoriesCard/StoriesCard";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

const TopStoriesListing = () => {
  const [isWorld, setIsWorld] = useState(false);
  const [isScience, setIsScience] = useState(false);
  const status = useSelector((state: RootState) => state.news.success);
  const topStories = useSelector((state: RootState) => state.news.topStories);
  const worldStories = useSelector(
    (state: RootState) => state.news.worldStories
  );
  const scienceStories = useSelector(
    (state: RootState) => state.news.scienceStories
  );
  const navigate = useNavigate();
  const handleWorldStories = () => {
    setIsScience(false);
    setIsWorld(true);
  };
  const handleTopStories = () => {
    setIsWorld(false);
    setIsScience(false);
  };
  const handleScienceStories = () => {
    setIsWorld(false);
    setIsScience(true);
  };

  const handleSearchStories = () => {
    navigate("/search-article");
  };
  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <Box>
        <Box sx={style.box}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 2, sm: 2, md: 3, lg: 4 }}
          >
            <Chip
              icon={<PublicOutlinedIcon />}
              label="World"
              sx={style.worldChip}
              onClick={handleWorldStories}
            />
            <Chip
              icon={<WhatshotOutlinedIcon />}
              label="Top Stories"
              sx={style.storiesChip}
              onClick={handleTopStories}
            />
            <Chip
              icon={<ScienceOutlinedIcon />}
              label="Science"
              sx={style.scienceChip}
              onClick={handleScienceStories}
            />
            <Chip
              icon={<SearchOutlinedIcon />}
              label="Search Stories"
              sx={style.searchChip}
              onClick={handleSearchStories}
            />
          </Stack>
        </Box>
        <Box>
          <Grid container spacing={2}>
            {!status ? (
              <LoadingScreen />
            ) : status && !isScience && !isWorld ? (
              topStories.results.map((stories, index) => (
                <StoriesCard
                  key={index}
                  data={stories}
                  id={index}
                  type={"topStories"}
                />
              ))
            ) : status && isWorld ? (
              worldStories.results.map((stories, index) => (
                <StoriesCard
                  key={index}
                  data={stories}
                  type={"worldStories"}
                  id={index}
                />
              ))
            ) : status && isScience ? (
              scienceStories.results.map((stories, index) => (
                <StoriesCard
                  key={index}
                  data={stories}
                  type={"scienceStories"}
                  id={index}
                />
              ))
            ) : (
              <></>
            )}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default TopStoriesListing;
