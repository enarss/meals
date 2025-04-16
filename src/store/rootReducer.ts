import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "../features/recipe/slices/recipeSlice";
import recipeDetailReducer from "../features/recipe/slices/recipeDetail";
import favoriteReducer from "../features/recipe/slices/favoritesSlice";

export const store = configureStore({
  reducer: {
    recipes: recipeReducer,
    recipeDetail: recipeDetailReducer,
    favorites: favoriteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
