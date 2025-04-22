import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearMeals, setSelectedArea } from "../slices/recipeSlice";
import { fetchMealsByArea } from "../services/getRecipeByAreaThunk";
import { fetchMeals } from "../services/getRecipesAsyncThunk";
import { AppDispatch, RootState } from "../../../store/rootReducer";
import { fetchAreas } from "../services/getAreasListThunk";
import { selectAreas } from "../slices/areaListSlice";

const AreaFilter = () => {
  const [selected, setSelected] = useState("All");
  const { areas, loading, error } = useSelector((state: RootState) => selectAreas(state));
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAreas());
  }, [dispatch]);

  const handleChange = useCallback(
    (event: SelectChangeEvent) => {
      const value = event.target.value;
      setSelected(value);
      dispatch(setSelectedArea(value));
      if (value === "All") {
        dispatch(clearMeals());
        dispatch(fetchMeals());
      } else {
        dispatch(fetchMealsByArea(value));
      }
    },
    [dispatch, selected]
  );

  console.log(areas);

  return (
    <Box alignContent={"center"} textAlign={"center"} width={"25%"}>
      <FormControl fullWidth size="small" disabled={loading}>
        <InputLabel>By Country</InputLabel>
        <Select value={selected} label="By Country" onChange={handleChange}>
          <MenuItem value="All">All</MenuItem>
          {areas.map((area) => (
            <MenuItem key={area} value={area}>
              {area}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {error && <Typography>{error}</Typography>}
    </Box>
  );
};

export default AreaFilter;
