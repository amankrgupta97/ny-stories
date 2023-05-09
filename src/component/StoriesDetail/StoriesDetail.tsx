import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { RootState } from "../../store";

const StoriesDetail = () => {
  // const { id } = useParams() as { id: string };
  // const { type } = useParams() as { type: string };
  // const data = useSelector((state: RootState) => state.news);
  return (
    <Box>
      <Card sx={{ maxWidth: 600, mt: 5, minHeight: 500, maxHeight: 500 }}>
        <CardMedia
          component="img"
          alt=""
          height="140"
          image=""
          //   data !== undefined && data.multimedia !== null
          //     ? data.multimedia[0].url
          //     : "unavialable"
          // }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {/* {data.title} */}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* {data.abstract} */}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default StoriesDetail;
