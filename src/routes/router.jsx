import React from "react";
import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../features/public/layouts/PublicLayout";
import HomePage from "../features/public/pages/HomePage";
import LoginPage from "../features/auth/pages/Loginpage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import DashboardPage from "../features/dashboard/pages/DashboardPage";
import DashboardLayout from "../features/dashboard/layouts/DashboardLayout";
import ProductPage from "../features/products/pages/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "products",
        element: <ProductPage />,
      },
    ],
  },
]);

export default router;
