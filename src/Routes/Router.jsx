import React, { Suspense } from "react";

const Auth = React.lazy(() => import("../Auth/Auth"));
const Layout = React.lazy(() => import("../components/Layout/Layout"));
const MainLayout = React.lazy(() => import("../components/MainLayout/MainLayout"));
const Dashboard = React.lazy(() => import("../Pages/Dashboard/Dashboard"));
const Experience = React.lazy(() => import("../Pages/Experience/Experience"));
const HelpCenter = React.lazy(() => import("../Pages/Help/HelpCenter"));
const HomePage = React.lazy(() => import("../Pages/Home/HomePage"));


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
                index: true,
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
