import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Meal } from "./recipeSlice";

interface favoriteRecipesState {
  list: Meal[];
}

const initialState: favoriteRecipesState = {
  list: [],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavoriteAction: (state, action: PayloadAction<Meal>) => {
      const existingIndex = state.list.findIndex(
        (meal) => meal.idMeal === action.payload.idMeal
      );

      if (existingIndex >= 0) {
        state.list.splice(existingIndex, 1);
      } else {
        state.list.push(action.payload);
      }
    },

    clearFavorites: (state) => {
      state.list = [];
    },
  },
});

export default favoriteSlice.reducer;
export const { toggleFavoriteAction, clearFavorites } = favoriteSlice.actions;
