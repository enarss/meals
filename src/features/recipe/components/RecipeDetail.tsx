import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/rootReducer";
import { useEffect } from "react";
import { useParams } from "react-router";
import { fetchDetailMeal } from "../services/getDetailRecipesThunk";
import { clearRcipeDetail } from "../slices/recipeDetail";
import { Box, CircularProgress, Typography } from "@mui/material";

const RecipeDetail = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const { meal, isLoading, error } = useSelector(
    (state: RootState) => state.recipeDetail
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchDetailMeal(id));
    }

    return () => {
      dispatch(clearRcipeDetail());
    };
  }, [dispatch, id]);

  if (isLoading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  if (error) return <h2>{error}</h2>;
  if (!meal) return <h2>No data</h2>;
  return (
    <div>
        <Typography variant="h1">{meal.strMeal}</Typography>
        <img src={meal.strMealThumb} width={"20%"} />
    </div>
  )
};

export default RecipeDetail;
