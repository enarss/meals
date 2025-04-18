import { IconButton, Stack } from "@mui/material";
import DarkModeSwitch from "../theme/components/DarkModeSwitch";
import SearchBar from "../features/recipe/components/SearchBar";
import { useLocation, useNavigate } from "react-router";
import { Favorite, Home } from "@mui/icons-material";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isFavorite = location.pathname === "/favorite";
  return (
    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} p={"15px"}>
      <Stack direction={"row"} justifyContent={"space-between"} width={"25%"} gap={"10px"}>
        <IconButton onClick={() => navigate("/")}>
          <Home fontSize="large" color={isHome ? "primary" : "disabled"} />
        </IconButton>
        <IconButton onClick={() => navigate("/favorite")}>
          <Favorite fontSize="large" color={isFavorite ? "primary" : "disabled"} />
        </IconButton>
        <SearchBar />
      </Stack>
      <DarkModeSwitch />
    </Stack>
  );
};

export default NavBar;
