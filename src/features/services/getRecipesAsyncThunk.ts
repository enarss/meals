import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Meal } from "../slices/recipeSlice";

export const fetchMeals = createAsyncThunk("recipes/fetchMeals", async () => {
  const response = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  return response.data.meals as Meal[];
});
