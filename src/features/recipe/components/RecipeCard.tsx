import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/rootReducer";
import { Meal } from "../slices/recipeSlice";
import { toggleFavoriteAction } from "../slices/favoritesSlice";
import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  meal: Meal;
  onClick: () => void;
}

const RecipeCard = ({ meal, onClick }: Props) => {
  const isFavorite = useSelector((state: RootState) =>
    state.favorites.list.some((item) => item.idMeal === meal.idMeal)
  );
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);
  const handleToggle = (e: React.MouseEvent) => {
    dispatch(toggleFavoriteAction(meal));
    e.stopPropagation();
    setClicked(true);
    setTimeout(() => setClicked(false), 400);
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
          <IconButton onClick={(e) => handleToggle(e)}>
            <motion.div
              key={isFavorite ? "liked" : "unliked"}
              animate={clicked ? { scale: [1, 1.4, 1], opacity: [1, 0.9, 1] } : {}}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <motion.div
                animate={isFavorite ? { scale: [1, 1.1, 1] } : {}}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <FavoriteIcon color={iconColor} />
              </motion.div>
            </motion.div>
          </IconButton>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default RecipeCard;
