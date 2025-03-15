import { Typography } from "@mui/material";
import React, { lazy, Suspense } from "react";

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
        element: (
            <Suspense fallback={<Typography variant="h2" componetnt="h2">Loading...</Typography>}>
                <MainLayout />
            </Suspense>
        ),
        children: [
            {
                path: "auth",
                element: (
                    <Suspense fallback={<Typography variant="h2" componetnt="h2">Loading...</Typography>}>
                        <Auth />
                    </Suspense>
                ),
            }
        ],
    },
    {
        path: "/",
        element: (
            <Suspense fallback={<Typography variant="h2" componetnt="h2">Loading...</Typography>}>
                <Layout />
            </Suspense>
        ),
        children: [
            {
                path: "dashboard",
                element: (
                    <Suspense fallback={<Typography variant="h2" componetnt="h2">Loading...</Typography>}>
                        <Dashboard />
                    </Suspense>
                ),
            },
            {
                path: "homepage",
                element: (
                    <Suspense fallback={<Typography variant="h2" componetnt="h2">Loading...</Typography>}>
                        <HomePage />
                    </Suspense>
                ),
            },
            {
                path: "helpcenter",
                element: (
                    <Suspense fallback={<Typography variant="h2" componetnt="h2">Loading...</Typography>}>
                        <HelpCenter />
                    </Suspense>
                ),
            },
            {
                path: "experience",
                element: (
                    <Suspense fallback={<Typography variant="h2" componetnt="h2">Loading...</Typography>}>
                        <Experience />
                    </Suspense>
                ),
            },
            {
                path: "viewdetails",
                element: (
                    <Suspense fallback={<Typography variant="h2" componetnt="h2">Loading...</Typography>}>
                        <ViewDetails />
                    </Suspense>
                ),
            },
        ],
    },
];

export default Router;
