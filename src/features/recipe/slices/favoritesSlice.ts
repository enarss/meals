import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Meal } from "./recipeSlice";

interface favoriteRecipesState {
  list: Meal[];
}

const loadFromLocalStorage = (): Meal[] => {
  try {
    const data = localStorage.getItem("favorites");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error loading from localStorage:", error);
    return [];
  }
};

const initialState: favoriteRecipesState = {
  list: loadFromLocalStorage(),
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

      localStorage.setItem("favorites", JSON.stringify(state.list));
    },

    clearFavorites: (state) => {
      state.list = [];
      localStorage.removeItem("favorites");
    },
  },
});

export default favoriteSlice.reducer;
export const { toggleFavoriteAction, clearFavorites } = favoriteSlice.actions;
