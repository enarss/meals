import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/rootReducer.ts";
import { RouterProvider } from "react-router";
import router from "./routes/routes.tsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme/colors.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme} defaultMode="dark">
      <Provider store={store}>
        <CssBaseline />
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
