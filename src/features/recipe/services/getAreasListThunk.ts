import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export const fetchAreas = createAsyncThunk<string[], void, { rejectValue: string }>(
  "recipes/fetchAreas",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
      return (response.data.meals || []).map((a: any) => a.strArea);
    } catch (err) {
      if (err instanceof AxiosError) {
        const serverMessage = err.response?.data?.message;
        return rejectWithValue(serverMessage || "Server Error");
      }
      return rejectWithValue("An unexpected error occurred");
    }
  }
);
