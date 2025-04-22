import { Box, TextField } from "@mui/material";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../slices/recipeSlice";
import { fetchMealsBySearch } from "../services/getRecipeBySearchThunk";
import { AppDispatch } from "../../../store/rootReducer";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setQuery(value);
      dispatch(setSearchQuery(value));
      dispatch(fetchMealsBySearch(value));
      console.log("object");
    },
    [dispatch, query]
  );

  return (
    <Box alignContent={"center"} textAlign={"center"} sx={{ width: "75%" }}>
      <TextField
        variant="outlined"
        label="Search"
        size="small"
        sx={{ width: "100%" }}
        value={query}
        onChange={handleChange}
      />
    </Box>
  );
};

export default SearchBar;
