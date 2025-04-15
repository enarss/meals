import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/rootReducer.ts";
import { RouterProvider } from "react-router";
import router from "./routes/routes.tsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme/colors.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme} defaultMode="dark">
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
