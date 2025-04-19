import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/rootReducer";
import { useEffect } from "react";
import { fetchMeals } from "../services/getRecipesAsyncThunk";
import { Box, CircularProgress } from "@mui/material";
import Header from "../components/Header";
import RecipeList from "../components/RecipeList";

const List = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading, error } = useSelector((state: RootState) => state.recipes.meals);

  useEffect(() => {
    dispatch(fetchMeals());
  }, [dispatch]);

  if (isLoading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  if (error) return <p>{error}</p>;

  return (
    <>
      <Header />
      <RecipeList meals={data} />
    </>
  );
};

export default List;
