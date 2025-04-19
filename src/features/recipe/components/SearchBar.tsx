import { Box, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../slices/recipeSlice";
import { fetchMealsBySearch } from "../services/getRecipeBySearchThunk";
import { AppDispatch, RootState } from "../../../store/rootReducer";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const { searchQuery } = useSelector((state: RootState) => state.recipes.filters);

  useEffect(() => {
    dispatch(fetchMealsBySearch(searchQuery ? searchQuery : ""));
  }, [searchQuery]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    dispatch(setSearchQuery(value));
  };
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
