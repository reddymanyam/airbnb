import { Typography } from "@mui/material";
import React, { lazy, Suspense } from "react";
import Loader from "../loader/Loader";

// Utility HOC to wrap components in Suspense
const withSuspense = (Component) => (
  <Suspense fallback={<Loader />}>
    <Component />
  </Suspense>
);

// Lazy-loaded components
const Auth = lazy(() => import("../Auth/Auth"));
const Layout = lazy(() => import("../components/Layout/Layout"));
const MainLayout = lazy(() => import("../components/MainLayout/MainLayout"));
const Dashboard = lazy(() => import("../Pages/Dashboard/Dashboard"));
const Experience = lazy(() => import("../Pages/Experience/Experience"));
const HelpCenter = lazy(() => import("../Pages/Help/HelpCenter"));
const HomePage = lazy(() => import("../Pages/Home/HomePage"));
const ViewDetails = lazy(() => import("../Pages/ViewDetails/ViewDetails"));

const Router = [
  {
    path: "/",
    element: withSuspense(MainLayout),
    children: [
      {
        path: "auth",
        element: withSuspense(Auth),
      },
    ],
  },
  {
    path: "/",
    element: withSuspense(Layout),
    children: [
      {
        path: "dashboard",
        element: withSuspense(Dashboard),
      },
      {
        path: "homepage",
        element: withSuspense(HomePage),
      },
      {
        path: "helpcenter",
        element: withSuspense(HelpCenter),
      },
      {
        path: "experience",
        element: withSuspense(Experience),
      },
      {
        path: "viewdetails",
        element: withSuspense(ViewDetails),
      },
    ],
  },
];

export default Router;
