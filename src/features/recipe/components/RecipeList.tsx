import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/rootReducer";
import { useEffect } from "react";
import { fetchMeals } from "../services/getRecipesAsyncThunk";
import { Box, CircularProgress, Grid } from "@mui/material";
import RecipeCard from "./RecipeCard";
import { useNavigate } from "react-router";
import Header from "./Header";

const RecipeList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading, error } = useSelector(
    (state: RootState) => state.recipes.meals
  );
  const navigate = useNavigate();

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
      <Grid container spacing={3} justifyContent={"center"}>
        {data.map((meal) => (
          <RecipeCard
            key={meal.idMeal}
            title={meal.strMeal}
            image={meal.strMealThumb}
            onClick={() => navigate(`/recipe/${meal.idMeal}`)}
          />
        ))}
      </Grid>
    </>
  );
};

export default RecipeList;
