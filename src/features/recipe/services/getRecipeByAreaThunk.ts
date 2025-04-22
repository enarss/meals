import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { Meal } from "../slices/recipeSlice";

export const fetchMealsByArea = createAsyncThunk<Meal[], string, { rejectValue: string }>(
  "recipes/fetchByArea",
  async (area: string, { rejectWithValue }) => {
    try {
      const response = await axios.get<{ meals: Meal[] | null }>(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      );
      return response.data.meals || [];
    } catch (err) {
      if (err instanceof AxiosError) {
        const errorMessage = err.response?.data?.message || err.message;
        return rejectWithValue(`API Error: ${errorMessage}`);
      }
      if (err instanceof Error) {
        return rejectWithValue(`Error: ${err.message}`);
      }
      return rejectWithValue("An unknown error occurred while fetching meals by area");
    }
  }
);
