import { Card, CardActionArea, CardContent, Skeleton, Box } from "@mui/material";

const RecipeCardSkeleton = () => {
  return (
    <Card sx={{ width: "350px" }}>
      <CardActionArea>
        <Skeleton variant="rectangular" height={160} />

        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Skeleton width="80%" height={32} />
          </Box>

          <Skeleton variant="circular" width={24} height={24} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default RecipeCardSkeleton;
