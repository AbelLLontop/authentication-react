import { ProtectedRoute } from "@/components";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "@/pages/Layout";
const LandingPage   = lazy(() => import("@/pages/Landing"));
const HomePage      = lazy(() => import("@/pages/Home"));
const DashboardPage = lazy(() => import("@/pages/Dashboard"));
const AnalyticsPage = lazy(() => import("@/pages/Analytics"));
const AdminPage     = lazy(() => import("@/pages/Admin"));

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      { path: "/landing", element: <LandingPage /> },
      {
        element: <ProtectedRoute />,
        children: [
          { path: "/home", element: <HomePage /> },
          { path: "/dashboard", element: <DashboardPage /> },
        ],
      },
      {
        path: "/analytics",
        element: (
          <ProtectedRoute redirectTo="/home" permission="analize">
            <AnalyticsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/admin",
        element: (
          <ProtectedRoute redirectTo="/home" permission="admin">
            <AdminPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
