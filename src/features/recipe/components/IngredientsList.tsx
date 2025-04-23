import Typography from "@mui/material/Typography";
import { Meal } from "../slices/recipeSlice";
import Grid from "@mui/material/Grid";

interface Props {
  meal: Meal;
}

const IngredientsList = ({ meal }: Props) => {
  if (!meal) return null;

  const entries = Object.entries(meal);
  const ingredientsList = entries
    .filter(([key, value]) => key.startsWith("strIngredient") && value && value.trim())
    .map(([key, value]) => {
      const index = key.replace("strIngredient", "");
      const measure = meal[`strMeasure${index}`];
      return `${value} - ${measure}`;
    });

  return (
    <div>
      <Typography variant="h5" fontSize={"30px"}>
        ingredients:
      </Typography>
      <Grid
        container
        justifyContent={"center"}
        paddingY={"30px"}
        columnSpacing={"30px"}
        rowSpacing={"40px"}
      >
        {ingredientsList.map((item, index) => {
          const ingredientName = item.split("-")[0].trim().replace(" ", "_");
          const imageUrl = `https://www.themealdb.com/images/ingredients/${ingredientName}.png`;
          return (
            <Grid key={index} justifyItems={"center"}>
              <img src={imageUrl} width={"200px"} alt="" />
              <Typography>{item}</Typography>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default IngredientsList;
