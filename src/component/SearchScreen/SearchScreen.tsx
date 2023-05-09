import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { getSearchedStories } from "../../actions/searchAction";
import { useAppDispatch } from "../../hook/useAppDispatch";
import { appendToRecentSearch, setSearchTerm } from "../../slice/searchSlice";
import { RootState } from "../../store";
import RecentSearches from "../RecentSearches/RecentSearches";
import SearchedStories from "../SearchedStories/SearchedStories";
import { style } from "./SearchScreenStyle";

const SearchScreen = () => {
  const initialValue = {
    searchTerm: "",
  };

  const status = useSelector((state: RootState) => state.search.success);
  const searchResult = useSelector(
    (state: RootState) => state.search.searchedStories
  );
  const dispatch = useAppDispatch();
  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValue,
    onSubmit: (values) => {
      dispatch(setSearchTerm(values));
      dispatch(appendToRecentSearch());
      dispatch(getSearchedStories(values));
    },
  });
  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <Box component="form" sx={style.box} onSubmit={handleSubmit}>
        <Stack direction="row" spacing={5}>
          <TextField
            id="filled-search"
            label="Search Article"
            type="search"
            variant="filled"
            name="searchTerm"
            value={values.searchTerm}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Button
            type="submit"
            variant="contained"
            size="small"
            sx={style.button}
          >
            Search
          </Button>
        </Stack>
        <RecentSearches />
      </Box>
      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          {!status ? (
            <h3>no searches yet..</h3>
          ) : status ? (
            searchResult.results.map((stories, index) => (
              <SearchedStories key={index} data={stories} />
            ))
          ) : (
            <></>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default SearchScreen;
