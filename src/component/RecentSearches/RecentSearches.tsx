import { Box, Chip, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useAppSelector } from "../../hook/useAppSelector";
import { getRecentSearches } from "../../selector/searchSelector";

import { style } from "./RecentSearchesStyle";

const RecentSearches = () => {
  const recentSearches = useAppSelector(getRecentSearches);
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
