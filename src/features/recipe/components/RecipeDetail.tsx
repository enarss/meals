import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/rootReducer";
import { useEffect } from "react";
import { useParams } from "react-router";
import { fetchDetailMeal } from "../services/getDetailRecipesThunk";
import { clearRcipeDetail } from "../slices/recipeDetail";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import StyledImage from "../styled/StyledImage";
import { useIsMediumScreen } from "../../../theme/colors";
import IngredientsList from "./IngredientsList";

const RecipeDetail = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isMediumScreen = useIsMediumScreen();
  const { id } = useParams();
  const { meal, isLoading, error } = useSelector((state: RootState) => state.recipeDetail);

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
    <Box padding={"20px"}>
      <Stack
        direction={isMediumScreen ? "column" : "row"}
        alignItems={"center"}
        justifyContent={"center"}
        mb={"30px"}
        gap={"30px"}
      >
        <Stack>
          <Typography variant="h1" textAlign={"left"} fontSize={"50px"} mb={"10px"}>
            {meal.strMeal}
          </Typography>
          <Typography variant="h5" textAlign={"justify"} fontSize={"18px"}>
            {meal.strInstructions}
          </Typography>
        </Stack>
        <StyledImage src={meal.strMealThumb} />
      </Stack>
      <IngredientsList meal={meal} />
    </Box>
  );
};

export default RecipeDetail;
