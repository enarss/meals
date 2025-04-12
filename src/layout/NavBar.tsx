import { Stack } from "@mui/material"
import DarkModeSwitch from "../theme/components/DarkModeSwitch"
import SearchBar from "../features/recipe/components/SearchBar"

const NavBar = () => {
    return (
        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} p={"15px"}>
            <SearchBar />
            <DarkModeSwitch />
        </Stack>
    )
}

export default NavBar