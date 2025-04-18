import { Box, TextField } from "@mui/material";

const SearchBar = () => {
  return (
    <Box alignContent={"center"} textAlign={"center"} sx={{ width: "75%" }}>
      <TextField variant="outlined" label="Search" size="small" sx={{width: "100%"}}/>
    </Box>
  );
};

export default SearchBar;
