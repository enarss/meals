import { createSlice } from "@reduxjs/toolkit";
import { Meal } from "./recipeSlice";
import { fetchDetailMeal } from "../services/getDetailRecipesThunk";

interface RecipeDetailState {
  meal: Meal | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: RecipeDetailState = {
  meal: null,
  isLoading: false,
  error: null,
};

const recipeDetailSlice = createSlice({
  name: "recipeDetail",
  initialState,
  reducers: {
    clearRcipeDetail: (state) => {
      (state.meal = null), (state.isLoading = false), (state.error = null);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchDetailMeal.pending, (state) => {
        (state.isLoading = true), (state.error = null);
      })
      .addCase(fetchDetailMeal.fulfilled, (state, action) => {
        (state.isLoading = false), (state.meal = action.payload);
      })
      .addCase(fetchDetailMeal.rejected, (state, action) => {
        (state.isLoading = false),
          (state.error = action.error.message || "error");
      });
  },
});

export const { clearRcipeDetail } = recipeDetailSlice.actions;
export default recipeDetailSlice.reducer;
