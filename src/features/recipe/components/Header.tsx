import { Stack, Typography } from "@mui/material";
import gorme from "../assets/ghorme.png";
import { motion } from "framer-motion";
import { useIsMediumScreen } from "../../../theme/colors";

const Header = () => {
  const isMediumScreen = useIsMediumScreen();
  return (
    <Stack
      direction={isMediumScreen ? "column" : "row"}
      alignItems={"center"}
      justifyContent={"center"}
      mb={"30px"}
      p={"30px"}
      gap={"10px"}
    >
      <motion.img
        src={gorme}
        width="15%"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        style={{ minWidth: "210px" }}
      />
      <Stack sx={isMediumScreen ? {} : { width: "60%", maxWidth: "calc(100% - 500px)" }}>
        <Typography variant="h1" textAlign={"center"} fontSize={"40px"} mb={"10px"}>
          Welcome to Meals List Website
        </Typography>
        <Typography variant="h4" textAlign={"center"} fontSize={"18px"}>
          Discover a world of flavors with our collection of easy and delicious recipes. From quick
          weeknight dinners to mouthwatering desserts, there's something for everyone. Browse, cook,
          and enjoy. your next favorite dish is just a click away!
        </Typography>
      </Stack>

      {!isMediumScreen && (
        <motion.img
          src={gorme}
          width="15%"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          style={{ minWidth: "210px" }}
        />
      )}
    </Stack>
  );
};

export default Header;
