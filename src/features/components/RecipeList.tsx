import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store/rootReducer";
import { useEffect } from "react";
import { fetchMeals } from "../slices/recipeSlice";
import { Grid } from "@mui/material";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { meals, isLoading, error } = useSelector((state: RootState) => state.recipes)

    useEffect(() => {
        dispatch(fetchMeals())
    }, [dispatch])

    if(isLoading) return <p>is Loading</p>
    if(error) return <p>{error}</p>

    return (
        <Grid>
            {meals.map((meal) => (
                <RecipeCard key={meal.idMeal} title={meal.strMeal} image={meal.strMealThumb} />
            ))}
        </Grid>
    )
}

export default RecipeList