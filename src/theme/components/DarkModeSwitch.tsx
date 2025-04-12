import { Typography } from "@mui/material";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import { useColorScheme } from "@mui/material/styles";

const DarkModeSwitch = () => {
  const { mode, setMode } = useColorScheme();
  const toggleColorMode = () => {
    if (mode === "dark") setMode("light");
    else if (mode === "light") setMode("dark");
  };
  return (
    <Stack direction={"row"} alignItems={"center"}>
      <Switch defaultChecked onChange={toggleColorMode} />
      <Typography fontSize={"16px"}>Dark Mode</Typography>
    </Stack>
  );
};

export default DarkModeSwitch;
