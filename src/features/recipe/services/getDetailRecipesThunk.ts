import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { Meal } from "../slices/recipeSlice";

export const fetchDetailMeal = createAsyncThunk<Meal, string, { rejectValue: string }>(
  "recipes/fetchDetailMeal",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axios.get<{ meals: Meal[] }>(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      if (!response.data.meals || !response.data.meals[0]) {
        return rejectWithValue("Meal not found");
      }
      return response.data.meals[0];
    } catch (err) {
      if (err instanceof AxiosError) {
        const message = err.response?.data?.message || err.message;
        return rejectWithValue(message);
      }
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);
