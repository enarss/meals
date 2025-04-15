import { createBrowserRouter, Outlet } from "react-router";
import Layout from "../layout/Layout";
import List from "../features/recipe/pages/list";
import Detail from "../features/recipe/pages/detail";

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
    ],
  },
]);

export default router;
