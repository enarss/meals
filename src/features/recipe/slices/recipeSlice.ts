import { createSlice } from "@reduxjs/toolkit";
import { fetchMeals } from "../services/getRecipesAsyncThunk";

export interface Meal {
  idMeal: string;
  strMeal: string;
  strInstructions?: string;
  strMealThumb: string;
  strArea: string;
}

interface RecipeState {
  meals: {
    isLoading: boolean;
    error: string | null;
    data: Meal[];
  };
  filters: {
    areas: string[];
    search: string | null;
  };
}

const initialState: RecipeState = {
  meals: {
    isLoading: false,
    error: null,
    data: [],
  },
  filters: {
    areas: [],
    search: null,
  },
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeals.pending, (state) => {
        (state.meals.isLoading = true), (state.meals.error = null);
      })
      .addCase(fetchMeals.fulfilled, (state, action) => {
        (state.meals.data = action.payload), (state.meals.isLoading = false);
      })
      .addCase(fetchMeals.rejected, (state, action) => {
        state.meals.error = action.error.message || "error";
        state.meals.isLoading = false;
      });
  },
  selectors: {
    selectMeals(state) {
      return state.meals;
    },
    selectAvailableAreas(state) {
      return state.meals.data.map((meal) => meal.strArea);
    },
  },
});

export default recipeSlice.reducer;
export const { selectMeals } = recipeSlice.selectors;
