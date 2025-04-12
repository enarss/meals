import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/colors";
import Header from "./layout/Header";
import NavBar from "./layout/NavBar";
import CssBaseline from "@mui/material/CssBaseline";
import RecipeList from "./features/recipe/components/RecipeList";

function App() {
  return (
    <ThemeProvider theme={theme} defaultMode="dark">
      <CssBaseline />
      <NavBar />
      <Header />
      <RecipeList />
    </ThemeProvider>
  );
}

export default App;
