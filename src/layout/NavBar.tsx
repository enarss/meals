import { IconButton, Stack } from "@mui/material";
import DarkModeSwitch from "../theme/components/DarkModeSwitch";
import SearchBar from "../features/recipe/components/SearchBar";
import { useLocation, useNavigate } from "react-router";
import { Favorite, Home } from "@mui/icons-material";
import AreaFilter from "../features/recipe/components/AreaFilter";
import { useIsMediumScreen, useIsSmallScreen } from "../theme/colors";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isSmallScreen = useIsSmallScreen();
  const isMediumScreen = useIsMediumScreen();

  const isHome = location.pathname === "/";
  const isFavorite = location.pathname === "/favorite";
  return (
    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} p={"15px"}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        gap={"10px"}
        sx={isSmallScreen ? { width: "70%" } : isMediumScreen ? { width: "50%" } : { width: "35%" }}
      >
        <IconButton onClick={() => navigate("/")}>
          <Home fontSize="large" color={isHome ? "primary" : "disabled"} />
        </IconButton>
        <IconButton onClick={() => navigate("/favorite")}>
          <Favorite fontSize="large" color={isFavorite ? "primary" : "disabled"} />
        </IconButton>
        <SearchBar />
        <AreaFilter />
      </Stack>
      <DarkModeSwitch />
    </Stack>
  );
};

export default NavBar;
