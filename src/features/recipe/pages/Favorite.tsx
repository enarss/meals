import { useSelector } from "react-redux";
import { RootState } from "../../../store/rootReducer";
import { Typography } from "@mui/material";
import RecipeList from "../components/RecipeList";

const Favorite = () => {
  const { list } = useSelector((state: RootState) => state.favorites);
  return (
    <>
    <Typography variant="h1" fontSize={"40px"} mb={"25px"} mt={"15px"} textAlign={"center"}>Favorites</Typography>
    <RecipeList meals={list} />
    </>
  );
};

export default Favorite;
