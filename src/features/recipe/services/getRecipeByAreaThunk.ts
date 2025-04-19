import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMealsByArea = createAsyncThunk(
    "recipes/fetchByArea",
    async (area: string) => {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      );
      return response.data.meals || [];
    }
  );