import Auth from "../Auth/Auth";
import Layout from "../components/Layout/Layout";
import MainLayout from "../components/MainLayout/MainLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Experience from "../Pages/Experience/Experience";
import HelpCenter from "../Pages/Help/HelpCenter";
import HomePage from "../Pages/Home/HomePage";

const Router = [
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
            {path:'/auth', element:<Auth />},
            {path:'/homepage', element:<HomePage />},
            {path:'/helpcenter', element:<HelpCenter />},
            {path:'/experience', element:<Experience />},
        ]
    }
]

export default Router;