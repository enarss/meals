import { Box, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../slices/recipeSlice";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    dispatch(setSearchQuery(value));
  };
  return (
    <Box alignContent={"center"} textAlign={"center"} sx={{ width: "75%" }}>
      <TextField variant="outlined" label="Search" size="small" sx={{width: "100%"}} value={query} onChange={handleChange}/>
    </Box>
  );
};

export default SearchBar;
