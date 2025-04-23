import { Grid } from "@mui/material";
import RecipeCardSkeleton from "./RecipeCardSkeleton";

const RecipeListSkeleton = () => {
  return (
    <Grid container spacing={3} justifyContent="center">
      {[...Array(10)].map((_, index) => (
        <Grid key={index}>
          <RecipeCardSkeleton />
        </Grid>
      ))}
    </Grid>
  );
};

export default RecipeListSkeleton;
