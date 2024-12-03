import Auth from "../Auth/Auth";
import Layout from "../components/Layout/Layout";
import MainLayout from "../components/MainLayout/MainLayout/MainLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Experience from "../Pages/Experience/Experience";
import HelpCenter from "../Pages/Help/HelpCenter";
import HomePage from "../Pages/Home/HomePage";

const Router = [
    {
        path:"/",
        element:<MainLayout />,
        children:[
            {path:'/', element:<Dashboard />},
            { path: '*', element: <Navigate to="/" replace /> }
        ]
    },
    {
        path : "/auth",
        element:<Layout />,
        children:[
            {path:'/auth', element:<Auth />},
            {path:'/auth/homepage', element:<HomePage />},
            {path:'/auth/helpcenter', element:<HelpCenter />},
            {path:'/auth/experience', element:<Experience />},
        ]
    }
]

export default Router;