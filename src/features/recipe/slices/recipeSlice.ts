import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchMeals } from "../services/getRecipesAsyncThunk";
import { fetchMealsBySearch } from "../services/getRecipeBySearchThunk";

export interface Meal {
  idMeal: string;
  strMeal: string;
  strInstructions: string;
  strMealThumb: string;
  strArea: string;
  [key: string]: string;
}

interface RecipeState {
  meals: {
    isLoading: boolean;
    error: string | null;
    data: Meal[];
  };
  filters: {
    selectedArea: string | null;
    searchQuery: string | null;
  };
}

const initialState: RecipeState = {
  meals: {
    isLoading: false,
    error: null,
    data: [],
  },
  filters: {
    selectedArea: null,
    searchQuery: null,
  },
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.filters.searchQuery = action.payload;
    },
    setSelectedArea(state, action: PayloadAction<string>) {
      state.filters.selectedArea = action.payload;
    },
    clearMeals(state) {
      state.meals.data = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeals.pending, (state) => {
        (state.meals.isLoading = true), (state.meals.error = null);
      })
      .addCase(fetchMeals.fulfilled, (state, action) => {
        (state.meals.data = action.payload), (state.meals.isLoading = false);
      })
      .addCase(fetchMeals.rejected, (state, action) => {
        state.meals.error = action.error.message || "Error";
        state.meals.isLoading = false;
      })
      .addCase(fetchMealsBySearch.pending, (state) => {
        state.meals.isLoading= true;
        state.meals.error = null;
      })
      .addCase(fetchMealsBySearch.fulfilled, (state, action) => {
        state.meals.isLoading = false;
        state.meals.data = action.payload;
      })
      .addCase(fetchMealsBySearch.rejected, (state, action) => {
        state.meals.isLoading = false;
        state.meals.error = action.error.message || "Error";
      })
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
export const { setSearchQuery, setSelectedArea, clearMeals } = recipeSlice.actions;
