import { Stack } from "@mui/material";
import DarkModeSwitch from "../theme/components/DarkModeSwitch";
import SearchBar from "../features/recipe/components/SearchBar";
import { useNavigate } from "react-router";
import { Favorite, Home } from "@mui/icons-material";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      p={"15px"}
    >
      <Stack direction={"row"} justifyContent={"space-between"} width={"30%"}>
        <Home onClick={() => navigate("/")} fontSize="large" />
        <Favorite onClick={() => navigate("/favorite")} fontSize="large" />
        <SearchBar />
      </Stack>
      <DarkModeSwitch />
    </Stack>
  );
};

export default NavBar;
