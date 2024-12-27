import React, { lazy, Suspense } from "react";

const Auth = lazy(() => import("../Auth/Auth"));
const Layout = lazy(() => import("../components/Layout/Layout"));
const MainLayout = lazy(() => import("../components/MainLayout/MainLayout"));
const Dashboard = lazy(() => import("../Pages/Dashboard/Dashboard"));
const Experience = lazy(() => import("../Pages/Experience/Experience"));
const HelpCenter = lazy(() => import("../Pages/Help/HelpCenter"));
const HomePage = lazy(() => import("../Pages/Home/HomePage"));

const Router = [
    {
        path: "/",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <MainLayout />
            </Suspense>
        ),
        children: [
            {
                index: true, // Use index for the default route instead of path:'/'
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Dashboard />
                    </Suspense>
                ),
            },
        ],
    },
    {
        path: "/",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <Layout />
            </Suspense>
        ),
        children: [
            {
                path: "auth",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Auth />
                    </Suspense>
                ),
            },
            {
                path: "homepage",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <HomePage />
                    </Suspense>
                ),
            },
            {
                path: "helpcenter",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <HelpCenter />
                    </Suspense>
                ),
            },
            {
                path: "experience",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Experience />
                    </Suspense>
                ),
            },
        ],
    },
];

export default Router;
