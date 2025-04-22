import { createSlice } from "@reduxjs/toolkit";
import { fetchAreas } from "../services/getAreasListThunk";

interface AreaListState {
  areas: string[];
  loading: boolean;
  error: string | null;
}

const initialState: AreaListState = {
  areas: [],
  loading: false,
  error: null,
};

const areaListSlice = createSlice({
  name: "areaList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAreas.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAreas.fulfilled, (state, action) => {
        state.loading = false;
        state.areas = action.payload;
      })
      .addCase(fetchAreas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error";
      });
  },
  selectors: {
    selectAreas(state) {
      return state;
    },
  },
});

export default areaListSlice.reducer;
export const { selectAreas } = areaListSlice.selectors;
