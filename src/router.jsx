import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/work",
    element: <Home />,
  },
  {
    path: "/about",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Home />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default router;
