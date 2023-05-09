import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

const SearchedStories = (props: any) => {
  const { data } = props;
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ maxHeight: 600, minHeight: 600 }}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {data.abstract}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.lead_paragraph}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => window.open(data.web_url)}>
            See More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default SearchedStories;
