import { createBrowserRouter, Outlet } from "react-router";
import Layout from "../layout/Layout";
import List from "../features/recipe/pages/List";
import Detail from "../features/recipe/pages/Detail";
import Favorite from "../features/recipe/pages/Favorite";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      { index: true, element: <List /> },
      { path: "/recipe/:id", element: <Detail /> },
      { path: "/favorite", element: <Favorite /> },
    ],
  },
]);

export default router;
