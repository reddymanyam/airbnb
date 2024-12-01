import Auth from "../Auth/Auth";
import Layout from "../components/Layout/Layout";
import MainLayout from "../components/MainLayout/MainLayout/MainLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Experience from "../Pages/Experience/Experience";
import HelpCenter from "../Pages/Help/HelpCenter";
import HomePage from "../Pages/Home/HomePage";

export const Router = [
    {
        path:"/",
        element:<MainLayout />,
        children:[
            {path:'/', element:<Dashboard />}
        ]
    },
    {
        path : "/",
        element:<Layout />,
        children:[
            {path:'/', element:<Auth />},
            {path:'/homepage', element:<HomePage />},
            {path:'/helpcenter', element:<HelpCenter />},
            {path:'/experience', element:<Experience />},
        ]
    }
]