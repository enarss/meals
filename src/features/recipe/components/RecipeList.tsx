import { Grid } from "@mui/material";
import RecipeCard from "./RecipeCard";
import { useNavigate } from "react-router";
import { Meal } from "../slices/recipeSlice";

interface Props {
  meals: Meal[];
}

const RecipeList = ({ meals }: Props) => {
  const navigate = useNavigate();
  return (
    <>
      <Grid container spacing={3} justifyContent={"center"}>
        {meals.map((meal) => (
          <RecipeCard
            key={meal.idMeal}
            meal={meal}
            onClick={() => navigate(`/recipe/${meal.idMeal}`)}
          />
        ))}
      </Grid>
    </>
  );
};

export default RecipeList;
