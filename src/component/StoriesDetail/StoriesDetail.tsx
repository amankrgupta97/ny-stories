import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hook/useAppSelector";
import { getAllStories } from "../../selector/newsSelector";

const StoriesDetail = () => {
  const { id } = useParams() as { id: any };
  const { type } = useParams() as { type: string };
  const data = useAppSelector(getAllStories);
  const handleCheckSource = () => {
    if (type === "topStories") {
      if (data.topStories.results[id].url !== null) {
        window.open(data.topStories.results[id].url);
      } else alert("link Unavailable");
    } else if (type === "worldStories") {
      if (data.worldStories.results[id].url !== null)
        window.open(data.worldStories.results[id].url);
      else alert("link Unavailable");
    } else if (type === "scienceStories") {
      if (data.scienceStories.results[id].url !== null)
        window.open(data.scienceStories.results[id].url);
      else alert("link Unavailable");
    }
  };
  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Card>
        <CardMedia
          component="img"
          alt={
            type === "topStories"
              ? data.topStories.results[id].multimedia !== null
                ? data.topStories.results[id].multimedia[0].caption
                : null
              : type === "worldStories"
              ? data.worldStories.results[id].multimedia !== null
                ? data.worldStories.results[id].multimedia[0].caption
                : null
              : type === "scienceStories"
              ? data.scienceStories.results[id].multimedia !== null
                ? data.scienceStories.results[id].multimedia[0].caption
                : null
              : null
          }
          height="400"
          image={
            type === "topStories"
              ? data.topStories.results[id].multimedia !== null
                ? data.topStories.results[id].multimedia[0].url
                : null
              : type === "worldStories"
              ? data.worldStories.results[id].multimedia !== null
                ? data.worldStories.results[id].multimedia[0].url
                : null
              : type === "scienceStories"
              ? data.scienceStories.results[id].multimedia !== null
                ? data.scienceStories.results[id].multimedia[0].url
                : null
              : null
          }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {type === "topStories" ? (
              data.topStories.results[id].title
            ) : type === "worldStories" ? (
              data.worldStories.results[id].title
            ) : type === "scienceStories" ? (
              data.scienceStories.results[id].title
            ) : (
              <></>
            )}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {type === "topStories" ? (
              data.topStories.results[id].abstract
            ) : type === "worldStories" ? (
              data.worldStories.results[id].abstract
            ) : type === "scienceStories" ? (
              data.scienceStories.results[id].abstract
            ) : (
              <></>
            )}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleCheckSource}>Check Source</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default StoriesDetail;
