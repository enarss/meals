import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMealsBySearch = createAsyncThunk(
    "recipes/fetchBySearch",
    async (searchTerm: string) => {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      return response.data.meals || [];
    }
  );