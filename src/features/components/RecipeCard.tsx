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
}

const RecipeCard = ({ title, image }: Props) => {
  return (
    <Card sx={{ width: "350px" }}>
      <CardActionArea>
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
