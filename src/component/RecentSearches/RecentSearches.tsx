import { Box, Chip, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { style } from "./RecentSearchesStyle";

const RecentSearches = () => {
  const recentSearches = useSelector(
    (state: RootState) => state.search.recentSearches
  );
  return (
    <Box sx={{ mt: 1 }}>
      <Typography variant="body1">Recent Searches</Typography>
      <Stack direction="row" spacing={1}>
        {recentSearches.map((searches, index) => (
          <Chip key={index} sx={style.chip} label={searches} />
        ))}
      </Stack>
    </Box>
  );
};

export default RecentSearches;
