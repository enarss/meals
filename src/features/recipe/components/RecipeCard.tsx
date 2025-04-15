import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface Props {
  title: string;
  image: string;
  onClick: () => void;
}

const RecipeCard = ({ title, image, onClick }: Props) => {
  return (
    <Card sx={{ width: "350px" }}>
      <CardActionArea onClick={onClick}>
        <CardMedia component="img" height="140" image={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default RecipeCard;
