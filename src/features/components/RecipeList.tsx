import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/rootReducer";
import { useEffect } from "react";
import { fetchMeals } from "../services/getRecipesAsyncThunk";
import { Box, CircularProgress, Grid } from "@mui/material";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { meals, isLoading, error } = useSelector(
    (state: RootState) => state.recipes
  );

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
    <Grid container spacing={3} justifyContent={"center"}>
      {meals.map((meal) => (
        <RecipeCard
          key={meal.idMeal}
          title={meal.strMeal}
          image={meal.strMealThumb}
        />
      ))}
    </Grid>
  );
};

export default RecipeList;
