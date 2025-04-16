import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/rootReducer";
import { useEffect } from "react";
import { useParams } from "react-router";
import { fetchDetailMeal } from "../services/getDetailRecipesThunk";
import { clearRcipeDetail } from "../slices/recipeDetail";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";

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

  const renderIngredients = () => {
    if (!meal) return null;

    const entries = Object.entries(meal);
    const ingredientsList = entries
      .filter(
        ([key, value]) =>
          key.startsWith("strIngredient") && value && value.trim()
      )
      .map(([key, value]) => {
        const index = key.replace("strIngredient", "");
        const measure = meal[`strMeasure${index}`];
        return `${value} - ${measure}`;
      });

    return (
      <>
        <ul>
          {ingredientsList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </>
    );
  };

  if (isLoading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  if (error) return <h2>{error}</h2>;
  if (!meal) return <h2>No data</h2>;
  return (
    <Box padding={"20px"}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        mb={"30px"}
        gap={"30px"}
      >
        <Stack>
          <Typography
            variant="h1"
            textAlign={"left"}
            fontSize={"50px"}
            mb={"10px"}
          >
            {meal.strMeal}
          </Typography>
          <Typography variant="h5" textAlign={"justify"} fontSize={"18px"}>
            {meal.strInstructions}
          </Typography>
        </Stack>
        <img src={meal.strMealThumb} width={"20%"} />
      </Stack>
      {renderIngredients()}
    </Box>
  );
};

export default RecipeDetail;
