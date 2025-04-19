import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  CircularProgress,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { clearMeals, setSelectedArea } from "../slices/recipeSlice";
import { fetchMealsByArea } from "../services/getRecipeByAreaThunk";
import { fetchMeals } from "../services/getRecipesAsyncThunk";
import { AppDispatch, RootState } from "../../../store/rootReducer";

interface Area {
  strArea: string;
}

const AreaFilter = () => {
  const [areas, setAreas] = useState<Area[]>([]);
  const [selected, setSelected] = useState("All");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch<AppDispatch>();
  const selectedArea = useSelector((state: RootState) => state.recipes.filters.selectedArea);

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
        setAreas(res.data.meals || []);
      } catch (err) {
        console.error("Error fetching areas", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAreas();
  }, []);

  useEffect(() => {
    if (selectedArea === "All") {
      dispatch(clearMeals());
      dispatch(fetchMeals());
    } else {
      dispatch(fetchMealsByArea(selectedArea));
    }
  }, [selectedArea]);

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    setSelected(value);
    dispatch(setSelectedArea(value));
  };

  return (
    <Box alignContent={"center"} textAlign={"center"} width={"25%"}>
      <FormControl fullWidth size="small" disabled={loading}>
        <InputLabel>By Country</InputLabel>
        <Select value={selected} label="By Country" onChange={handleChange}>
          <MenuItem value="All">All</MenuItem>
          {areas.map((area) => (
            <MenuItem key={area.strArea} value={area.strArea}>
              {area.strArea}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {loading && (
        <Box mt={1} display="flex" justifyContent="center">
          <CircularProgress size={24} />
        </Box>
      )}
    </Box>
  );
};

export default AreaFilter;
