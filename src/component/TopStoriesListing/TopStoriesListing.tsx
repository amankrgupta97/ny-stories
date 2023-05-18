import { Box, Chip, Container, CssBaseline, Grid, Stack } from "@mui/material";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { style } from "./TopStoriesListingStyle";
import StoriesCard from "../StoriesCard/StoriesCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hook/useAppSelector";
import {
  getScienceStories,
  getTopStories,
  getWorldStories,
} from "../../selector/newsSelector";

const TopStoriesListing = () => {
  const [isWorld, setIsWorld] = useState(false);
  const [isScience, setIsScience] = useState(false);
  const topStories = useAppSelector(getTopStories);
  const worldStories = useAppSelector(getWorldStories);
  const scienceStories = useAppSelector(getScienceStories);
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
            {!isScience && !isWorld ? (
              topStories.results.map((stories, index) => (
                <StoriesCard
                  key={index}
                  data={stories}
                  id={index}
                  type={"topStories"}
                />
              ))
            ) : isWorld ? (
              worldStories.results.map((stories, index) => (
                <StoriesCard
                  key={index}
                  data={stories}
                  type={"worldStories"}
                  id={index}
                />
              ))
            ) : isScience ? (
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
