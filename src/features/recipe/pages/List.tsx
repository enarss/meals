import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/rootReducer";
import { useEffect } from "react";
import { fetchMeals } from "../services/getRecipesAsyncThunk";
import Header from "../components/Header";
import RecipeList from "../components/RecipeList";
import { selectMeals } from "../slices/recipeSlice";
import RecipeListSkeleton from "../components/RecipeListSkeleton";

const List = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { data, isLoading, error } = useSelector((state: RootState) =>
    selectMeals({ recipe: state.recipes })
  );

  useEffect(() => {
    dispatch(fetchMeals());
  }, [dispatch]);

  if (isLoading)
    return (
      <>
        <Header />
        <RecipeListSkeleton />
      </>
    );
  if (error) return <p>{error}</p>;

  return (
    <>
      <Header />
      <RecipeList meals={data} />
    </>
  );
};

export default List;
