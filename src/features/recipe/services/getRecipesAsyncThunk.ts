import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { Meal } from "../slices/recipeSlice";
import { RootState } from "../../../store/rootReducer";

export const fetchMeals = createAsyncThunk<Meal[], void, { state: RootState; rejectValue: string }>(
  "recipes/fetchMeals",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=");
      return response.data.meals as Meal[];
    } catch (err) {
      if (err instanceof AxiosError) {
        const serverMessage = err.response?.data?.message;
        return rejectWithValue(serverMessage || "Server Error");
      }
      return rejectWithValue("An unexpected error occurred");
    }
  },
  {
    condition: (_, { getState }) => {
      const { recipes } = getState();
      return recipes.meals.data.length === 0;
    },
  }
);
