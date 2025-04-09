import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface Meal {
  idMeal: string;
  strMeal: string;
  strInstructions?: string;
  strMealThumb: string;
}

interface RecipeState {
  meals: Meal[];
  areas: string[];
  isLoading: boolean;
  error: string | null;
}

const initialState: RecipeState = {
  meals: [],
  areas: [],
  isLoading: false,
  error: null,
};

export const fetchMeals = createAsyncThunk("recipes/fetchMeals", async () => {
  const response = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  return response.data.meals as Meal[];
});

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeals.pending, (state) => {
        (state.isLoading = true), (state.error = null);
      })
      .addCase(fetchMeals.fulfilled, (state, action) => {
        (state.meals = action.payload), (state.isLoading = false);
      })
      .addCase(fetchMeals.rejected, (state, action) => {
        state.error = action.error.message || "error";
        state.isLoading = false;
      });
  },
});

export default recipeSlice.reducer
