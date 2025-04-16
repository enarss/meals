import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/rootReducer";
import { Meal } from "../slices/recipeSlice";
import { toggleFavoriteAction } from "../slices/favoritesSlice";

interface Props {
  meal: Meal;
  onClick: () => void;
}

const RecipeCard = ({ meal, onClick }: Props) => {
  const isFavorite = useSelector((state: RootState) =>
    state.favorites.list.some((item) => item.idMeal === meal.idMeal)
  );
  const dispatch = useDispatch();
  const handleToggleFavorite = () => {
    dispatch(toggleFavoriteAction(meal));
  };
  const iconColor = isFavorite ? "error" : "disabled";

  return (
    <Card sx={{ width: "350px" }}>
      <CardActionArea onClick={onClick}>
        <CardMedia component="img" height="140" image={meal.strMealThumb} />
        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography gutterBottom variant="h5" component="div">
            {meal.strMeal}
          </Typography>
          <FavoriteIcon
            onClick={(e) => {
              e.stopPropagation();
              handleToggleFavorite();
            }}
            color={iconColor}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default RecipeCard;
