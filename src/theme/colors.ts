import { useMediaQuery } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
  palette: {},
});

export const useIsSmallScreen = () => {
  return useMediaQuery(theme.breakpoints.down("sm"));
};
export const useIsMediumScreen = () => {
  return useMediaQuery(theme.breakpoints.down("md"));
};
