import { Typography } from "@mui/material";
import React, { lazy, Suspense } from "react";
import ProtectedRoute from "./ProtectedRoute";

const Auth = lazy(() => import("../Auth/Auth"));
const Layout = lazy(() => import("../components/Layout/Layout"));
const MainLayout = lazy(() => import("../components/MainLayout/MainLayout"));
const Dashboard = lazy(() => import("../Pages/Dashboard/Dashboard"));
const Experience = lazy(() => import("../Pages/Experience/Experience"));
const HelpCenter = lazy(() => import("../Pages/Help/HelpCenter"));
const HomePage = lazy(() => import("../Pages/Home/HomePage"));
const ViewDetails = lazy(() => import("../Pages/ViewDetails/ViewDetails"));

// Loading fallback component
const LoadingFallback = () => (
    <Typography variant="h2" component="h2">Loading...</Typography>
);

const Router = [
    {
        path: "/",
        element: (
            <Suspense fallback={<LoadingFallback />}>
                <MainLayout />
            </Suspense>
        ),
        children: [
            {
                path: "auth",
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <Auth />
                    </Suspense>
                ),
            }
        ],
    },
    {
        path: "/",
        element: (
            <Suspense fallback={<LoadingFallback />}>
                <Auth />
            </Suspense>
        ),
        children: [
            {
                path: "dashboard",
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    </Suspense>
                ),
            },
            {
                path: "homepage",
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <ProtectedRoute>
                            <HomePage />
                        </ProtectedRoute>
                    </Suspense>
                ),
            },
            {
                path: "helpcenter",
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <ProtectedRoute>
                            <HelpCenter />
                        </ProtectedRoute>
                    </Suspense>
                ),
            },
            {
                path: "experience",
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <ProtectedRoute>
                            <Experience />
                        </ProtectedRoute>
                    </Suspense>
                ),
            },
            {
                path: "viewdetails",
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <ProtectedRoute>
                            <ViewDetails />
                        </ProtectedRoute>

                    </Suspense>
                ),
            },
        ],
    },
];

export default Router;