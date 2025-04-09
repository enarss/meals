import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/colors";
import Header from "./features/components/Header";
import NavBar from "./features/components/NavBar";
import CssBaseline from "@mui/material/CssBaseline";
import RecipeList from "./features/components/RecipeList";

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
