import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const StoriesCard = (props: any) => {
  const { id } = props;
  const { type } = props;
  const { data } = props;
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ maxWidth: 345, mt: 5, minHeight: 500, maxHeight: 500 }}>
        <CardMedia
          component="img"
          alt={
            data.multimedia !== null
              ? data.multimedia[0].caption
              : "unavailable"
          }
          height="140"
          image={
            data !== undefined && data.multimedia !== null
              ? data.multimedia[0].url
              : "unavialable"
          }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.abstract}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/stories-detail/${type}/${id}`}>
            <Button size="small">See More</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default StoriesCard;
