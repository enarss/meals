import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDetailMeal = createAsyncThunk(
  "rcipes/fetchDetailMeal",
  async (id: string) => {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    return response.data.meals[0];
  }
);
