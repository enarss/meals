import { Stack, Typography } from "@mui/material";
import gorme from "../features/recipe/assets/ghorme.png";

const Header = () => {
  return (
    <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} mb={"30px"}>
      <img src={gorme} width={"15%"} />
      <Stack>
        <Typography variant="h1" textAlign={"center"} fontSize={"40px"} mb={"10px"}>
          Welcome to Meals List Website
        </Typography>
        <Typography variant="h4" textAlign={"justify"} fontSize={"18px"}>
          Discover a world of flavors with our collection of easy and delicious
          recipes. From quick weeknight dinners to mouthwatering desserts,
          there's something for everyone. Browse, cook, and enjoy — your next
          favorite dish is just a click away!
        </Typography>
      </Stack>
      <img src={gorme} width={"15%"} />
    </Stack>
  );
};

export default Header;
